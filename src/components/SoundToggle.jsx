import { useSound } from '../lib/SoundContext';
import { useLanguage } from '../lib/LanguageContext';

const MUTE = { en: 'Mute sound', es: 'Silenciar el sonido' };
const UNMUTE = { en: 'Enable sound', es: 'Activar el sonido' };

/**
 * Small corner toggle that gates the typewriter blip and the optional
 * looping background music. On by default; not persisted between visits.
 */
export default function SoundToggle() {
  const { enabled, toggle } = useSound();
  const { t } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={t(enabled ? MUTE : UNMUTE)}
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
