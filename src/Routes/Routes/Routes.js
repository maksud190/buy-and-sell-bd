import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryItems from "../../Pages/CategoryItems/CategoryItems";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import RegisterAsSeller from "../../Pages/Register/RegisterAsSeller";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/registerSeller',
                element: <RegisterAsSeller></RegisterAsSeller>
            },
            {
                path: '/categoryItems/:id',
                element: <CategoryItems></CategoryItems>,
                loader: ({params}) => fetch(`https://buy-and-sell-bd-server.vercel.app/categoryItems/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard/myOrder',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allUsers',
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <PrivateRoute><AllSellers></AllSellers></PrivateRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({params}) => fetch(`https://buy-and-sell-bd-server.vercel.app/myOrders/${params.id}`)
            },
            {
                path: '/dashboard/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
                loader: () => fetch('https://buy-and-sell-bd-server.vercel.app/categories')

            }
        ]
    }
]);