import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import DashBoard from "../../pages/Dashboard/DashBoard";
import MyOrders from "../../pages/Dashboard/MyOrder/MyOrders";
import AllUsers from "../../pages/Home/Catagory/AllUsers/AllUsers";
import CatagoryCard from "../../pages/Home/Catagory/Catagory.js/CatagoryCard";
import Home from "../../pages/Home/Home/Home";

import Login from "../../pages/Home/Login/Login";
import SignUp from "../../shared/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/catagories/:id',
                element: <CatagoryCard></CatagoryCard>,
                loader: ({ params }) => fetch(`http://localhost:5000/catagoryss/${params.id}`)
            }
        ]

    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])
export default router;

