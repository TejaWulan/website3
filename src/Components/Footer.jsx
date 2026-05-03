import React from "react";
import Logo from "../assets/img/logos/logo_batu_bara.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Mengubah bg-gray-700 menjadi bg-[#7a7a7a] */}
      <div className="bg-[#7a7a7a] text-white px-5 md:px-24 py-10 flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* LEFT - LOGO */}
        <div className="flex flex-col">
          <img src={Logo} alt="logo" className="w-[180px] mb-4" />
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* MIDDLE - ADDRESS */}
        <div className="max-w-[400px]">
          <p className="text-gray-100 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="flex flex-col gap-3">
          
          <p>
            <span className="font-semibold">Phone:</span> +62 812 3456 7890
          </p>

          <p>
            <span className="font-semibold">Email:</span> info@email.com
          </p>

          <p>
            <span className="font-semibold">WhatsApp:</span> +62 812 00000
          </p>

          {/* ICONS */}
          <div className="flex gap-4 mt-4">
            
            <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-[#7a7a7a] transition cursor-pointer">
              📞
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-[#7a7a7a] transition cursor-pointer">
              ✉️
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-[#7a7a7a] transition cursor-pointer">
              💬
            </div>

            <div className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-[#7a7a7a] transition cursor-pointer">
              📷
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM - Menggunakan warna yang sedikit lebih gelap dari warna utama agar kontras */}
      <div className="bg-[#5a5a5a] text-center text-gray-200 py-3 text-sm">
        © 2026 PT. Milenial Sukses Coalindo. All rights reserved.
      </div>
    </>
  );
}

export default Footer;