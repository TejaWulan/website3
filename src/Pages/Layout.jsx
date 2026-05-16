import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop"; 

function Layout() {
  const [navShow, setNavShow] = useState(false);

  return (
    <div>
      <Navbar navShow={navShow} setNavShow={setNavShow} />
      <Outlet />
      <ScrollToTop/>
      <Footer />
    </div>
  );
}

export default Layout;
