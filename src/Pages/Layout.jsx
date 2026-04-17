import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CTA from "../Components/CtaWhatsapp";

function Layout() {
  const [navShow, setNavShow] = useState(false);

  return (
    <div>
      <Navbar navShow={navShow} setNavShow={setNavShow} />
      <Outlet />
      <CTA />
      <Footer />
    </div>
  );
}

export default Layout;
