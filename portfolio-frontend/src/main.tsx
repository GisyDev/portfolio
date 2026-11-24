import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fortawesome/fontawesome-free/css/all.min.css";

const stored = localStorage.getItem('portfolio-theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
const theme = stored === 'light' || stored === 'dark'
  ? stored
  : (prefersDark ? 'dark' : 'light')
document.documentElement.setAttribute('data-theme', theme)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
