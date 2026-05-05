import React from "react";
import Hero from "../Components/Home/Hero";
import Company from "../Components/Home/Company";
import Partner from "../Components/Home/Partner";
import Client from "../Components/Home/Client";
import OurServices from "../Components/Home/OurServices";
import Transparation from "../Components/Home/TransparationFooter";


function Home() {
  return (
    <>
      <Hero />
      <Company />
      <Partner />
      <Client/>
      <OurServices/>
      <Transparation/>
    </>
  );
}

export default Home;
