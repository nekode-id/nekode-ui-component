import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const InvertedCursorExample = lazy(() => import("./components/ui/InvertedCursor/example.tsx"))
const BentoGridExample = lazy(() => import("./components/ui/BentoGrid/Example.tsx"))
const NavbarExample = lazy(() => import("./components/ui/Navbar/Example.tsx"))

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inverted-cursor",
    element: 
      <Suspense fallback="loading...">
        <InvertedCursorExample />
      </Suspense>  
    ,
  },
  {
    path: "/bento-grid",
    element: 
      <Suspense fallback="loading...">
        <BentoGridExample />
      </Suspense>  
    ,
  },
  {
    path: "/navbar",
    element: 
      <Suspense fallback="loading...">
        <NavbarExample />
      </Suspense>  
    ,
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
