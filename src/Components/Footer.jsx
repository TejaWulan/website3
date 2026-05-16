import React from "react";
import Logo from "../assets/img/logos/logo_batu_bara.png";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const phoneNumber = "082188882201";

  return (
    <footer>

      <div className="bg-[#7a7a7a] text-white px-6 md:px-20 lg:px-32 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">

          <div className="flex flex-col items-start">
            <img src={Logo} alt="PT. Milenial Logo" className="w-[180px] md:w-[200px] h-auto mb-2" />
          </div>

          {/* MIDDLE - ADDRESS */}
          <div className="flex flex-col max-w-[320px]">
            <p className="text-white leading-relaxed text-[14px] md:text-[15px] font-semibold">
              Graha Raya, Ruko Silktown Avenue, <br />
              Blok RK/5A-05 Pondok Jagung Timur, <br />
              Serpong Utara, Kota Tangerang Selatan, <br />
              Banten
            </p>
          </div>

          {/* RIGHT - CONTACT & ICONS */}
          {/* RIGHT - CONTACT & ICONS */}
          <div className="flex flex-col gap-3 min-w-[250px]">

            {/* WhatsApp Row */}
            <div className="flex items-center">
              <span className="font-bold w-[95px] inline-block">WhatsApp.</span>
              <span className="font-semibold text-white">0821-8888-2201</span>
            </div>

            {/* Email Row */}
            <div className="flex items-center">
              <span className="font-bold w-[95px] inline-block">Email.</span>
              <span className="font-semibold text-white lowercase">cs.msc@outlook.com</span>
            </div>

            {/* ICONS */}
            <div className="flex gap-4 mt-2">
              <a
                href={`https://wa.me/62${phoneNumber.substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white rounded-full hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
              >
                <FaWhatsapp className="text-xl" />
              </a>

              <a
                href="https://www.instagram.com/pt.msc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-white rounded-full hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="mailto:cs.msc@outlook.com"
                className="w-9 h-9 flex items-center justify-center border border-white rounded-full hover:bg-blue-500 hover:border-blue-500 transition-all duration-300"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM - COPYRIGHT (Diperpendek py-4) */}
      <div className="bg-[#7a7a7a] border-t border-white/20 text-center text-white py-4 text-[12px] font-bold tracking-wide">
        © 2026 PT Milenial Sukses Coalindo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;