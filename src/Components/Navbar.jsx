import React, { useEffect } from "react";
import logoDark from "../assets/img/logos/logo_batu_bara.png";
import { NavLink, useLocation } from "react-router-dom";
import "boxicons";

function Navbar({ navShow, setNavShow }) {
  const handleNav = () => {
    setNavShow(!navShow);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Style aktif & tidak aktif
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-[#e67e22] border-b-2 border-[#e67e22]"
      : "text-black border-b-2 border-transparent hover:text-[#e67e22]";

  const navStyleMobile = ({ isActive }) =>
    isActive
      ? "text-[#e67e22]"
      : "text-black hover:text-[#e67e22]";

  return (
    <>
      {/* NAVBAR */}
      <div className="flex px-5 lg:px-24 fixed top-0 left-0 w-full items-center z-50 bg-white border-b-4 border-[#e67e22] shadow-sm">

        {/* Logo */}
        <div className="z-10">
          <NavLink to="/">
            <img src={logoDark} className="h-[80px]" alt="logo" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="ms-auto z-10">
          <ul className="items-center lg:flex hidden gap-10">

            <li className="pb-1 text-lg font-semibold uppercase tracking-wide transition">
              <NavLink to="/" className={navStyle}>
                Home
              </NavLink>
            </li>

            <li className="pb-1 text-lg font-semibold uppercase tracking-wide transition">
              <NavLink to="/about" className={navStyle}>
                About Us
              </NavLink>
            </li>

            {/* TAMBAHAN MENU OUR SERVICES */}
            <li className="pb-1 text-lg font-semibold uppercase tracking-wide transition">
              <NavLink to="/ourservices" className={navStyle}>
                Our Services
              </NavLink>
            </li>

          </ul>

          {/* Mobile Icon */}
          <div className="lg:hidden flex items-center">
            <div
              className={`cursor-pointer transition-transform ${navShow ? "rotate-90" : "rotate-0"
                }`}
              onClick={handleNav}
            >
              {!navShow ? (
                <box-icon name="menu" size="md" color="black"></box-icon>
              ) : (
                <box-icon name="x" size="md" color="black"></box-icon>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[80px] right-0 h-screen w-[80vw] bg-white z-40 transform transition-transform duration-500 ${navShow ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <ul className="py-6 px-6">

          <li className="my-6 text-right text-xl font-semibold">
            <NavLink
              to="/"
              onClick={handleNav}
              className={navStyleMobile}
            >
              Home
            </NavLink>
          </li>

          <li className="my-6 text-right text-xl font-semibold">
            <NavLink
              to="/about"
              onClick={handleNav}
              className={navStyleMobile}
            >
              About Us
            </NavLink>
          </li>

          {/* TAMBAHAN MENU OUR SERVICES MOBILE */}
          <li className="my-6 text-right text-xl font-semibold">
            <NavLink
              to="/ourservices"
              onClick={handleNav}
              className={navStyleMobile}
            >
              Our Services
            </NavLink>
          </li>

        </ul>
      </div>
    </>
  );
}

export default Navbar;