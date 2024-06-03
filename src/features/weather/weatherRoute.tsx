import { RouteObject } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import DashBoard from "./components/dashboard";



const weatherRoutes : RouteObject[] = [
    {
        id:"admin",
        path:"/admin",
        element:<AdminLayout />,
        children:[
            {
                id:"admin-c1",
                path:"weather",
                element:<DashBoard />
            }
        ]
    }
];

export default weatherRoutes;