import { RouteObject, createBrowserRouter } from "react-router-dom";
import authRoutes from "./features/auth/authRoutes";
import weatherRoutes from "./features/weather/weatherRoute";
import livestockRoutes from "./features/livestock/livestockRoute";

 const routesArray : RouteObject[] = [...authRoutes, ...weatherRoutes,...livestockRoutes];

 export const routes = createBrowserRouter(routesArray);
