import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SocialLinksProfile from './components/social_links_prof/SocialLinksProfile'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SocialLinksProfile/>
  </StrictMode>,
)
