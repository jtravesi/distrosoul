import { useLanguage } from '../lib/LanguageContext';

/**
 * Small corner toggle that switches the entire UI between English and
 * Spanish. Sits to the left of the SoundToggle so both share a row.
 * Off-by-default for English; auto-detects Spanish browsers on first load.
 */
export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  const isSpanish = lang === 'es';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isSpanish ? 'Switch to English' : 'Switch to Spanish'}
      className="fixed top-3 right-20 z-50 font-body text-sm md:text-base
                 px-3 py-1 border-2 border-border-dim text-ink-dim
                 hover:text-ink hover:border-ink transition-colors
                 focus:outline-none focus-visible:border-ink focus-visible:text-ink"
    >
      {isSpanish ? 'ES' : 'EN'}
    </button>
  );
}
