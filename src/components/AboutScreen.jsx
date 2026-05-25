import { useLanguage } from '../lib/LanguageContext';

const TITLE = { en: 'Readme', es: 'Léeme' };
const PARAGRAPHS = [
  {
    en:
      "This is a small homage to the personality test that opens the " +
      "Pokémon Mystery Dungeon games — and a way of thinking about " +
      "Linux distributions as companions rather than tools. The right " +
      "distro isn't the most popular or the most powerful. It's the " +
      "one that fits.",
    es:
      "Es un pequeño homenaje al test de personalidad que abre los " +
      "juegos de Pokémon Mundo Misterioso, y una forma de pensar en " +
      "las distribuciones de Linux como compañeros, no como herramientas. " +
      "La distro correcta no es la más popular ni la más potente. Es la " +
      "que te encaja.",
  },
  {
    en:
      "All 22 distros in the pool are real, alive, and waiting. Take " +
      "your time. There are no wrong answers — only ones that point " +
      "at different parts of who you are.",
    es:
      "Las 22 distros del pool son reales, están vivas, y te esperan. " +
      "Tómate tu tiempo. No hay respuestas equivocadas, solo respuestas " +
      "que apuntan a partes distintas de quién eres.",
  },
];
const MADE_BY = { en: 'Made by', es: 'Hecho por' };
const BACK = { en: 'Back to the start', es: 'Volver al inicio' };

/**
 * Standalone "why this exists" screen. Reached from a discreet link on
 * the intro screen; returns there via the Back button.
 */
export default function AboutScreen({ onBack }) {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <h2 className="display-title text-xl md:text-3xl mb-8 text-center">
          {t(TITLE)}
        </h2>

        <div className="font-body text-ink text-base md:text-lg leading-relaxed space-y-5">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{t(p)}</p>
          ))}
        </div>

        <p className="mt-10 text-center font-body text-ink-dim text-sm md:text-base">
          {t(MADE_BY)}{' '}
          <a
            href="https://github.com/jtravesi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold hover:underline focus:outline-none focus-visible:underline"
          >
            @jtravesi
          </a>
        </p>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={onBack}
            className="choice-button max-w-xs"
          >
            {t(BACK)}
          </button>
        </div>
      </div>
    </main>
  );
}
