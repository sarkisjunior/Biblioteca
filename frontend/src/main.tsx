import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './Routes'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
)
