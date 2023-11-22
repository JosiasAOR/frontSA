import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Calendario from './Pages/Calendario'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/ensalamento', element: <Calendario /> }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)