import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { BillProvider } from './BillContext.jsx'
// import { RouterProvider } from 'react-router-dom'
// import { myrouter } from './router.jsx'

createRoot(document.getElementById('root')).render(
<StrictMode>  
<BillProvider>
    <App />
  </BillProvider>,
</StrictMode>
)
