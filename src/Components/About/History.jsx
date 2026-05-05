import React, { useEffect, useState, useRef } from "react";
import Poster1 from "../../assets/img/company/1247700294.jpg";

function AboutCompany() {
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
      className="relative py-16 md:py-24 px-6 sm:px-10 md:px-20 lg:px-32 bg-cover bg-center overflow-hidden min-h-[600px] flex items-center"
      style={{ backgroundImage: `url(${Poster1})` }}
    >
      {/* Overlay Hitam Transparan dengan Grayscale */}
      <div className="absolute inset-0 bg-black/75 backdrop-grayscale-[100%] z-0"></div>
      
      <div 
        className={`relative z-10 max-w-5xl mx-auto transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
      >
        
        {/* LABEL OUR STORY */}
        <div className="inline-block border-l-4 border-[#e67e22] pl-3 mb-6">
          <p className="text-[#e67e22] font-black tracking-[0.2em] text-xs md:text-sm uppercase">
            OUR STORY
          </p>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">
          PT MILENIAL SUKSES <br className="hidden md:block" /> COALINDO
        </h1>

        {/* CONTENT PARAGRAPH */}
        <div className="text-gray-200 space-y-6 leading-relaxed text-[15px] md:text-lg text-left">
          <p className="font-medium">
            <strong className="text-white font-extrabold">PT Milenial Sukses Coalindo</strong> didirikan dengan semangat untuk membangun perusahaan yang modern, adaptif, dan berorientasi pada kemitraan jangka panjang.
          </p>

          <p className="font-medium">
            Pada tahap awal operasional, perusahaan telah membangun jaringan <span className="text-[#e67e22] font-bold italic">supplier</span> dan <span className="text-[#e67e22] font-bold italic">buyer</span> serta mulai menjalankan aktivitas perdagangan batubara untuk pasar domestik. Dengan dukungan relasi yang terus berkembang, kami berperan sebagai penghubung antara sumber tambang dan kebutuhan industri.
          </p>

          <p className="font-medium">
            Selain itu, perusahaan juga memperkuat peran dalam rantai distribusi melalui layanan <span className="text-white font-bold italic">shipping broker</span>, guna memastikan proses pengiriman berjalan lebih efisien dan terkoordinasi.
          </p>

          <div className="pt-6 border-t border-white/20">
            <p className="font-medium mb-4">
              Kami memahami bahwa kelangsungan operasional pelanggan sangat bergantung pada ketersediaan pasokan energi. Oleh karena itu, kami berkomitmen untuk menjadi mitra yang dapat diandalkan dalam menjaga stabilitas pasokan batubara.
            </p>

            <p className="text-xl md:text-2xl font-black text-white italic">
              "Kepercayaan merupakan fondasi utama dalam setiap hubungan bisnis yang kami bangun dan pertahankan."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;