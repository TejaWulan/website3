import React from "react";
import ImageHero from "../../assets/img/banner/banner1.png";

function Hero() {
  return (
    <div
      className="relative w-full h-[500px] md:h-[700px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${ImageHero})` }}
    >
      {/* Overlay biar teks lebih kebaca */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-24 text-white max-w-[800px]">
        <h1 className="text-[28px] md:text-[45px] font-extrabold leading-tight">
          Developing Young Digital Talents across Indonesia
        </h1>

        <p className="mt-4 text-[16px] md:text-[22px] leading-relaxed">
          Unlock new success with experiential learning. Enhance your
          professional and digital skills. Join us today!
        </p>

        <button className="mt-6 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Explore Job Listing
        </button>
      </div>
    </div>
  );
}

export default Hero;