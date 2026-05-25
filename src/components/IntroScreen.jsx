import TextBox from './TextBox';

const INTRO_TEXT =
  'Who are you, traveler? Before continuing your journey, ' +
  'you must answer a few questions. Your answers ' +
  'will reveal which Linux distribution resonates ' +
  'with your soul...';

export default function IntroScreen({ onStart, onAbout }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative">
      <h1 className="display-title text-2xl md:text-4xl mb-2 text-center">
        findyourdistro
      </h1>
      <p className="font-body text-ink-dim text-sm md:text-base mb-12 tracking-widest uppercase">
        a Pokémon Mystery Dungeon-style test
      </p>

      <TextBox text={INTRO_TEXT} onContinue={onStart} />

      {onAbout && (
        <button
          type="button"
          onClick={onAbout}
          className="fixed top-3 left-3 z-50 font-body text-sm md:text-base
                     px-3 py-1 border-2 border-border-dim text-ink-dim
                     hover:text-ink hover:border-ink transition-colors
                     focus:outline-none focus-visible:border-ink focus-visible:text-ink"
        >
          Readme
        </button>
      )}
    </main>
  );
}
