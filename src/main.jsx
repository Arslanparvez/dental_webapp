import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import 'flag-icons/css/flag-icons.min.css'
import './styles/index.css'
import { initTranslation } from './lib/translate'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

// Re-apply a previously selected language (if not English) after first paint.
initTranslation()
