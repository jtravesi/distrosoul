/**
 * Question pool for findyourdistro.
 *
 * Each question has the following shape:
 *
 *   {
 *     id: string,                    // stable identifier
 *     text: string,                  // the question shown to the user
 *     options: [
 *       {
 *         text: string,              // the choice text
 *         points: {                  // points added to each personality
 *           Inquieto?: number,
 *           Sereno?: number,
 *           Estoico?: number,
 *           Sonador?: number,
 *           Cauteloso?: number,
 *           Curioso?: number,
 *         }
 *       },
 *       ...                          // 4 options per question
 *     ]
 *   }
 *
 * The pool contains 19 personality questions. At runtime, 8 are selected
 * at random and presented in random order, followed always by the final
 * question (in finalQuestion.js).
 *
 * NOTE: This file is intentionally a placeholder. The full 19 questions
 * will be populated in Phase 3, after the visual base is validated.
 */

export const questions = [
  // TODO: populate with the 19 questions designed in the planning phase.
];
