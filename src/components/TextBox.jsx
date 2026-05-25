import { useEffect, useState } from 'react';
import { useSound } from '../lib/SoundContext';

/**
 * PMD-style dialogue box with typewriter effect.
 *
 * Behavior:
 *   - Characters appear one at a time at `speed` ms/char.
 *   - Click (or Enter/Space) while typing → skip to the end of the text.
 *   - Click (or Enter/Space) after typing finishes → fire `onContinue`.
 *   - A blinking ▼ indicator appears when the text is fully revealed
 *     and an `onContinue` handler is provided.
 *   - `onDone` fires once when typing completes (for callers that want
 *     to reveal choices or chain into another step).
 */
export default function TextBox({
  text,
  speed = 28,
  onContinue,
  onDone,
  showCursor = true,
  className = '',
}) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const { playBlip } = useSound();

  useEffect(() => {
    setDisplayed('');
    setDone(false);
  }, [text]);

  useEffect(() => {
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        const nextChar = text.charAt(displayed.length);
        setDisplayed(text.slice(0, displayed.length + 1));
        // Skip blips for whitespace so spaces don't feel mechanical.
        if (/\S/.test(nextChar)) playBlip();
      }, speed);
      return () => clearTimeout(timeout);
    }
    if (!done) {
      setDone(true);
      onDone?.();
    }
  }, [displayed, text, speed, done, onDone, playBlip]);

  const advance = () => {
    if (!done) {
      // Fast-forward; the useEffect above sees the full text and fires onDone.
      setDisplayed(text);
      return;
    }
    onContinue?.();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      advance();
    }
  };

  const isInteractive = !done || Boolean(onContinue);
  const showArrow = done && Boolean(onContinue);

  return (
    <div
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onClick={isInteractive ? advance : undefined}
      onKeyDown={isInteractive ? handleKeyDown : undefined}
      className={`dialogue-box max-w-2xl w-full select-none focus:outline-none focus-visible:outline-none ${
        isInteractive ? 'cursor-pointer' : ''
      } ${showArrow ? 'dialogue-arrow' : ''} ${className}`.trim()}
    >
      <p className="font-body text-lg md:text-xl leading-relaxed">
        {displayed}
        {showCursor && !done && <span className="text-cursor" aria-hidden="true" />}
      </p>
    </div>
  );
}
