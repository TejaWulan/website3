import React from "react";
import Company from "../Components/About/Company";
import History from "../Components/About/History";
import VisiMisi from "../Components/About/VisiMisi";
import Transparation from "../Components/About/TransparationFooter";


function About() {
  return (
    <>
      <Company />
            <History/>
        <VisiMisi/>
        <Transparation/>
    </>
  );
}

export default About;
