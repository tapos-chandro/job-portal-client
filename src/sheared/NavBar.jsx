import { Link, NavLink } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useContext } from "react";
import logo from "../assets/big-logo.png";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-blue-700 to-purple-600 shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-12" />
          <span className="text-white text-2xl font-bold tracking-wide">JobPortal</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            Jobs
          </NavLink>
          {
            user && <>
                      <NavLink
            to="/my-applications"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            My Applications
          </NavLink>
            
            </>
          }
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 font-bold border-b-2 border-yellow-400 pb-1"
                : "text-white hover:text-yellow-300 transition duration-300"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex space-x-4">
          {user?.email ? (
            <button
              onClick={logOut}
              className="bg-yellow-400 text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Log Out
            </button>
          ) : (
            <>
              <NavLink to="/login" className={({ isActive }) =>
              isActive
                ? " bg-yellow-400 text-white font-bold btn  border-none shadow-none"
                : "text-white hover:text-yellow-300 transition duration-300 btn bg-transparent border-none shadow-none"
            }>
                <button className="">
                  Log in
                </button>
              </NavLink>
              <NavLink to="/register" className={({ isActive }) =>
              isActive
                ? " bg-yellow-400 text-white font-bold btn  border-none shadow-none"
                : "text-white hover:text-yellow-300 transition duration-300 btn bg-transparent border-none shadow-none"
            }>
                <button>
                  Register
                </button>
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-2xl">
          {menuOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-blue-800 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <div className="p-6">
          <button onClick={() => setMenuOpen(false)} className="text-white text-2xl absolute top-4 right-4">
            <IoMdClose />
          </button>

          <nav className="mt-12 space-y-6">
            <NavLink
              to="/"
              className="text-white block text-lg hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className="text-white block text-lg hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Jobs
            </NavLink>
            <NavLink
              to="/blog"
              className="text-white block text-lg hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
            {
              user && <>
                          <NavLink
              to="/my-applications"
              className="text-white block text-lg hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              My Applications
            </NavLink>
              
              </>
            }
            <NavLink
              to="/contact"
              className="text-white block text-lg hover:text-yellow-300 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </nav>

          <div className="mt-10">
            {user?.email ? (
              <button
                onClick={logOut}
                className="w-full bg-yellow-400 text-gray-900 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
              >
                Log Out
              </button>
              

            ) : (
              <>
              <NavLink to="/login" className={({ isActive }) =>
              isActive
                ? " bg-yellow-400 text-white font-bold btn  border-none shadow-none"
                : "text-white hover:text-yellow-300 transition duration-300 btn bg-transparent border-none shadow-none"
            }>
                <button className="">
                  Log in
                </button>
              </NavLink>
              <NavLink to="/register" className={({ isActive }) =>
              isActive
                ? " bg-yellow-400 text-white font-bold btn  border-none shadow-none"
                : "text-white hover:text-yellow-300 transition duration-300 btn bg-transparent border-none shadow-none"
            }>
                <button>
                  Register
                </button>
              </NavLink>
            </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
