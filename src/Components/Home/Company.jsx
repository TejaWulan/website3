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
      className={`bg-white py-12 md:py-20 px-6 md:px-16 lg:px-24 transition-all duration-1000
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">

        {/* IMAGE - Ukuran diperkecil untuk mobile */}
        <div className="relative w-full md:w-5/12 flex justify-center md:justify-start">
          <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-none w-[75%] md:w-full">
            <img
              src={Poster1}
              alt="Company"
              className="rounded-xl w-full object-contain relative z-10 shadow-lg md:shadow-none"
            />

            {/* BORDER DEKORASI - Hanya muncul di desktop atau disesuaikan */}
            <div
              className="hidden md:block absolute -right-6 -bottom-6 w-full h-full border-4 rounded-xl -z-10"
              style={{ borderColor: "#e67e22" }}
            ></div>
          </div>
        </div>

        {/* TEXT */}
        <div className="w-full md:w-7/12 max-w-xl text-left">
          <div className="inline-block border-l-4 border-[#e67e22] pl-3 mb-3">
            <p className="text-[#424651] font-bold tracking-widest text-[10px] md:text-xs uppercase">
              COMPANY INFORMATION
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2f2f2f] leading-tight mb-5">
            PT Milenial Sukses Coalindo
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
            <strong className="text-[#424651]">Reliable Coal Trading Partner for Domestic Industry.</strong>
            <br /><br />
            PT Milenial Sukses Coalindo merupakan perusahaan yang bergerak di bidang perdagangan batubara dan jasa shipping broker.
            Kami berkomitmen menyediakan pasokan batubara yang stabil, kompetitif, dan tepat waktu.
          </p>

          {/* LIST */}
          <div className="grid grid-cols-1 gap-3 mb-8">
            {[
              "Pasokan batubara berkualitas & harga kompetitif",
              "Fokus kebutuhan industri domestik",
              "Layanan logistik terintegrasi"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="bg-[#e67e22] text-white rounded-full min-w-[20px] h-[20px] flex items-center justify-center text-[10px]">
                  ✓
                </div>
                <p className="text-gray-700 text-sm md:text-base font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Link to="/about">
            <button className="group relative px-6 py-2.5 text-sm font-bold text-[#424651] transition-all duration-300">
              <span className="relative z-10">READ MORE</span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#e67e22] group-hover:h-full transition-all duration-300 -z-0 opacity-20"></div>
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;