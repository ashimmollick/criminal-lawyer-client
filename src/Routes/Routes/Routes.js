import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";

import MyOrders from "../../pages/Dashboard/MyOrder/MyOrders";
import AllBuyer from "../../pages/Home/Catagory/AllBuyer/Allbuyer";
import AllSeler from "../../pages/Home/Catagory/Allseller/AllSeler";
import AllUsers from "../../pages/Home/Catagory/AllUsers/AllUsers";
import CatagoryCard from "../../pages/Home/Catagory/Catagory.js/CatagoryCard";
import Home from "../../pages/Home/Home/Home";

import Login from "../../pages/Home/Login/Login";
import SignUp from "../../shared/Signup/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";


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
                element: <PrivateRoute><CatagoryCard></CatagoryCard></PrivateRoute>,
                loader: ({ params }) => fetch(`https://headphone-relast-server.vercel.app/catagoryss/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {

                path: '/dashboard/allseller',
                element: <AdminRoute><AllSeler></AllSeler></AdminRoute>
            },
            {

                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {

                path: '/dashboard/allseller',
                element: <AllSeler></AllSeler>
            }
        ]
    }
])
export default router;

