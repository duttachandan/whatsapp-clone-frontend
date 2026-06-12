import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const enviorment = `${import.meta.env.VITE_ENVIORMENT}`;

createRoot(document.getElementById('root')!).render(
  enviorment === 'Production' ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (<App/>),
) 
