/**
 * Scoring logic for findyourdistro.
 *
 * Inputs:
 *   - The user's answers (array of selected option indexes for each shown question)
 *   - The list of shown questions (8 random + 1 final)
 *
 * Output:
 *   - The chosen distro id
 *
 * Algorithm:
 *   1. Sum points across the 8 personality questions to find the winning nature.
 *   2. Ties are broken randomly (PMD-style).
 *   3. The final question's path determines which distro within the winning
 *      nature's family is assigned.
 *
 * NOTE: Placeholder for Phase 3.
 */

// The 6 personality natures
export const NATURES = [
  'Inquieto',
  'Sereno',
  'Estoico',
  'Sonador',
  'Cauteloso',
  'Curioso',
];

// Mapping nature + tie-break path → distro id
// Will be filled with the 22-distro mapping designed in the planning phase.
export const distroMap = {
  // Example shape (placeholder):
  // Inquieto: { frente: 'arch', plan: 'gentoo', ayuda: '...', ritmo: 'endeavouros' },
};

export function calculateResult(answers, shownQuestions, finalAnswer) {
  // TODO: implement scoring in Phase 3.
  void answers;
  void shownQuestions;
  void finalAnswer;
  return null;
}
