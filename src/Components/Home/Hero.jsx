import React, { useEffect, useState } from "react";
import Image1 from "../../assets/img/company/truckdanbatubara.jpg";
import Image2 from "../../assets/img/company/coalfactory.png";
import Image3 from "../../assets/img/company/coaldistribution.jpg";
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

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center px-5 md:px-24">

        <div className="flex items-center gap-4 md:gap-6 max-w-[800px]">

          {/* BULAT */}
          <img
            src={Image4}
            alt="decoration"
            className="w-14 md:w-24"
          />

          {/* TEXT */}
          <div className="text-white">

            <h1
              key={current}
              className="text-[24px] md:text-[45px] font-extrabold leading-tight transition-all duration-700"
            >
              {slides[current].title}
            </h1>

            <p
              key={current + "desc"}
              className="mt-3 text-[14px] md:text-[22px] transition-all duration-700"
            >
              <span className="bg-green-400/80 text-black px-2 py-1 rounded">
                {slides[current].desc}
              </span>
            </p>

          </div>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${current === index ? "bg-white scale-110" : "bg-white/50"}
            `}
          />
        ))}
      </div>

    </div>
  );
}

export default Hero;