import React from "react";
import AboutWide from "../Components/About/AboutWide";
import Portfolio from "../Components/About/Portfolio";
import Value from "../Components/About/Value";
import ContactUs from "../Components/About/ContactUs";
import Gallery from "../Components/About/Gallery";
import Hero from "../Components/About/Hero";

function About() {
  return (
    <>
      <Hero />
      <AboutWide />
      <div className="p-5 md:p-10 px-5 md:px-24">
        <Value />
        <Portfolio />
        <Gallery />
        <ContactUs />
      </div>
    </>
  );
}

export default About;
