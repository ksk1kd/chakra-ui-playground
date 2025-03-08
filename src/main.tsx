import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from '@/components/ui/provider'
import App from './App.tsx'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
