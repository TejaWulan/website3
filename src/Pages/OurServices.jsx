import React from "react";
import Coal from "../Components/OurServices/Coal";
import Transparation from "../Components/OurServices/TransparationFooter";
import MapCoal from "../Components/OurServices/MapCoal";
import Services from "../Components/OurServices/OurServices";


function OurServices() {
  return (
    <>
      {/* <Hero /> */}
      <Coal />
      <Services/>
      <MapCoal />
      <Transparation />
    </>
  );
}

export default OurServices;
