import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BlogCard from './components/blog_card/BlogCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BlogCard/>
  </StrictMode>,
)
