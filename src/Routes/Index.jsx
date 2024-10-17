import { Home, PageNotFound } from '../utils/import.js'

import SignInAdmin from '../Auth/admin/SignInAdmin.jsx'
import AdminDashboard from '../Auth/admin/AdminDashboard.jsx'



const routesLink = [
    {
        path: '/',
        element:<Home />
    },
    {
        path: '/home',
        element:<Home />
    },
    {
        path: '/auth/admin/dashboard',
        element:<AdminDashboard />
    },
    {
        path: '/auth/admin/signin',
        element:<SignInAdmin />
    },
    {
        path: '*',
        element:<PageNotFound />
    },
]

export default  routesLink;
