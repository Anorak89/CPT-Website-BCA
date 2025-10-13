import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './css/satoshi.css'
import './css/style.css'
import 'flatpickr/dist/flatpickr.min.css'
import 'jsvectormap/dist/jsvectormap.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)