import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import {AppProvider} from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
      <AppProvider>
        <App />
        </AppProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
