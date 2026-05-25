/**
 * Standalone "why this exists" screen. Reached from a discreet link on
 * the intro screen; returns there via the Back button.
 *
 * No typewriter here — it's a longer read and the typewriter would only
 * get in the way.
 */
export default function AboutScreen({ onBack }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
        <h2 className="display-title text-xl md:text-3xl mb-8 text-center">
          Readme
        </h2>

        <div className="font-body text-ink text-base md:text-lg leading-relaxed space-y-5">
          <p>
            This is a small homage to the personality test that opens the
            Pokémon Mystery Dungeon games — and a way of thinking about
            Linux distributions as companions rather than tools. The right
            distro isn't the most popular or the most powerful. It's the
            one that fits.
          </p>
          <p>
            All 22 distros in the pool are real, alive, and waiting. Take
            your time. There are no wrong answers — only ones that point
            at different parts of who you are.
          </p>
        </div>

        <p className="mt-10 text-center font-body text-ink-dim text-sm md:text-base">
          Made by{' '}
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
            Back to the start
          </button>
        </div>
      </div>
    </main>
  );
}
