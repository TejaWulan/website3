import React, { useEffect, useState } from "react";
import Image1 from "../../assets/img/banner/banner11.png";
import Image2 from "../../assets/img/banner/banner3.jpg";
import Image3 from "../../assets/img/banner/Nikel-1.jpeg";
import Image4 from "../../assets/img/elements/bulat_banner.png";

const slides = [
  {
    image: Image1,
    title: "Trusted Mining Industry Leader in Indonesia",
    desc: "We provide a variety of essential natural resources",
  },
  {
    image: Image2,
    title: "Delivering Sustainable Energy Solutions",
    desc: "Empowering industries with reliable resources",
  },
  {
    image: Image3,
    title: "Building Strong Future Together",
    desc: "Committed to excellence and innovation",
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

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-5 md:px-24">
        
        {/* Wrapper kiri (bulat + text) */}
        <div className="flex items-center gap-6 max-w-[900px]">

          {/* 🔥 BULAT PNG */}
          <img
            src={Image4}
            alt="decoration"
            className="w-20 md:w-28 animate-fadeUp"
          />

          {/* Text */}
          <div className="text-white">

            {/* Title */}
            <h1
              key={current}
              className="text-[28px] md:text-[45px] font-extrabold leading-tight animate-fadeUp"
            >
              {slides[current].title}
            </h1>

            {/* Desc + Highlight */}
            <p
              key={current + "desc"}
              className="mt-4 text-[16px] md:text-[22px] animate-fadeUp delay-200"
            >
              <span className="bg-green-400/80 text-black px-2 py-1 rounded">
                {slides[current].desc}
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;