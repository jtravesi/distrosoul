import TextBox from './TextBox';
import { useLanguage } from '../lib/LanguageContext';

const INTRO_TEXT = {
  en:
    'Who are you, traveler? Before continuing your journey, ' +
    'you must answer a few questions. Your answers ' +
    'will reveal which Linux distribution resonates ' +
    'with your soul...',
  es:
    '¿Quién eres, viajero? Antes de continuar tu camino, ' +
    'debes responder a algunas preguntas. Tus respuestas ' +
    'revelarán cuál es la distribución de Linux que vibra ' +
    'con tu alma...',
};

const SUBTITLE = {
  en: 'a Pokémon Mystery Dungeon-style test',
  es: 'un test al estilo Pokémon Mundo Misterioso',
};

const READ_ME = { en: 'Readme', es: 'Léeme' };

export default function IntroScreen({ onStart, onAbout }) {
  const { t } = useLanguage();
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <h1 className="display-title text-2xl md:text-4xl mb-2 text-center">
        distrosoul
      </h1>
      <p className="font-body text-ink-dim text-sm md:text-base mb-12 tracking-widest uppercase">
        {t(SUBTITLE)}
      </p>

      <TextBox text={t(INTRO_TEXT)} onContinue={onStart} />

      {onAbout && (
        <button
          type="button"
          onClick={onAbout}
          className="fixed top-3 left-3 z-50 font-body text-sm md:text-base
                     px-3 py-1 border-2 border-border-dim text-ink-dim
                     hover:text-ink hover:border-ink transition-colors
                     focus:outline-none focus-visible:border-ink focus-visible:text-ink"
        >
          {t(READ_ME)}
        </button>
      )}
    </main>
  );
}
