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
import SellPost from "../pages/SellPost";
import SellPostDetails from "../pages/SellPostDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import TeamDetails from "../pages/TeamDetails";
import Team from "../pages/Team";
import MySellPost from "../pages/dashboard/MySellPost";
import AddSellPost from "../pages/dashboard/AddSellPost";
import EditSellPost from "../pages/dashboard/EditSellPost";
import MyBooking from "../pages/dashboard/MyBooking";
import AddTestimonial from "../pages/dashboard/AddTestimonial";
import EditTestimonial from "../pages/dashboard/EditTestimonial";
import EditBlog from "../pages/dashboard/EditBlog";
import AddBlog from "../pages/dashboard/AddBlog";


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
            path: "/sellposts",
            element: <SellPost/>
        },
        {
            path: "/sellpost/:id",
            element: <SellPostDetails/>
        },
        {
            path: "/blog",
            element: <Blog/>
        },
        {
            path: "/blog/:id",
            element: <BlogDetails/>
        },
        {
            path: "/team",
            element: <Team/>
        },
        {
            path: "/team/:id",
            element: <TeamDetails/>
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
      element: (<DashboardLayout/>),
      errorElement: <ErrorPage/>,
      children:[
        {
            path: "",
            element: (
              <PrivateRoute>
                <DashBoard/>
              </PrivateRoute>
            ),
        },
        {
            path: "mysellpost",
            element: (
              <PrivateRoute>
                <MySellPost/>
              </PrivateRoute>
            ),
        },
        {
            path: "addsellpost",
            element: (
              <PrivateRoute>
                <AddSellPost/>
              </PrivateRoute>
            ),
        },
        {
            path: "editsellpost/:id",
            element: (
              <PrivateRoute>
                <EditSellPost/>
              </PrivateRoute>
            ),
        },
        {
            path: "mybooking",
            element: (
              <PrivateRoute>
                <MyBooking/>
              </PrivateRoute>
            ),
        },
        {
            path: "addtestimonial",
            element: (
              <PrivateRoute>
                <AddTestimonial/>
              </PrivateRoute>
            ),
        },
        {
            path: "edittestimonial/:id",
            element: (
              <PrivateRoute>
                <EditTestimonial/>
              </PrivateRoute>
            ),
        },
        {
            path: "addblogpost",
            element: (
              <PrivateRoute>
                <AddBlog/>
              </PrivateRoute>
            ),
        },
        {
            path: "editblogpost/:id",
            element: (
              <PrivateRoute>
                <EditBlog/>
              </PrivateRoute>
            ),
        },
      ]
    },
  ]);