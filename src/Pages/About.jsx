import React from "react";
import Company from "../Components/About/Company";
import History from "../Components/About/History";
import VisiMisi from "../Components/About/VisiMisi";
import CorporateValues from "../Components/About/CorporateValues";
import Transparation from "../Components/About/TransparationFooter";


function About() {
  return (
    <>
      <Company />
            <History/>
        <VisiMisi/>
        <CorporateValues/>
        <Transparation/>
    </>
  );
}

export default About;
