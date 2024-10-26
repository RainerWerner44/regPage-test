import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { RegistrationProvider } from './context/RegistrationContext';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistrationProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </RegistrationProvider>
  </StrictMode>
);
