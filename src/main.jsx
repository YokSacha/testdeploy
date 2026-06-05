import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { KinetixProvider } from './context/KinetixContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KinetixProvider>
      <App />
    </KinetixProvider>
  </StrictMode>,
)
