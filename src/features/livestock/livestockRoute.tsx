import { RouteObject } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLaoyt";
import LivestockHome from "../livestock/components/livestockHome";



const livestockRoutes: RouteObject[] = [
    
    {
        id:"livestock",
        path:"/livestock",
        element:<AuthLayout />,
        children:[
            {
                id:"home-c1",
                path:"home",
                element:<LivestockHome />
            }
        ]
    }
];

export default livestockRoutes;