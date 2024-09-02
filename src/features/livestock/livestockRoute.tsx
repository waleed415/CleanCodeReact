import { RouteObject } from "react-router-dom";
import LivestockHome from "../livestock/components/livestockHome";
import LiveStockLayout from "../../layouts/LiveStockLayout";



const livestockRoutes: RouteObject[] = [
    
    {
        id:"livestock",
        path:"/livestock",
        element:<LiveStockLayout />,
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