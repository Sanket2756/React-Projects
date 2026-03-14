import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Dashboard from './components/Dashboard.jsx'
import Param from './Param.jsx'
import Courses from './components/Courses.jsx'
import MockTest from './components/MockTest.jsx'
import Reports from './components/Reports.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    )
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
    children : [
      {
        path:'courses',
        element: <Courses/>
      },
      {
        path:'mock-tests',
        element: <MockTest/>
      },
      {
        path:'reports',
        element: <Reports/>
      },
    ]
  },
 {
  path: "/param/:id",
  element: (
    <div>
      <Navbar />
      <Param />
    </div>
  )
},
  {
  path: "*",
  element: <Error/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)