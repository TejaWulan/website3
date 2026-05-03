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
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`bg-white py-10 md:py-14 px-4 md:px-16 lg:px-24 transition-all duration-1000
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* IMAGE */}
        <div className="relative w-full md:w-5/12 lg:w-4/12 flex justify-center md:justify-start md:pl-6 md:pr-8">

          <img
            src={Poster1}
            alt="Company"
            className="rounded-xl w-[90%] md:w-full object-contain relative z-10"
          />

          {/* BORDER */}
          <div
            className="hidden md:block absolute left-8 top-8 w-full h-full border-4 rounded-xl -z-10"
            style={{ borderColor: "#e67e22" }}
          ></div>
        </div>

        {/* TEXT */}
        <div className="w-full md:w-7/12 lg:w-6/12 max-w-xl">

          <p className="text-[#424651] font-semibold tracking-wide mb-2 text-xs md:text-sm">
            COMPANY INFORMATION
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2f2f2f] leading-snug mb-3">
            PT Milenial Sukses Coalindo
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed text-xs sm:text-sm md:text-base">
            Reliable Coal Trading Partner for Domestic Industry <br /><br />
            PT Milenial Sukses Coalindo merupakan perusahaan yang bergerak di bidang perdagangan batubara dan jasa shipping broker.
            <br /><br />
            Kami berkomitmen menyediakan pasokan batubara yang stabil, kompetitif, dan tepat waktu.
          </p>

          {/* LIST */}
          <div className="space-y-2 mb-4">

            {[
              "Pasokan batubara berkualitas & harga kompetitif",
              "Fokus kebutuhan industri domestik",
              "Layanan logistik terintegrasi"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="bg-[#e67e22] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] mt-1">
                  ✓
                </div>
                <p className="text-gray-700 text-xs sm:text-sm">
                  {item}
                </p>
              </div>
            ))}

          </div>

          <Link to="/about">
            <button className="border border-gray-400 px-4 py-2 rounded-md text-xs sm:text-sm text-gray-700 hover:bg-gray-100 transition">
              Read More
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}

export default CompanyInfo;