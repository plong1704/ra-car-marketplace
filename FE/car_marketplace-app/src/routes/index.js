import Home from "../pages/Home";
import Account from "../pages/Account";
import Dashboard from "../pages/dashboard/Dashboard";


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/dashboard', component: Dashboard},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}