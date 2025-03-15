import { createBrowserRouter } from "react-router";
import Root from "../layout/Root"
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllJobs from "../pages/AllJobs/AllJobs";
import Details from "../pages/Home/Details";
import ApplyForm from "../pages/Home/ApplyForm";
import MyApplications from "../pages/MyApplications/MyApplications";
import PrivetRoute from "./PrivetRoute";

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'login',
            element:<Login></Login>
        },
        {
            path: 'jobs',
            element:<AllJobs></AllJobs>
        },
        {
            path: 'details/:id',
            element:<PrivetRoute><Details></Details></PrivetRoute>
        }
        ,
        {
            path: 'apply/:id',
            element:<PrivetRoute><ApplyForm></ApplyForm></PrivetRoute>
        }
        ,
        {
            path: 'my-applications',
            element:<PrivetRoute><MyApplications></MyApplications></PrivetRoute>
        }
      ]
    },
  ]);

  export default Routers