import { RouteObject, createBrowserRouter } from "react-router-dom";
import authRoutes from "./features/auth/authRoutes";
import weatherRoutes from "./features/weather/weatherRoute";


const GetRoutes = ()=>{
    let routes : RouteObject[]=[];
    routes = routes.concat(authRoutes);
    routes = routes.concat(weatherRoutes);
    return routes;
}

const routes = createBrowserRouter(
    GetRoutes(),
);
export default routes;