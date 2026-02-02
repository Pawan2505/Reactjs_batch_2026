import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('roots')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
