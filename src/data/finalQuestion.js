/**
 * Final question — always shown last, after the 8 random questions.
 *
 * Its answer does NOT score personality points. Instead it picks a
 * tie-break path within the winning nature's distro family:
 *
 *   forward → head-on, drive
 *   plan    → with a clear plan
 *   help    → with people around
 *   pace    → at my own pace
 *
 * Each nature has a distro mapped to each of these four paths. See
 * lib/scoring.js for the full mapping.
 */

export const finalQuestion = {
  id: 'final',
  text: "When the road gets hard, what keeps you going?",
  options: [
    { text: "The drive to see how far I can go.", path: 'forward' },
    { text: "Knowing exactly where I am and where I'm headed.", path: 'plan' },
    { text: "The people who walk beside me.", path: 'help' },
    { text: "Knowing there's no rush — the road is mine.", path: 'pace' },
  ],
};
