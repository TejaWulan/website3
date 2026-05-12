import React, { useEffect, useState } from "react";
import Image1 from "../../assets/img/company/truckdanbatubara.jpg";
import Image2 from "../../assets/img/company/coalfactory.png";
import Image3 from "../../assets/img/company/coaldistribution.jpg";
import Image4 from "../../assets/img/elements/bulat_banner.png";

const slides = [
  {
    image: Image1,
    title: "PT Milenial Sukses Coalindo",
    desc: "Reliable Source",
  },
  {
    image: Image2,
    title: "PT Milenial Sukses Coalindo",
    desc: "Coordinated Shipment",
  },
  {
    image: Image3,
    title: "PT Milenial Sukses Coalindo",
    desc: "Committed Partnership",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden">

      {/* SLIDES (fade effect) */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000
          ${index === current ? "opacity-100 z-0" : "opacity-0 z-0"}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* CONTENT - Diubah ke items-end dan tambah padding bottom agar di kiri bawah */}
      <div className="relative z-20 h-full flex items-end px-6 md:px-24 pb-20 md:pb-32">

        <div className="flex items-center gap-4 md:gap-6 max-w-[900px]">

          {/* BULAT - Menggunakan Image4 yang sudah dibuat transparan tadi */}
          <img
            src={Image4}
            alt="decoration"
            className="w-16 md:w-28 object-contain"
          />

          {/* TEXT */}
          <div className="text-white">

            <h1
              key={current}
              className="text-[26px] md:text-[50px] font-extrabold leading-tight transition-all duration-700"
            >
              {slides[current].title}
            </h1>

            <p
              key={current + "desc"}
              className="mt-3 text-[14px] md:text-[22px] transition-all duration-700"
            >
              {/* Box Deskripsi dengan transparansi abu-abu mika */}
              <span className="bg-[#424651]/70 backdrop-blur-sm text-white px-4 py-2 rounded-sm border-l-4 border-[#e67e22]">
                {slides[current].desc}
              </span>
            </p>

          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${current === index ? "bg-[#e67e22] scale-125" : "bg-white/50"}
            `}
          />
        ))}
      </div>

    </div>
  );
}

export default Hero;