import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// GitHub Pages serves 404.html for unknown paths. That page saves the original
// path in sessionStorage and redirects to "/". Restore it here so the React
// router can navigate to the intended route.
const ghPagesRedirect = sessionStorage.getItem('gh-pages-redirect');
if (ghPagesRedirect) {
  sessionStorage.removeItem('gh-pages-redirect');
  window.history.replaceState(null, '', ghPagesRedirect);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
