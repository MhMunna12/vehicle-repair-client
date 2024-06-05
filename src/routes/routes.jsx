import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from './../layout/DashboardLayout';
import ErrorPage from './../pages/ErrorPage';
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import MainLayout from './../layout/MainLayout';
import ServiceDetail from "../pages/ServiceDetail";
import PrivateRoute from "./Private/PrivateRoute";
import AddServices from "../pages/AddServices";
import AllService from "../pages/AllService";
import EditService from "../pages/EditService";
import EditProfile from "../pages/EditProfile";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader: () => fetch('https://vehicle-repair-server.onrender.com/services')
            },
            {
                path: "/service/:id",
                element: <ServiceDetail />,
                loader: ({ params }) => fetch(`https://vehicle-repair-server.onrender.com/services/${params.id}`)
            },

            {
                path: "login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Registration />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
            {
                path: 'profile/edit/:id',
                element: (
                    <PrivateRoute>
                        <EditProfile />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://vehicle-repair-server.onrender.com/user/get/${params.id}`)
            },
            {
                path: 'add-service',
                element: (
                    <PrivateRoute>
                        <AddServices />
                    </PrivateRoute>
                ),
            }
            , {
                path: 'all-service',
                element: (
                    <PrivateRoute>
                        <AllService />
                    </PrivateRoute>
                ),
            }
            ,
            {
                path: 'all-service/edit/:id',
                element: (
                    <PrivateRoute>
                        <EditService />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`https://vehicle-repair-server.onrender.com/services/${params.id}`)
            }
        ]
    }

]);
