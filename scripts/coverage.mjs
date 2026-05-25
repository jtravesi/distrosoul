/**
 * Dev-only coverage script.
 *
 *   node scripts/coverage.mjs            (deterministic + 10k random sample)
 *   node scripts/coverage.mjs --runs N   (custom sample size)
 *
 * Part 1 — Reachability:
 *   For each nature, find the option in every question that gives the
 *   most points to that nature. Simulate 8 questions answered with those
 *   picks. Confirm the nature wins. Then iterate the four paths and
 *   verify the resulting distro id matches the (nature × path) cell in
 *   the distroMap and exists in reveals.
 *
 * Part 2 — Empirical distribution:
 *   Run N quizzes with uniformly random answers + uniformly random
 *   final path. Tally results per distro. Flag any distro that never
 *   came up so the question pool can be rebalanced if needed.
 */

import { questions } from '../src/data/questions.js';
import { finalQuestion } from '../src/data/finalQuestion.js';
import { reveals } from '../src/data/reveals.js';
import { selectQuestions } from '../src/lib/selectQuestions.js';
import {
  NATURES,
  distroMap,
  pickNature,
  pickDistro,
  calculateResult,
} from '../src/lib/scoring.js';

const args = process.argv.slice(2);
const runsIdx = args.indexOf('--runs');
const RUNS = runsIdx >= 0 ? Number(args[runsIdx + 1]) : 10_000;
const PATHS = finalQuestion.options.map((o) => o.path);

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';

function optionScoreFor(option, nature) {
  return option?.points?.[nature] ?? 0;
}

function maxOptionForNature(question, nature) {
  let best = question.options[0];
  let bestScore = optionScoreFor(best, nature);
  for (const opt of question.options) {
    const s = optionScoreFor(opt, nature);
    if (s > bestScore) {
      best = opt;
      bestScore = s;
    }
  }
  return best;
}

function forceNatureRun(nature) {
  // For every question in the pool, pick the option that maximises `nature`.
  // Use the FULL pool (19), not just 8 — but we score only the first 8 anyway.
  const forced = questions.slice(0, 8).map((q) => maxOptionForNature(q, nature));
  return forced;
}

console.log(`${BOLD}=== Part 1 — Reachability (deterministic) ===${RESET}\n`);

const expectedDistros = new Set();
for (const nature of NATURES) {
  for (const path of PATHS) {
    const cell = distroMap[nature][path];
    if (cell != null) expectedDistros.add(cell);
  }
}
// Apply the Restless × help fallback explicitly.
expectedDistros.add('endeavouros');

let allReachable = true;
const reachableFromForcing = new Set();

for (const nature of NATURES) {
  const forced = forceNatureRun(nature);
  const winner = pickNature(forced);
  const winMark = winner === nature ? `${GREEN}✓${RESET}` : `${RED}✗${RESET}`;
  console.log(
    `${BOLD}${nature}${RESET}: forced run → winner = ${winner} ${winMark}`,
  );

  if (winner !== nature) {
    allReachable = false;
    console.log(
      `  ${RED}cannot force this nature with the current pool — coverage check inconclusive for paths below${RESET}`,
    );
  }

  for (const path of PATHS) {
    const distro = pickDistro(nature, path);
    const inReveals = distro && reveals[distro];
    const mark = inReveals ? `${GREEN}✓${RESET}` : `${RED}✗${RESET}`;
    const note =
      nature === 'Restless' && path === 'help'
        ? `${DIM}(fallback to ${distro})${RESET}`
        : '';
    console.log(
      `   ${path.padEnd(8)} → ${distro ?? '(none)'} ${mark} ${note}`,
    );
    if (inReveals) reachableFromForcing.add(distro);
    else allReachable = false;
  }
  console.log();
}

const allRevealIds = new Set(Object.keys(reveals));
const unreachable = [...allRevealIds].filter((id) => !reachableFromForcing.has(id));
if (unreachable.length === 0) {
  console.log(`${GREEN}All ${allRevealIds.size} reveal ids are reachable.${RESET}\n`);
} else {
  console.log(
    `${RED}Reveal ids not reached by deterministic forcing: ${unreachable.join(', ')}${RESET}\n`,
  );
  allReachable = false;
}

console.log(`${BOLD}=== Part 2 — Empirical distribution (${RUNS} random runs) ===${RESET}\n`);

const tally = Object.fromEntries(Object.keys(reveals).map((id) => [id, 0]));
const natureTally = Object.fromEntries(NATURES.map((n) => [n, 0]));

for (let i = 0; i < RUNS; i += 1) {
  const shown = selectQuestions(questions, 8);
  const answered = shown.map(
    (q) => q.options[Math.floor(Math.random() * q.options.length)],
  );
  const finalPath = PATHS[Math.floor(Math.random() * PATHS.length)];
  const winner = pickNature(answered);
  natureTally[winner] += 1;
  const distro = calculateResult(answered, finalPath);
  if (distro && distro in tally) tally[distro] += 1;
}

console.log(`${BOLD}Nature distribution:${RESET}`);
const natureRows = NATURES.map((n) => {
  const pct = ((natureTally[n] / RUNS) * 100).toFixed(1);
  return `  ${n.padEnd(10)} ${String(natureTally[n]).padStart(6)}  (${pct}%)`;
});
console.log(natureRows.join('\n'));

console.log(`\n${BOLD}Distro distribution (sorted, rare → common):${RESET}`);
const sorted = Object.entries(tally).sort((a, b) => a[1] - b[1]);
for (const [id, count] of sorted) {
  const pct = ((count / RUNS) * 100).toFixed(2);
  let mark = '';
  if (count === 0) mark = ` ${RED}NEVER REACHED${RESET}`;
  else if (count / RUNS < 0.005) mark = ` ${YELLOW}rare (<0.5%)${RESET}`;
  console.log(`  ${id.padEnd(22)} ${String(count).padStart(6)}  (${pct}%)${mark}`);
}

const never = sorted.filter(([, c]) => c === 0).map(([id]) => id);
console.log();
if (never.length === 0) {
  console.log(`${GREEN}Every distro was reached at least once under random play.${RESET}`);
} else {
  console.log(
    `${YELLOW}Distros never reached under random play: ${never.join(', ')}${RESET}`,
  );
  console.log(
    `${DIM}These are reachable in theory but unlikely under uniform-random answers — usually a sign the question pool is biased away from the relevant nature.${RESET}`,
  );
}

process.exit(allReachable ? 0 : 1);
