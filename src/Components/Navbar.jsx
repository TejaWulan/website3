import React, { useEffect } from "react";
import logoDark from "../assets/img/logos/logo_batu_bara.png";
import { Link, useLocation } from "react-router-dom";
import "boxicons";

function Navbar(props) {
  const { navShow, setNavShow } = props;

  const handleNav = () => {
    setNavShow(!navShow);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navCheck = (pages) => {
    return pathname === pages ? "text-orange-500" : "";
  };

  return (
    <>
      <div
        id="navbar"
        className="flex px-5 lg:px-24 fixed top-0 left-0 w-full items-center z-50 bg-white border-b-4 border-orange-500 shadow-sm"
      >
        {/* Logo */}
        <div className="logo z-10">
          <Link to="/">
            <img src={logoDark} className="h-[80px]" alt="" />
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="nav-items ms-auto z-10">
          <ul className="items-center lg:flex hidden gap-10">
            
            <li className={`text-lg font-semibold uppercase tracking-wide text-black hover:text-orange-500 transition ${navCheck("/")}`}>
              <Link to="/">Home</Link>
            </li>

            <li className={`text-lg font-semibold uppercase tracking-wide text-black hover:text-orange-500 transition ${navCheck("/about")}`}>
              <Link to="/about">About Us</Link>
            </li>

            {/* <li className={`text-lg font-semibold uppercase tracking-wide text-black hover:text-orange-500 transition ${navCheck("/contact")}`}>
              <Link to="/contact">Contact</Link>
            </li> */}

          </ul>

          {/* Mobile Menu */}
          <ul className="items-center flex lg:hidden justify-center">
            <li className="text-2xl cursor-pointer">
              <div
                className={`menu-icons ${!navShow ? "rotate-0" : "rotate-90"}`}
                onClick={handleNav}
              >
                {!navShow ? (
                  <box-icon name="menu" size="md" color="black"></box-icon>
                ) : (
                  <box-icon name="x" size="md" color="black"></box-icon>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div>
        <div
          className={`${
            navShow
              ? "translate-x-[100vw] z-10 transition-all duration-700 fixed top-22"
              : "translate-x-[200vw] transition-all z-10 duration-700 fixed top-22"
          }`}
        >
          <ul className="absolute py-3 pl-5 h-[100vh] w-[80vw] right-0 bg-white">
            
            <li className="mx-5 my-8 text-right text-xl font-semibold text-black hover:text-orange-500">
              <Link to="/" onClick={handleNav}>Home</Link>
            </li>

            <li className="mx-5 my-8 text-right text-xl font-semibold text-black hover:text-orange-500">
              <Link to="/about" onClick={handleNav}>About Us</Link>
            </li>

            {/* <li className="mx-5 my-8 text-right text-xl font-semibold text-black hover:text-orange-500">
              <Link to="/contact" onClick={handleNav}>Contact</Link>
            </li> */}

          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;