import { createContext, useContext, useEffect, useState } from 'react';
import { playBlip as playBlipImpl } from './audio';
import { startTheme, stopTheme } from './musicTheme';

/**
 * Global sound state.
 *
 * One toggle gates both the typewriter blip and the procedural background
 * theme. On by default, although browsers keep the AudioContext suspended
 * until the first user interaction, so nothing plays before that.
 * Deliberately not persisted between visits (privacy rule — nothing
 * leaves memory).
 */

const SoundContext = createContext({
  enabled: true,
  toggle: () => {},
  playBlip: () => {},
});

export function SoundProvider({ children }) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (enabled) {
      startTheme();
    } else {
      stopTheme();
    }
  }, [enabled]);

  const value = {
    enabled,
    toggle: () => setEnabled((prev) => !prev),
    playBlip: () => {
      if (enabled) playBlipImpl();
    },
  };

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  return useContext(SoundContext);
}
