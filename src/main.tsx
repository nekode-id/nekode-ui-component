import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const InvertedCursorExample = lazy(() => import("./components/ui/InvertedCursor/example.tsx"))

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inverted-cursor",
    element: <InvertedCursorExample />,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
