import { Outlet } from "react-router";
import Home from "../pages/Home/Home";
import Footer from "../sheared/Footer";
import NavBar from "../sheared/NavBar";

const Root = () => {
  return (
    <div>
      <div className="py-14">
      <NavBar></NavBar>
      </div>
      <div className="container mx-auto px-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
