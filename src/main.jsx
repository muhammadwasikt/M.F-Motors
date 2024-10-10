import {createBrowserRouter, Router, RouterProvider,} from "react-router-dom";
import { createRoot } from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {App , Home , Products , Category , SignIn ,SignUp ,Admin, AdminSignIn, AdminDashboard} from './utils/import.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
    {
    path: 'home',
    element: <Home />
    },
    {
      path: 'products',
      element: <Products />
    },
    {
      path: 'category',
      element: <Category />
    },
  ]
  },
  {
     path: '/user',
     children:[
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
     ]
  },
  {
    path: '/admin',
    element:<Admin />,
  },
  {
    path: '/admin/signin',
    element:<AdminSignIn />,
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />
  },
])


createRoot(document.getElementById("root")).render(
   <RouterProvider router={router} />

);
