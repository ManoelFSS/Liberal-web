import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { EqualizerProvider } from './context/EqualizerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EqualizerProvider>
      <App />
    </EqualizerProvider>
  </StrictMode>,
)
