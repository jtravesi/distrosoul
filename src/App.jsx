import { useEffect, useState } from 'react';

/**
 * findyourdistro — Phase 1 hello screen.
 *
 * This is the entry point of the app. For now it shows a PMD-style
 * dialogue box with the project title and a placeholder message.
 *
 * Next phases will replace this with:
 *   - IntroScreen (welcome + start button)
 *   - QuestionScreen (one of 8 random questions from the pool)
 *   - FinalQuestionScreen (the "camino difícil" question)
 *   - RevealScreen (the dramatic distro reveal)
 *   - AboutScreen (why this exists)
 */
export default function App() {
  const fullText =
    'Who are you, traveler? Before continuing your journey, ' +
    'you must answer a few questions. Your answers ' +
    'will reveal which Linux distribution resonates ' +
    'with your soul...';

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect: characters appear one at a time, PMD-style
  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 28);
      return () => clearTimeout(timeout);
    }
    setIsTyping(false);
  }, [displayedText, fullText]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* Title — display font, big, with shadow */}
      <h1 className="display-title text-2xl md:text-4xl mb-2 text-center">
        findyourdistro
      </h1>
      <p className="font-body text-ink-dim text-sm md:text-base mb-12 tracking-widest uppercase">
        a Mystery Dungeon-style test
      </p>

      {/* PMD-style dialogue box */}
      <div className={`dialogue-box max-w-2xl w-full ${!isTyping ? 'dialogue-arrow' : ''}`}>
        <p className="font-body text-lg md:text-xl leading-relaxed">
          {displayedText}
          {isTyping && <span className="text-cursor" aria-hidden="true" />}
        </p>
      </div>

      {/* Footer note (privacy-by-design statement) */}
      <p className="mt-12 text-ink-dim text-xs md:text-sm text-center max-w-md font-body">
        No cookies. No analytics. No tracking.
        <br />
        The entire test runs in your browser.
      </p>
    </main>
  );
}
