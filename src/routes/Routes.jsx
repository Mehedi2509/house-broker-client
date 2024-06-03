import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import DashBoard from "../pages/DashBoard";
import DashboardLayout from "../layouts/DashboardLayout";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <ContactUs/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/registration",
            element: <Registration/>
        },
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashboardLayout/></PrivateRoute>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "",
            element: <PrivateRoute><DashBoard/></PrivateRoute>
        },
      ]
    },
  ]);