//img imports
import logo from "../asset/icon_svg/logo.png";

import { FaHome, FaHubspot } from "react-icons/fa";
//components
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";

//icons for mui
import { MdPermContactCalendar, MdPriceCheck, MdClose, MdMenu, MdDynamicForm } from "react-icons/md";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const Toggler = () => {
    setToggle(!toggle);
  };
  function NavLink({
    to,
    className,
    activeClassName,
    inActiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;

    let allClassNames =
      className + (isActive ? ` ${activeClassName}` : `${inActiveClassName}`);
    return <HashLink className={allClassNames} to={to} {...rest} />;
  }

  return (
    <div className=" relative">
      <nav id="nav" className="Btablet:hidden">
        <div className="flex h-[60px]  justify-between items-center py-3 px-5  fixed top-5  left-0 w-[94%] mx-[3%] rounded-xl shadow-xl z-30 bg-white">
          <Link to="/">
            <img className=" w-32" src={logo} alt="logo" />
          </Link>
          <div onClick={Toggler} className="text-orange">
            <MdMenu size={34} />
          </div>
        </div>
        <div
          className={`${toggle ? "flex top-0 h-screen" : "flex top-[-1000%] h-[10px]"
            } duration-300 fixed right-0 w-[70%] z-50 bg-white p-5 rounded-br-xl shadow-xl h-screen`}
        >

          <div className=" flex flex-col  gap-6 ">
            <div className=" text-orange pb-10" onClick={Toggler}>
              <MdClose size={34} />
            </div>
            <NavLink
              onClick={Toggler}
              activeClassName="text-orange  "
              inActiveClassName="text-blue "
              smooth
              to="/"
              className=" flex items-center "
            >
              <FaHome />
              <p className="ml-5">Home</p>
            </NavLink>
            <HashLink
              onClick={Toggler}
              activeClassName="text-orange  "
              inActiveClassName="text-blue "
              smooth
              to="/#features"
              className=" flex items-center "
            >
              <MdDynamicForm />
              <p className="ml-5">  Features</p>
            </HashLink>
            <HashLink onClick={Toggler} smooth
              activeClassName="text-orange  "
              inActiveClassName="text-blue "
              to="/#pricing"
              className=" flex items-center "
            >
              <MdPriceCheck />
              <p className="ml-5">  Pricing</p>
            </HashLink>
            <NavLink
              onClick={Toggler}
              activeClassName="text-orange"
              inActiveClassName="text-blue"
              smooth
              to="/contact"
              className="flex items-center "
            >
              <MdPermContactCalendar />
              <p className="ml-5"> Contact</p>
            </NavLink>

            <NavLink
              onClick={Toggler}
              activeClassName="text-orange   "
              inActiveClassName="text-blue"
              smooth
              to="/login"
              className=" flex items-center "
            >
              <FaHubspot />
              <p className="ml-5">  Log In</p>
            </NavLink>

            <HashLink
              onClick={Toggler}
              to="/signup"
              className="  justify-center rounded  flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     `active:bg-white font-semibold shadow-lg active:scale-105 active:text-black px-4 py-2 text-sm  border-orange sm:p-3 sm:px-10 "
            >
              <button>Get Started</button>
            </HashLink>
          </div>
        </div>
        <div
          onClick={Toggler}
          className={`${toggle ? "flex" : "hidden"
            } w-full h-[100%] z-30 bg-black/30 blur-sm fixed top-0 left-0`}
        ></div>
      </nav>

      {/* web view */}
      <div className=" hidden Btablet:block">
        <nav className="flex h-[70px] justify-between items-center py-3 px-5  fixed top-0 left-0 w-[100%] shadow-xl z-50 bg-white">
          <Link to="/">
            <img className=" w-32" src={logo} alt="logo" />
          </Link>
          <div className=" flex  items-center  justify-between text-blue">
            <NavLink
              activeClassName="text-orange"
              inActiveClassName="text-blue mx-4"
              className="mx-4"
              smooth
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="text-orange"
              inActiveClassName="text-blue mx-4"
              className="mx-4"
              smooth
              to="/contact"
            >
              Contact
            </NavLink>
            <NavLink
              activeClassName="text-orange"
              inActiveClassName="text-blue mx-4"
              className="mx-4"
              smooth
              to="/#pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              activeClassName="text-orange"
              inActiveClassName="text-blue mx-4"
              className="mx-4"
              smooth
              to="/#features"
            >
              Features
            </NavLink>

            <HashLink
              to="/signup"
              className="  justify-center w-[160px]  flex  bg-orange text-white active:opacity-70 active:shadow-2xl
                     active:bg-white font-semibold shadow-lg active:scale-105 active:text-black p-4 text-sm rounded-lg  border-orange sm:p-3 sm:px-10 mr-2"
            >
              <button>Sign Up</button>
            </HashLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
