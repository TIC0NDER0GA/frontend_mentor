import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QRCodeCard from './components/qr_code/QRCodeCard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QRCodeCard/>
  </StrictMode>,
)
