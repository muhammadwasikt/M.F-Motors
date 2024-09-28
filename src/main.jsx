
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Category from './pages/Category.jsx';
import { createRoot } from 'react-dom/client';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import LogOut from './pages/LogOut.jsx';
import AdminSignIn from './admin/AdminSignIn.jsx';
import AdminDashboard from './admin/AdminDashboard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
    {
    path: '/home',
    element: <Home />
    },
    {
      path: '/products',
      element: <Products />
    },
    {
      path: '/category',
      element: <Category />
    },
  ]
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/signout',
    element: <LogOut />
  },
  {
    path: '/adminfolder',
    element: <AdminSignIn />
  },
  {
    path: '/admin/dashboard',
    element: <AdminDashboard />
  },
])


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
