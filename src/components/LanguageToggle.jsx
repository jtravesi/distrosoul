import { useLanguage } from '../lib/LanguageContext';

/**
 * Small corner toggle that switches the entire UI between English and
 * Spanish. Sits to the left of the SoundToggle so both share a row.
 * Starts in English unless the browser prefers Spanish. The label is
 * written in the language the button switches to, so it stays readable
 * to whoever needs it.
 */
export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isSpanish = lang === 'es';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a español'}
      className="fixed top-3 right-20 z-50 font-body text-xs md:text-sm
                 px-3 py-1 border-2 border-border-dim text-ink-dim
                 hover:text-ink hover:border-ink transition-colors
                 focus:outline-none focus-visible:border-ink focus-visible:text-ink"
    >
      {isSpanish ? 'ES' : 'EN'}
    </button>
  );
}
