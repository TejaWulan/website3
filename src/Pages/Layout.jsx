import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Layout() {
  const [navShow, setNavShow] = useState(false);

  return (
    <div>
      <Navbar navShow={navShow} setNavShow={setNavShow} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
