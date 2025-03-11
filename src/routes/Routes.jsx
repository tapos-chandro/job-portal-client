import { createBrowserRouter } from "react-router";
import Root from "../layout/Root"
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

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
      ]
    },
  ]);

  export default Routers