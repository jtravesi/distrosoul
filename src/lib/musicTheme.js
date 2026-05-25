/**
 * Procedural ambient theme — pure Web Audio, no audio files.
 *
 * Original composition: a slow four-bar loop at 64 BPM that cycles through
 * a vi–IV–I–V progression in A minor (Am → F → C → G). Soft triangle pads
 * carry the chord, a sine bass holds the root, and a sparse triangle
 * melody dots in notes from the A minor pentatonic. A feedback delay plus
 * a gentle low-pass give the texture some space and warmth.
 *
 *   startTheme()  fades the master gain up and starts the lookahead scheduler.
 *   stopTheme()   stops scheduling new notes and fades the master down so
 *                 any tail (delay echoes) decays naturally.
 *
 * Both calls are idempotent; the audio graph is built once and reused
 * between toggles.
 */

import { getCtx, ensureRunning } from './audio';

const TEMPO_BPM = 64;
const SECONDS_PER_BEAT = 60 / TEMPO_BPM;
const STEPS_PER_LOOP = 16; // 4 bars × 4 beats
const LOOKAHEAD_INTERVAL_MS = 25;
const SCHEDULE_AHEAD_SEC = 0.1;
const FADE_IN_SEC = 1.5;
const FADE_OUT_SEC = 0.6;
const MASTER_TARGET = 0.22;

// Each event sits at a step (0..15). Pads + bass sustain through the whole
// chord (4 beats). Melody notes are sparse and shorter.
const SCORE = [
  // ── Bar 1 — Am
  { type: 'pad',    step: 0,  freq: 220.00, beats: 4 }, // A3
  { type: 'pad',    step: 0,  freq: 261.63, beats: 4 }, // C4
  { type: 'pad',    step: 0,  freq: 329.63, beats: 4 }, // E4
  { type: 'bass',   step: 0,  freq: 110.00, beats: 4 }, // A2
  { type: 'melody', step: 1,  freq: 659.25, beats: 2 }, // E5
  { type: 'melody', step: 3,  freq: 523.25, beats: 1 }, // C5

  // ── Bar 2 — F
  { type: 'pad',    step: 4,  freq: 174.61, beats: 4 }, // F3
  { type: 'pad',    step: 4,  freq: 220.00, beats: 4 }, // A3
  { type: 'pad',    step: 4,  freq: 261.63, beats: 4 }, // C4
  { type: 'bass',   step: 4,  freq:  87.31, beats: 4 }, // F2
  { type: 'melody', step: 5,  freq: 440.00, beats: 2 }, // A4
  { type: 'melody', step: 7,  freq: 523.25, beats: 1 }, // C5

  // ── Bar 3 — C
  { type: 'pad',    step: 8,  freq: 261.63, beats: 4 }, // C4
  { type: 'pad',    step: 8,  freq: 329.63, beats: 4 }, // E4
  { type: 'pad',    step: 8,  freq: 392.00, beats: 4 }, // G4
  { type: 'bass',   step: 8,  freq: 130.81, beats: 4 }, // C3
  { type: 'melody', step: 9,  freq: 783.99, beats: 1.5 }, // G5
  { type: 'melody', step: 11, freq: 659.25, beats: 1 }, // E5

  // ── Bar 4 — G
  { type: 'pad',    step: 12, freq: 196.00, beats: 4 }, // G3
  { type: 'pad',    step: 12, freq: 246.94, beats: 4 }, // B3
  { type: 'pad',    step: 12, freq: 293.66, beats: 4 }, // D4
  { type: 'bass',   step: 12, freq:  98.00, beats: 4 }, // G2
  { type: 'melody', step: 13, freq: 587.33, beats: 2 }, // D5
  { type: 'melody', step: 15, freq: 440.00, beats: 1 }, // A4
];

let masterGain = null;
let lowpass = null;
let delayNode = null;
let delayFeedback = null;
let graphBuilt = false;

let started = false;
let intervalId = null;
let nextStepTime = 0;
let currentStep = 0;

function buildGraph(c) {
  masterGain = c.createGain();
  masterGain.gain.value = 0;

  lowpass = c.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 2200;
  lowpass.Q.value = 0.7;

  delayNode = c.createDelay(1.5);
  delayNode.delayTime.value = SECONDS_PER_BEAT * 0.75; // dotted-eighth-ish echo
  delayFeedback = c.createGain();
  delayFeedback.gain.value = 0.22;

  // Dry path
  masterGain.connect(lowpass).connect(c.destination);

  // Wet path with internal feedback loop
  masterGain.connect(delayNode);
  delayNode.connect(delayFeedback);
  delayFeedback.connect(delayNode);
  delayNode.connect(lowpass);

  graphBuilt = true;
}

function scheduleNote(c, note, time) {
  const dur = note.beats * SECONDS_PER_BEAT;

  let oscType;
  let peak;
  let attack;
  let release;
  switch (note.type) {
    case 'pad':
      oscType = 'triangle';
      peak = 0.05;
      attack = 0.25;
      release = 0.5;
      break;
    case 'bass':
      oscType = 'sine';
      peak = 0.10;
      attack = 0.10;
      release = 0.6;
      break;
    case 'melody':
    default:
      oscType = 'triangle';
      peak = 0.07;
      attack = 0.05;
      release = 0.35;
  }

  const osc = c.createOscillator();
  osc.type = oscType;
  osc.frequency.value = note.freq;

  const noteGain = c.createGain();
  const releaseStart = time + Math.max(attack, dur - release);
  noteGain.gain.setValueAtTime(0, time);
  noteGain.gain.linearRampToValueAtTime(peak, time + attack);
  noteGain.gain.setValueAtTime(peak, releaseStart);
  noteGain.gain.linearRampToValueAtTime(0.0001, time + dur);

  osc.connect(noteGain).connect(masterGain);
  osc.start(time);
  osc.stop(time + dur + 0.05);
}

function tick(c) {
  while (nextStepTime < c.currentTime + SCHEDULE_AHEAD_SEC) {
    const stepInLoop = currentStep % STEPS_PER_LOOP;
    for (const note of SCORE) {
      if (note.step === stepInLoop) scheduleNote(c, note, nextStepTime);
    }
    nextStepTime += SECONDS_PER_BEAT;
    currentStep += 1;
  }
}

export async function startTheme() {
  if (started) return;
  const c = await ensureRunning();
  if (!c) return;

  if (!graphBuilt) buildGraph(c);
  started = true;

  const now = c.currentTime;
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.setValueAtTime(0, now);
  masterGain.gain.linearRampToValueAtTime(MASTER_TARGET, now + FADE_IN_SEC);

  nextStepTime = now + 0.1;
  currentStep = 0;
  intervalId = setInterval(() => tick(c), LOOKAHEAD_INTERVAL_MS);
}

export function stopTheme() {
  if (!started) return;
  started = false;

  if (intervalId != null) {
    clearInterval(intervalId);
    intervalId = null;
  }

  const c = getCtx();
  if (!c || !masterGain) return;
  const now = c.currentTime;
  masterGain.gain.cancelScheduledValues(now);
  masterGain.gain.setValueAtTime(masterGain.gain.value, now);
  masterGain.gain.linearRampToValueAtTime(0, now + FADE_OUT_SEC);
}
