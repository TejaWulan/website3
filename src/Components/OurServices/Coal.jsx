import React, { useEffect, useState, useRef } from "react";
import Poster1 from "../../assets/img/ourservices/ourservices.png";

function CoalSupply() {
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
      className="bg-white mt-20 md:mt-16 py-16 md:py-24 px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-16 lg:gap-24 max-w-7xl mx-auto">

        <div 
          className={`relative w-full md:w-5/12 flex transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="relative w-full flex">
            <img
              src={Poster1}
              alt="Coal Supply & Distribution"
              className="rounded-2xl w-full h-full object-cover relative z-10 shadow-xl"
            />

            {/* BORDER DEKORASI */}
            <div
              className="absolute -right-3 -bottom-3 md:-right-5 md:-bottom-5 w-full h-full border-2 md:border-[3px] rounded-2xl -z-0"
              style={{ borderColor: "#e67e22" }}
            ></div>
          </div>
        </div>

        {/* TEXT CONTENT SECTION - Menentukan Tinggi Kontainer */}
        <div 
          className={`w-full md:w-7/12 flex flex-col justify-center text-left transition-all duration-1000 delay-300 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          {/* Label Kecil */}
          <div className="inline-flex items-center border-l-4 border-[#e67e22] pl-3 mb-4">
            <p className="text-[#424651] font-black tracking-[0.2em] text-[10px] md:text-xs uppercase">
              OUR SERVICES
            </p>
          </div>

          {/* Judul Utama */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2f2f2f] leading-[1.2] mb-6 uppercase">
            Coal Supply & <br className="hidden md:block" /> Distribution
          </h2>

          <div className="text-gray-600 space-y-6 leading-relaxed text-[15px] md:text-lg font-medium">
            <p>
              Kami berfokus pada penyediaan solusi perdagangan batubara yang terintegrasi, dengan mengutamakan kebutuhan pelanggan sebagai prioritas utama dalam setiap transaksi.
            </p>
            <p>
              Dengan dukungan jaringan supplier dan sistem distribusi yang terintegrasi, <strong className="text-[#424651] font-extrabold">PT Milenial Sukses Coalindo</strong> memastikan proses pengadaan dan pengiriman batubara berjalan secara efisien, tepat waktu, dan dapat diandalkan.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CoalSupply;