/**
 * Final question — fixed, always shown last after the 8 random questions.
 *
 * Its answer does NOT score personality points: it determines the
 * tie-break path within the winning nature's distro family.
 *
 * The four paths are:
 *   - 'frente'  → de frente
 *   - 'plan'    → con un plan
 *   - 'ayuda'   → pidiendo ayuda
 *   - 'ritmo'   → a mi ritmo
 *
 * Each nature has a distro mapped to each of these four paths.
 * See lib/scoring.js for the full mapping.
 *
 * NOTE: Placeholder for Phase 3.
 */

export const finalQuestion = {
  id: 'final',
  text: 'Cuando el camino se pone difícil, ¿qué te empuja a seguir?',
  options: [
    // TODO: populate options with their tie-break paths.
    // { text: '...', path: 'frente' },
    // { text: '...', path: 'plan' },
    // { text: '...', path: 'ayuda' },
    // { text: '...', path: 'ritmo' },
  ],
};
