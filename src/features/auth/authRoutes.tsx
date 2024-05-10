import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLaoyt";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/forgotPassword";
import ResetPassowrd from "./components/resetPassword";


const authRoutes = createBrowserRouter([
    {
        id:"auth",
        path:"/auth",
        element:<AuthLayout />,
        children:[
            {
                id:"auth-c1",
                path:"login",
                element:<Login />
            },
            {
                id:"auth-c2",
                path:"register",
                element:<Register />
            },
            {
                id:"auth-c3",
                path:"forgotpassword",
                element:<ForgotPassword />
            },
            {
                id:"auth-c4",
                path:"resetpassword",
                element:<ResetPassowrd />
            }
        ]
    }
]);

export default authRoutes;
