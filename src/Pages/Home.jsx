import React from "react";
import Hero from "../Components/Home/Hero";
import Company from "../Components/Home/Company";
import Partner from "../Components/Home/Partner";
import OurServices from "../Components/Home/OurServices";
import Transparation from "../Components/Home/TransparationFooter";


function Home() {
  return (
    <>
      <Hero />
      <Company />
      <Partner />
      <OurServices/>
      <Transparation/>
    </>
  );
}

export default Home;
