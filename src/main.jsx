import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <div className="font-urbanist">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>,
)
