import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import Sidebar from './Sidebar.jsx'
createRoot(document.getElementById('sidebar_root')).render(
  <StrictMode>
    <Sidebar/>
  </StrictMode>,
)
