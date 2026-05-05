import React, { useEffect, useState, useRef } from "react";
import Poster1 from "../../assets/img/ourservices/Picture2.png";

function Coal() {
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
      /* mt-16 memberikan jarak putih dari navbar di mobile */
      className={`bg-white mt-16 md:mt-0 py-12 md:py-24 px-5 sm:px-8 md:px-16 lg:px-24 transition-all duration-1000 ease-out
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 max-w-6xl mx-auto">

        {/* IMAGE SECTION */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-[85%] sm:w-[70%] md:w-full max-w-[350px] md:max-w-none">
            <img
              src={Poster1}
              alt="Our Services"
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
              OUR SERVICES
            </p>
          </div>

          {/* Judul Utama */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2f2f2f] leading-[1.2] mb-6">
            Coal Trading & <br className="hidden md:block" /> Logistics Solution
          </h2>

          {/* Deskripsi Teks */}
          <div className="text-gray-600 space-y-5 leading-relaxed text-[15px] md:text-base">
            <p>
              Kami berfokus pada penyediaan solusi perdagangan batubara yang terintegrasi, dengan mengutamakan kebutuhan pelanggan sebagai prioritas utama dalam setiap transaksi.
            </p>
            <p>
              Sebagai perusahaan yang berkembang, <strong className="text-[#424651]">PT Milenial Sukses Coalindo</strong> berperan dalam menghubungkan sumber batubara dari berbagai wilayah di Indonesia dengan kebutuhan industri yang terus berjalan setiap hari.
            </p>
            <p>
              Kami memastikan bahwa setiap proses, mulai dari pengadaan hingga pengiriman, dilakukan secara efisien, andal, dan bertanggung jawab.
            </p>
          </div>

          {/* Garis Aksen Bawah (Opsional untuk estetika penutup) */}
          <div className="mt-8 w-20 h-1 bg-[#e67e22] rounded-full"></div>

        </div>
      </div>
    </section>
  );
}

export default Coal;