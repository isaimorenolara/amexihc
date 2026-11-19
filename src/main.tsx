import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InternationalizationProvider } from '@astryxdesign/core/i18n'
import esES from '@astryxdesign/core/locales/es-ES.generated.js'
import '@astryxdesign/core/reset.css'
import '@astryxdesign/core/astryx.css'
import './styles/site.css'
import './styles/motion.css'
import { App } from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InternationalizationProvider locale="es-ES" messages={{ 'es-ES': esES }}>
      <App />
    </InternationalizationProvider>
  </StrictMode>,
)
