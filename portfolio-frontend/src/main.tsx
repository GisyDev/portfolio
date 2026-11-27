import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fortawesome/fontawesome-free/css/all.min.css";

const stored = localStorage.getItem('portfolio-theme-v2')
const theme = stored === 'light' || stored === 'dark'
  ? stored
  : 'light'
document.documentElement.setAttribute('data-theme', theme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
