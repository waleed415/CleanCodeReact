import { RouteObject, createBrowserRouter } from "react-router-dom";
import authRoutes from "./features/auth/authRoutes";
import weatherRoutes from "./features/weather/weatherRoute";

 const routesArray : RouteObject[] = [...authRoutes, ...weatherRoutes];

 export const routes = createBrowserRouter(routesArray);
