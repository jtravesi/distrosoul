/**
 * Final question — always shown last, after the 8 random questions.
 *
 * Awards no nature points; the chosen option's `path` picks which distro
 * within the winning nature's family.
 *
 *   forward → head-on, drive
 *   plan    → with a clear plan
 *   help    → with people around
 *   pace    → at my own pace
 */

export const finalQuestion = {
  id: 'final',
  text: {
    en: "When the road gets hard, what keeps you going?",
    es: "Cuando el camino se pone difícil, ¿qué te empuja a seguir?",
  },
  options: [
    {
      text: {
        en: "The drive to see how far I can go.",
        es: "Las ganas de ver hasta dónde puedo llegar.",
      },
      path: 'forward',
    },
    {
      text: {
        en: "Knowing exactly where I am and where I'm headed.",
        es: "Saber exactamente dónde estoy y a dónde voy.",
      },
      path: 'plan',
    },
    {
      text: {
        en: "The people who walk beside me.",
        es: "La gente que me acompaña.",
      },
      path: 'help',
    },
    {
      text: {
        en: "Knowing there's no rush — the road is mine.",
        es: "Saber que no hay prisa, que el camino es mío.",
      },
      path: 'pace',
    },
  ],
};
