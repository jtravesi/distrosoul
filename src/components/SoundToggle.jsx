import { useSound } from '../lib/SoundContext';

/**
 * Small corner toggle that gates the typewriter blip and the optional
 * looping background music. Off by default; not persisted between visits.
 */
export default function SoundToggle() {
  const { enabled, toggle } = useSound();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Mute sound' : 'Enable sound'}
      className={`fixed top-3 right-3 z-50 font-body text-sm md:text-base
                  px-3 py-1 border-2 transition-colors
                  focus:outline-none focus-visible:border-accent-gold focus-visible:text-accent-gold
                  ${enabled
                    ? 'border-accent-gold text-accent-gold'
                    : 'border-border-dim text-ink-dim hover:text-ink hover:border-ink'}`}
    >
      {enabled ? '♪ on' : '♪ off'}
    </button>
  );
}
