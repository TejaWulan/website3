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
      /* px-6 sampai lg:px-32 memberikan space kiri-kanan yang lega agar konten tidak terlalu lebar */
      className="bg-white mt-16 md:mt-0 py-16 md:py-24 px-6 sm:px-10 md:px-20 lg:px-32 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 max-w-7xl mx-auto">

        {/* IMAGE SECTION - Animasi Fade In dari Bawah ke Atas */}
        <div 
          className={`relative w-full md:w-5/12 flex justify-center transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          {/* max-w dikunci di 340px agar gambar tidak terlalu besar di desktop */}
          <div className="relative w-[80%] sm:w-[65%] md:w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
            <img
              src={Poster1}
              alt="Our Services"
              className="rounded-2xl w-full h-auto object-cover relative z-10 shadow-xl"
            />

            {/* BORDER DEKORASI */}
            <div
              className="absolute -right-3 -bottom-3 md:-right-5 md:-bottom-5 w-full h-full border-2 md:border-[3px] rounded-2xl -z-0"
              style={{ borderColor: "#e67e22" }}
            ></div>
          </div>
        </div>

        {/* TEXT CONTENT SECTION - Animasi Fade In dari Kanan ke Kiri */}
        <div 
          className={`w-full md:w-7/12 text-left transition-all duration-1000 delay-300 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
        >
          {/* Label Kecil */}
          <div className="inline-flex items-center border-l-4 border-[#e67e22] pl-3 mb-4">
            <p className="text-[#424651] font-black tracking-[0.2em] text-[10px] md:text-xs uppercase">
              OUR SERVICES
            </p>
          </div>

          {/* Judul Utama */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2f2f2f] leading-[1.2] mb-6">
            Coal Trading & <br className="hidden md:block" /> Logistics Solution
          </h2>

          {/* Deskripsi Teks */}
          <div className="text-gray-600 space-y-5 leading-relaxed text-[15px] md:text-base font-medium">
            <p>
              Kami berfokus pada penyediaan solusi perdagangan batubara yang terintegrasi, dengan mengutamakan kebutuhan pelanggan sebagai prioritas utama dalam setiap transaksi.
            </p>
            <p>
              Sebagai perusahaan yang berkembang, <strong className="text-[#424651] font-extrabold">PT Milenial Sukses Coalindo</strong> berperan dalam menghubungkan sumber batubara dari berbagai wilayah di Indonesia dengan kebutuhan industri yang terus berjalan setiap hari.
            </p>
            <p>
              Kami memastikan bahwa setiap proses, mulai dari pengadaan hingga pengiriman, dilakukan secara efisien, andal, dan bertanggung jawab.
            </p>
          </div>

          {/* Garis Aksen Bawah */}
          <div className="mt-8 w-20 h-1.5 bg-[#e67e22] rounded-full"></div>

        </div>
      </div>
    </section>
  );
}

export default Coal;