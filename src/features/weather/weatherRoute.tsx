import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import DashBoard from "./components/dashboard";



const weatherRoutes = createBrowserRouter([
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
]);

export default weatherRoutes;