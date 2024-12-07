import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from '../src/routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { UserProvider } from '../context/userContext.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
    {/* <App /> */}
  </StrictMode>,
)
