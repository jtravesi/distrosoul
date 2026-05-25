import { createContext, useContext, useState } from 'react';

/**
 * Language state.
 *
 * Two languages: 'en' (canonical) and 'es'. Initial value follows the
 * browser's preferred language (Spanish if it starts with "es",
 * English otherwise). Deliberately not persisted — privacy rule.
 *
 * `t(field)` returns a localised string. The field can be either:
 *   - a plain string (returned as-is), or
 *   - an object { en: '...', es: '...' } from the data files.
 */

function detectInitial() {
  if (typeof navigator === 'undefined') return 'en';
  const pref = navigator.language || navigator.userLanguage || '';
  return pref.toLowerCase().startsWith('es') ? 'es' : 'en';
}

const LanguageContext = createContext({
  lang: 'en',
  toggle: () => {},
  t: (field) => (typeof field === 'string' ? field : (field?.en ?? '')),
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial);

  const t = (field) => {
    if (field == null) return '';
    if (typeof field === 'string') return field;
    return field[lang] ?? field.en ?? '';
  };

  const value = {
    lang,
    toggle: () => setLang((prev) => (prev === 'en' ? 'es' : 'en')),
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
