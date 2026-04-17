import React from "react";
import WideLogo from "../assets/img/logos/logo-wideedu-footer.png";
import { Link } from "react-router-dom";
import instagram from "../assets/img/icons/instagram.png";
import linkdin from "../assets/img/icons/linkdin.png";
import maps from "../assets/img/icons/maps.png";
import youtube from "../assets/img/icons/youtube.png";

function Footer() {
  return (
    <>
      <div
        id="footer"
        className="p-5 md:px-24 md:p-10 pb-0 mt-36 bg-gray-200 flex flex-col md:flex-row items-center"
      >
        <div id="about">
          <div className="flex justify-center md:justify-start">
            <img
              src={WideLogo}
              alt=""
              className="mb-3 w-[120px] md:w-[180px]"
            />
          </div>
          <h1 className="md:text-3xl text-center md:text-left font-extrabold f-1 text-[#2C77A3]">
            Educational Service Provider
          </h1>
          <div className="address mt-5 md:mt-5">
            <p className="text-1xl mw-[50] text-black text-center md:text-left">
              International Financial Centre, Lantai 19,
            </p>
            <p className="text-1xl mw-[50] text-black mb-5 text-center md:text-left">
              Jl. Jend. Sudirman Kav. 22 - 23, Jakarta 12920, Indonesia
            </p>
          </div>
          <div className="contact mb-5 md:mb-0">
            <table className="mx-auto md:mx-0">
              <tbody>
                <tr className="">
                  <td className="font-bold pr-4 text-batext-black font-1x ">
                    Whatsapp{" "}
                  </td>
                  <td className="text-black">
                    :{" "}
                    <a
                      className="text-black"
                      href="https://bit.ly/WAChatWIDEEdu"
                      aria-label="button"
                    >
                      +62 822 1111 2676 
                    </a>
                  </td>
                </tr>
                <tr className="">
                  <td className="font-bold pr-4 text-black font-1x">Email </td>
                  <td className="text-black">
                    :{" "}
                    <a href="mailto:media@wideedu.co.id" aria-label="button">
                    info@wideedu.co.id 
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex mt-5 justify-center md:justify-normal">
              <a
                href="https://www.instagram.com/wideedu.id/"
                className="mr-1 md:mr-2 w-[10%] md:w-[50px]"
              >
                <img src={instagram} alt="" className="mix-blend-multiply" />
              </a>
              <a
                href="https://id.linkedin.com/company/wideedu-id "
                className="mx-1 md:mx-2 w-[10%] md:w-[50px]"
              >
                <img src={linkdin} alt="" className="mix-blend-multiply" />
              </a>
              <a
                href="https://www.youtube.com/@wideedu"
                className="mx-1 md:mx-2 w-[10%] md:w-[50px]"
              >
                <img src={youtube} alt="" className="mix-blend-multiply" />
              </a>
              <a
                href="https://goo.gl/maps/8c6DnNG2ikvxx3cq8"
                className="mx-1 md:mx-2 w-[10%] md:w-[50px]"
              >
                <img src={maps} alt="" className="mix-blend-multiply" />
              </a>
            </div>
          </div>
        </div>
        <div id="links" className="md:ms-auto xl:pr-20">
          <Link to="/">
            <h1 className="text-bold text-3xl m-10 text-center text-[#2C77A3] font-extrabold font-1x">
              Home
            </h1>
          </Link>
          <Link to="/product">
            <h1 className="text-bold text-3xl m-10 text-center text-[#2C77A3] font-extrabold font-1x">
              Products
            </h1>
          </Link>
          <Link to="/about">
            <h1 className="text-bold text-3xl m-10 text-center text-[#2C77A3] font-extrabold font-1x">
              About Us
            </h1>
          </Link>
          {/* <Link to="/blog">
            <h1 className="text-bold text-3xl m-10 text-center text-[#2C77A3] font-extrabold font-1x">
              Blog
            </h1>
          </Link> */}
        </div>
      </div>
      <p className="text-center text-1xl font-bold text-white f-1  p-3 bg-gradient-to-l from-emerald-400 to-blue-900">
        Copyright © 2022 WIDE Edu. All rights reserved.
      </p>
    </>
  );
}

export default Footer;
