import React, { useEffect, useState, useRef } from "react";
import Poster1 from "../../assets/img/company/Picturehome2.jpg";
import { Link } from "react-router-dom";

function CompanyInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      /* mt-16 untuk space navbar, py-12 untuk nafas di mobile */
      className={`bg-white mt-16 md:mt-0 py-12 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 transition-all duration-1000 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 max-w-6xl mx-auto">

        {/* IMAGE SECTION */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Box container gambar: w-[85%] di mobile agar tidak mentok layar */}
          <div className="relative w-[85%] sm:w-[70%] md:w-full max-w-[350px] md:max-w-none">
            <img
              src={Poster1}
              alt="Company Information"
              className="rounded-2xl w-full h-auto object-cover relative z-10 shadow-xl md:shadow-2xl"
            />

            {/* BORDER DEKORASI */}
            <div
              className="absolute -right-3 -bottom-3 md:-right-6 md:-bottom-6 w-full h-full border-2 md:border-4 rounded-2xl -z-0"
              style={{ borderColor: "#e67e22" }}
            ></div>
          </div>
        </div>

        {/* TEXT CONTENT SECTION */}
        <div className="w-full md:w-1/2 text-left">
          {/* Label Kecil */}
          <div className="inline-flex items-center border-l-4 border-[#e67e22] pl-3 mb-4">
            <p className="text-[#424651] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
              Company Information
            </p>
          </div>

          {/* Judul: text-2xl sangat pas untuk mobile agar tidak terlalu intimidatif */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2f2f2f] leading-[1.2] mb-6">
            PT Milenial Sukses Coalindo
          </h2>

          <div className="text-gray-600 mb-8 space-y-4 leading-relaxed text-[15px] md:text-base">
            <p>
              <strong className="text-[#424651] font-bold">
                Reliable Coal Trading Partner for Domestic Industry.
              </strong>
            </p>
            <p>
              Kami merupakan perusahaan yang bergerak di bidang perdagangan batubara dan jasa shipping broker dengan komitmen menyediakan pasokan yang stabil, kompetitif, dan tepat waktu.
            </p>
          </div>

          {/* LIST FEATURES */}
          <div className="flex flex-col gap-4 mb-10">
            {[
              "Pasokan batubara berkualitas & harga kompetitif",
              "Fokus kebutuhan industri domestik",
              "Layanan logistik terintegrasi"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 bg-[#e67e22] text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center text-[10px] flex-shrink-0">
                  ✓
                </div>
                <p className="text-gray-700 text-sm md:text-base font-medium leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON: Diperlebar sedikit di mobile agar mudah di-klik */}
          <Link to="/about" className="inline-block w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-8 py-3 text-sm font-bold text-[#424651] transition-all duration-300 border border-gray-200 sm:border-none">
              <span className="relative z-10 uppercase tracking-widest">Read More</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e67e22] group-hover:h-full transition-all duration-300 -z-0 opacity-10"></div>
              {/* Border aksen bawah tetap terlihat di mobile */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e67e22]"></div>
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;