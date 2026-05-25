/**
 * Tiny audio helpers — Web Audio API only, no external files required.
 *
 * The AudioContext is lazy-initialised on the first user interaction so
 * we respect autoplay policies. Everything fails silently if the browser
 * has no Web Audio support.
 */

let ctx = null;

export function getCtx() {
  if (ctx) return ctx;
  if (typeof window === 'undefined') return null;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return null;
  ctx = new AC();
  return ctx;
}

export async function ensureRunning() {
  const c = getCtx();
  if (!c) return null;
  if (c.state === 'suspended') {
    try { await c.resume(); } catch { /* ignore */ }
  }
  return c;
}

/**
 * Short triangle-wave blip used by the typewriter. Pitch is jittered
 * slightly so consecutive characters don't sound robotic.
 */
export async function playBlip() {
  const c = await ensureRunning();
  if (!c) return;

  const osc = c.createOscillator();
  const gain = c.createGain();

  osc.type = 'triangle';
  osc.frequency.value = 620 + Math.random() * 220;

  const now = c.currentTime;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.045, now + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

  osc.connect(gain).connect(c.destination);
  osc.start(now);
  osc.stop(now + 0.08);
}
