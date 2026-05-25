/**
 * Scoring for distrosoul.
 *
 *   pickNature(answeredOptions) → winning nature (ties broken randomly)
 *   pickDistro(nature, path)    → distro id from the nature × path matrix
 *   calculateResult(answeredOptions, finalPath) → distro id (end-to-end)
 *
 * Inputs are the option objects the user picked, not indexes. Each option's
 * `points` is a partial map { Restless?: n, Serene?: n, ... } — missing
 * natures count as zero.
 */

export const NATURES = [
  'Restless',
  'Serene',
  'Stoic',
  'Dreamer',
  'Cautious',
  'Curious',
];

// Display labels for each nature ID. The IDs above stay in English
// because they're internal keys; this map is only for UI rendering.
export const NATURE_NAMES = {
  Restless: { en: 'Restless', es: 'Inquieto' },
  Serene:   { en: 'Serene',   es: 'Sereno' },
  Stoic:    { en: 'Stoic',    es: 'Estoico' },
  Dreamer:  { en: 'Dreamer',  es: 'Soñador' },
  Cautious: { en: 'Cautious', es: 'Cauteloso' },
  Curious:  { en: 'Curious',  es: 'Curioso' },
};

// nature × path → distro id (key into reveals.js).
// Restless × help is intentionally empty; calculateResult falls back to
// EndeavourOS (Restless × pace) as the neighbour suggested in the brief.
export const distroMap = {
  Restless: { forward: 'arch',          plan: 'gentoo',              help: null,            pace: 'endeavouros' },
  Serene:   { forward: 'pop_os_serene', plan: 'manjaro',             help: 'ubuntu',        pace: 'mint' },
  Stoic:    { forward: 'slackware',     plan: 'debian',              help: 'opensuse_leap', pace: 'mx_linux' },
  Dreamer:  { forward: 'garuda',        plan: 'pop_os_dreamer',      help: 'zorin',         pace: 'elementary' },
  Cautious: { forward: 'tails',         plan: 'qubes',               help: 'parrot',        pace: 'whonix' },
  Curious:  { forward: 'cachyos',       plan: 'opensuse_tumbleweed', help: 'fedora',        pace: 'nixos' },
};

export function pickNature(answeredOptions) {
  const totals = Object.fromEntries(NATURES.map((n) => [n, 0]));
  for (const option of answeredOptions) {
    if (!option?.points) continue;
    for (const [nature, value] of Object.entries(option.points)) {
      if (nature in totals) totals[nature] += value;
    }
  }

  const max = Math.max(...Object.values(totals));
  const winners = NATURES.filter((n) => totals[n] === max);
  return winners[Math.floor(Math.random() * winners.length)];
}

export function pickDistro(nature, path) {
  const row = distroMap[nature];
  if (!row) return null;
  // Restless × help fallback → EndeavourOS (Restless × pace).
  if (nature === 'Restless' && path === 'help') return row.pace;
  return row[path] ?? null;
}

export function calculateResult(answeredOptions, finalPath) {
  const nature = pickNature(answeredOptions);
  return pickDistro(nature, finalPath);
}
