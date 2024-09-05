import { RouteObject } from "react-router-dom";
import AdminLayout from "../../layouts/AdminLayout";
import DashBoard from "./components/dashboard";
import ProtectedRoute from "../../components/customRoute/protectedRoute";



const weatherRoutes: RouteObject[] = [{
    id: "admin",
    path: "/admin",
    element: <ProtectedRoute>
        <AdminLayout />
    </ProtectedRoute>,
    children: [
        {
            id: "admin-c1",
            path: "weather",
            element: <DashBoard />
        }
    ]
},
{
    id: "test",
    path: "/test",
    element: <AdminLayout />,
    children: [
        {
            id: "admin-c12",
            path: "weather2",
            element: <DashBoard />
        }
    ]
}];


export default weatherRoutes;