import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header name='começar'/>
  </StrictMode>,
)
