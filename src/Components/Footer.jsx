import React from "react";
import Logo from "../assets/img/logos/logo_batu_bara.png";

function Footer() {
  const phoneNumber = "082188882201"; 

  return (
    <footer>
      {/* SECTION UTAMA - BG #7a7a7a */}
      <div className="bg-[#7a7a7a] text-white px-6 md:px-20 lg:px-32 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 lg:gap-32">
          
          {/* LEFT - LOGO */}
          <div className="flex flex-col items-start min-w-[200px]">
            <img src={Logo} alt="PT. Milenial Logo" className="w-[220px] h-auto mb-2" />
          </div>

          {/* MIDDLE - ADDRESS */}
          <div className="flex flex-col max-w-[320px]">
            <p className="text-white leading-relaxed text-[15px] font-semibold">
              Graha Raya, Ruko Silktown Avenue, <br />
              Blok RK/5A-05 Pondok Jagung Timur, <br />
              Serpong Utara, Kota Tangerang Selatan, <br />
              Banten
            </p>
          </div>

          {/* RIGHT - CONTACT (Hanya Teks di bagian atas) */}
          <div className="flex flex-col gap-3 min-w-[250px]">
            
            <div className="flex gap-4">
              <span className="font-bold min-w-[80px]">Phone.</span>
              <span className="font-semibold text-white">0821-8888-2201</span>
            </div>

            <div className="flex gap-4">
              <span className="font-bold min-w-[80px]">WhatsApp.</span>
              <span className="font-semibold text-white">0821-8888-2201</span>
            </div>

            <div className="flex gap-4">
              <span className="font-bold min-w-[80px]">Email.</span>
              <span className="font-semibold text-white lowercase">email1111@gmail.com</span>
            </div>

            {/* ICONS (Bagian Biru - WhatsApp dan Email Link) */}
            <div className="flex gap-4 mt-4">
              {/* WhatsApp Link Icon */}
              <a 
                href={`https://wa.me/62${phoneNumber.substring(1)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Chat via WhatsApp"
                className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full hover:bg-green-500 hover:border-green-500 transition duration-300 cursor-pointer"
              >
                {/* Menggunakan Emoji atau Inisial WA */}
                <span className="text-lg">💬</span> 
              </a>

              {/* Email Link Icon */}
              <a 
                href="mailto:email1111@gmail.com" 
                title="Send Email"
                className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full hover:bg-blue-500 hover:border-blue-500 transition duration-300 cursor-pointer"
              >
                <span className="text-lg">✉️</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM - COPYRIGHT */}
      <div className="bg-[#7a7a7a] border-t border-white/20 text-center text-white py-6 text-[13px] font-bold tracking-wide">
        © 2026 PT Milenial Sukses Coalindo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;