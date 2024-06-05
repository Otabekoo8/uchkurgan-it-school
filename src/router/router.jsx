
// import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    }

]);

export default router;