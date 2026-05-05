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
      // px disesuaikan agar space kiri-kanan lebih lega di layar besar
      className="bg-white mt-16 md:mt-0 py-12 md:py-24 px-6 sm:px-12 md:px-20 lg:px-32 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 max-w-7xl mx-auto">

        {/* IMAGE SECTION - Muncul dari Bawah ke Atas */}
        <div 
          className={`relative w-full md:w-5/12 flex justify-center transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          {/* max-w dipasang agar gambar tidak terlalu raksasa */}
          <div className="relative w-[80%] sm:w-[60%] md:w-full max-w-[320px] lg:max-w-[380px]">
            <img
              src={Poster1}
              alt="Company Information"
              className="rounded-2xl w-full h-auto object-cover relative z-10 shadow-xl"
            />

            {/* BORDER DEKORASI */}
            <div
              className="absolute -right-3 -bottom-3 md:-right-5 md:-bottom-5 w-full h-full border-2 md:border-[3px] rounded-2xl -z-0"
              style={{ borderColor: "#e67e22" }}
            ></div>
          </div>
        </div>

        {/* TEXT CONTENT SECTION - Muncul dari Kanan ke Kiri */}
        <div 
          className={`w-full md:w-7/12 text-left transition-all duration-1000 delay-300 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          {/* Label Kecil */}
          <div className="inline-flex items-center border-l-4 border-[#e67e22] pl-3 mb-4">
            <p className="text-[#424651] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">
              Company Information
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2f2f2f] leading-[1.2] mb-6">
            PT Milenial Sukses Coalindo
          </h2>

          <div className="text-gray-600 mb-8 space-y-4 leading-relaxed text-[15px] md:text-base">
            <p>
              <strong className="text-[#424651] font-bold text-lg">
                Reliable Coal Trading Partner for Domestic Industry.
              </strong>
            </p>
            <p className="font-medium">
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
              <div key={i} className="flex items-start gap-3 group">
                <div className="mt-1 bg-[#e67e22] text-white rounded-full min-w-[20px] h-[20px] flex items-center justify-center text-[10px] flex-shrink-0 shadow-md">
                  ✓
                </div>
                <p className="text-gray-700 text-sm md:text-base font-semibold leading-tight group-hover:text-[#e67e22] transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <Link to="/about" className="inline-block w-full sm:w-auto">
            <button className="group relative w-full sm:w-auto px-10 py-3.5 text-sm font-black text-[#424651] transition-all duration-300 border-b-2 border-[#e67e22] hover:bg-gray-50">
              <span className="relative z-10 uppercase tracking-[0.15em]">Read More</span>
              <div className="absolute bottom-0 left-0 w-0 h-full bg-[#e67e22] opacity-10 group-hover:w-full transition-all duration-500"></div>
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;