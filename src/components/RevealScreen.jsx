import { useState } from 'react';
import TextBox from './TextBox';

/**
 * The dramatic reveal. Three stages:
 *   1. Nature text — who you are, no Linux mentioned.
 *   2. Distro name + reveal text — the companion is named.
 *   3. "Start over" button.
 *
 * Phase 4 will replace the plain stage swap with Framer Motion
 * staggered transitions; for now the typewriter alone carries the drama.
 */
export default function RevealScreen({ reveal, onRestart }) {
  const [stage, setStage] = useState(1);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-8">
      {stage === 1 && (
        <TextBox
          text={reveal.natureText}
          onContinue={() => setStage(2)}
        />
      )}

      {stage === 2 && (
        <>
          <h2 className="display-title text-2xl md:text-4xl mb-2 text-center">
            {reveal.distroName}
          </h2>
          <TextBox
            text={reveal.revealText}
            onContinue={() => setStage(3)}
          />
        </>
      )}

      {stage === 3 && (
        <>
          <h2 className="display-title text-2xl md:text-4xl mb-2 text-center">
            {reveal.distroName}
          </h2>
          <p className="font-body text-ink-dim text-sm md:text-base text-center max-w-xl">
            Your companion has revealed itself.
          </p>
          <button
            type="button"
            onClick={onRestart}
            className="choice-button max-w-xs mt-4"
          >
            Start over
          </button>
        </>
      )}
    </main>
  );
}
