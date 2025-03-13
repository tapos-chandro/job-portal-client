import { createBrowserRouter } from "react-router";
import Root from "../layout/Root"
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllJobs from "../pages/AllJobs/AllJobs";

const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
        ,
        {
            path: '/register',
            element: <Register></Register>
        }
        ,
        {
            path: '/login',
            element:<Login></Login>
        }
        ,
        {
            path: '/all-jobs',
            element:<AllJobs></AllJobs>
        }
      ]
    },
  ]);

  export default Routers