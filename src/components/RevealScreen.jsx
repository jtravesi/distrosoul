import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TextBox from './TextBox';

/**
 * The dramatic reveal. Three stages:
 *   1. Nature text — who you are, no Linux mentioned.
 *   2. Cream flash, then the distro name lands (scale 1.5 → 1 behind a
 *      fading overlay), then the reveal text types in.
 *   3. "Start over" button.
 */
export default function RevealScreen({ reveal, onRestart }) {
  const [stage, setStage] = useState(1);
  const [flashing, setFlashing] = useState(false);
  const [revealTextReady, setRevealTextReady] = useState(false);

  // Stage 2: hold the typewriter back so the distro name lands first.
  useEffect(() => {
    if (stage !== 2) {
      setRevealTextReady(false);
      return undefined;
    }
    const timer = setTimeout(() => setRevealTextReady(true), 900);
    return () => clearTimeout(timer);
  }, [stage]);

  const goToDistroReveal = () => {
    setStage(2);
    setFlashing(true);
    // Flash lifecycle finishes ~950ms after triggering.
    setTimeout(() => setFlashing(false), 950);
  };

  return (
    <>
      <AnimatePresence>
        {flashing && (
          <motion.div
            key="reveal-flash"
            className="fixed inset-0 z-[100] pointer-events-none bg-ink"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.95, 0.95, 0] }}
            transition={{ duration: 0.95, times: [0, 0.26, 0.37, 1], ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>
      <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 gap-8">
      {stage === 1 && (
        <>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <p className="font-body text-ink-dim text-xs md:text-sm tracking-widest uppercase mb-2">
              You are
            </p>
            <h2 className="display-title text-xl md:text-3xl">
              {reveal.nature}
            </h2>
          </motion.div>
          <TextBox
            text={reveal.natureText}
            onContinue={goToDistroReveal}
          />
        </>
      )}

      {stage === 2 && (
        <>
          <motion.h2
            className="display-title text-3xl md:text-5xl text-center"
            initial={{ opacity: 0, scale: 1.5, filter: 'drop-shadow(0 0 32px rgba(244, 201, 93, 0.9))' }}
            animate={{ opacity: 1, scale: 1, filter: 'drop-shadow(0 0 0px rgba(244, 201, 93, 0))' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {reveal.distroName}
          </motion.h2>
          {revealTextReady && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full flex justify-center"
            >
              <TextBox
                text={reveal.revealText}
                onContinue={() => setStage(3)}
              />
            </motion.div>
          )}
        </>
      )}

      {stage === 3 && (
        <>
          <motion.h2
            className="display-title text-2xl md:text-4xl text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {reveal.distroName}
          </motion.h2>
          <motion.p
            className="font-body text-ink-dim text-sm md:text-base text-center max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your companion has revealed itself.
          </motion.p>
          <motion.button
            type="button"
            onClick={onRestart}
            className="choice-button max-w-xs mt-4"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Start over
          </motion.button>
        </>
      )}
      </main>
    </>
  );
}
