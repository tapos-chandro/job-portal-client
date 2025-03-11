import { Link, NavLink } from "react-router";
import logo from "../assets/big-logo.png";
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
  const navList = (
    <>
      <li className="mx-2">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 ">
      <div className="navbar container mx-auto">
        <div className="navbar-start ">
          <div className="btn border-none bg-transparent w-60 text-left flex justify-start  hover:shadow-none">
            <img className="w-20 h-full" src={logo} alt="" />
            <span className="">Job Portal</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navList}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl"
            >
              <IoMdMenu />
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content bg-base-100 right-0 rounded-box z-1 mt-3 w-52  p-2 shadow"
            >
              {navList}
            </ul>
          </div>
          <div className="hidden md:block lg:block  ">
            <Link to={"/login"}>
              <button className=" mx-2 btn font-bold p-4 hover:cursor-pointer">
                Log in
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="btn mx-2 font-bold p-4 hover:cursor-pointer">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
