import { createBrowserRouter } from "react-router-dom";
import authRoutes from "./features/auth/authRoutes";
import weatherRoutes from "./features/weather/weatherRoute";



const routes = createBrowserRouter(
    authRoutes.routes.concat(weatherRoutes.routes),
);
export default routes;