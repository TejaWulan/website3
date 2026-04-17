import React from "react";
//image section
import DigitalTalentProgram from "../../assets/img/home/Digital Talent Bootcamp (1.1).png";
import TalentHiringPartnerships from "../../assets/img/home/Talent Hiring Partnership(1.1).png";
import LNDSolutions  from "../../assets//img/home/Coorporate L&D Solutions (1.1).png";

import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="mt-10">
      <div className="text-center f-1 text-teal-600 text-3xl md:text-[50px] font-extrabold leading-[65.10px]">
        <Link to="/product" className="hover:text-[#0D2F69]">
          Our Products
        </Link>
      </div>
      <div className="images p-5 md:p-10 flex flex-col lg:flex-row justify-evenly">
        <div className="my-3 md:my-5 w-[100%] lg:w-[30%] flex flex-col items-center">
          <div className="p-2 bg-white rounded-full shadow-lg">
            <img
              src={DigitalTalentProgram}
              alt=""
              className="h-[200px] rounded-full"
            />
          </div>
          <h1 className="text-center text-xl md:text-3xl font-1 font-[1000] mt-3 c-2 md:max-w-[50%]">
            THE DIGITAL TALENT BOOTCAMP 
          </h1>
        </div>
        <div className="my-3 md:my-5 w-[100%] lg:w-[30%] flex flex-col items-center">
          <div className="p-2 bg-white rounded-full shadow-lg">
            <img
              src={TalentHiringPartnerships}
              alt=""
              className="h-[200px] rounded-full"
            />
          </div>
          <h1 className="text-center text-xl md:text-3xl font-1 font-[1000] mt-3 c-2 md:max-w-[50%]">
            TALENT HIRING PARTNERSHIP
          </h1>
        </div>
        <div className="my-3 md:my-5 w-[100%] lg:w-[30%]  flex flex-col items-center">
          <div className="p-2 bg-white rounded-full shadow-lg">
            <img
              src={LNDSolutions}
              alt=""
              className="h-[200px] rounded-full"
            />
          </div>
          <h1 className="text-center text-xl md:text-3xl font-1 font-[1000] mt-3 c-2 md:max-w-[50%]">
            CORPORATE L&D SOLUTIONS 
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Products;
