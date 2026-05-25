import TextBox from './TextBox';

const INTRO_TEXT =
  'Who are you, traveler? Before continuing your journey, ' +
  'you must answer a few questions. Your answers ' +
  'will reveal which Linux distribution resonates ' +
  'with your soul...';

export default function IntroScreen({ onStart }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="display-title text-2xl md:text-4xl mb-2 text-center">
        findyourdistro
      </h1>
      <p className="font-body text-ink-dim text-sm md:text-base mb-12 tracking-widest uppercase">
        a Pokémon Mystery Dungeon-style test
      </p>

      <TextBox text={INTRO_TEXT} onContinue={onStart} />
    </main>
  );
}
