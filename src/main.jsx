import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Display font, Latin subset only (covers Spanish). OFL-1.1.
import '@fontsource/press-start-2p/latin-400.css';
import App from './App.jsx';
import { SoundProvider } from './lib/SoundContext.jsx';
import { LanguageProvider } from './lib/LanguageContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <SoundProvider>
        <App />
      </SoundProvider>
    </LanguageProvider>
  </StrictMode>,
);
