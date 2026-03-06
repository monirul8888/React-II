import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from "./Components/Root/Root.jsx"
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Users/Users.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "/mobiles", Component: Mobiles},
      {path: "/laptops", Component: Laptops},
      {path: "/users",
      loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      Component: Users },
      {
        path: "/users/:userID",
        loader : ({params}) =>{
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`)
        },
        Component: UserDetails
      }
    ]
    
  },
  {
    path: "/about",
    element : <div>
      <h3>Green University of Bangladesh</h3>
    </div>
  },
  {
    path: "/app",
    Component: App
  }
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
