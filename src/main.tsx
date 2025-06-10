import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RecipePage from './components/recipe_page/RecipePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecipePage/>
  </StrictMode>,
)
