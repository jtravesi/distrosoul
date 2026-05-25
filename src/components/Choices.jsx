import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

/**
 * PMD-style choice menu. Renders a vertical list of options as
 * `choice-button` items and reports the selected option upward.
 *
 * Options enter one after another (90ms stagger) so the menu feels
 * like it's being laid out rather than dumped on screen.
 */
export default function Choices({ options, onSelect, disabled = false }) {
  const { t } = useLanguage();
  return (
    <ul className="space-y-2 md:space-y-3 max-w-2xl w-full">
      {options.map((option, index) => (
        <motion.li
          key={option.id ?? index}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.28,
            delay: index * 0.09,
            ease: 'easeOut',
          }}
        >
          <button
            type="button"
            className="choice-button"
            disabled={disabled}
            onClick={() => onSelect?.(option, index)}
          >
            {t(option.text)}
          </button>
        </motion.li>
      ))}
    </ul>
  );
}
