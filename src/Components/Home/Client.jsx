import React, { useEffect, useState } from "react";
import Sinarmas from "../../assets/img/home/APPSINARMAS-OC2.png";
import BAI from "../../assets/img/home/BAI-OC.png-removebg-preview.png";
import BAP from "../../assets/img/home/BAP-OC-removebg-preview.png";
import SAMORA from "../../assets/img/home/samora_gropu-oc.png";
import Rekind from "../../assets/img/home/rekind.png";


function Client() {
  const data = [
    { img: Sinarmas, title: "APP GROUP (SINARMAS)" },
    { img: BAI, title: "PT BORNEO AlUMINA INDONESIA" },
    { img: BAP, title: "PT BORNEO ALUMINDO PRIMA" },
    { img: SAMORA, title: "SAMORA GROUP" },
    { img: Rekind, title: "PT REKIND DAYA MAMUJU" },
  ];

  const extendedData = [...data, ...data, ...data];
  const [current, setCurrent] = useState(data.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    if (current >= data.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(data.length);
      }, 700);
    }
    if (current <= data.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(data.length * 2 - 1);
      }, 700);
    }
  }, [current, data.length]);

  return (
    <div className="mt-10 py-16 bg-gray-100 relative overflow-hidden">
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-[#424651] mb-10">
        Our Clients
      </h1>

      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10 pointer-events-none">
        <button onClick={handlePrev} className="pointer-events-auto z-20 bg-[#e67e22] text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110">
          ❮
        </button>
        <button onClick={handleNext} className="pointer-events-auto z-20 bg-[#e67e22] text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110">
          ❯
        </button>
      </div>

      <div className="max-w-6xl mx-auto overflow-hidden px-4">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${current * (window.innerWidth < 768 ? 100 : 33.333)}%)`,
          }}
        >
          {extendedData.map((item, index) => (
            <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-4">
              <div className="bg-white border-b-4 border-[#e67e22] shadow-md rounded-xl p-8 text-center h-full flex flex-col justify-center items-center hover:shadow-xl transition-all">
                <div className="h-[100px] flex items-center justify-center w-full mb-6">
                  {/* WARNA LOGO SEKARANG SESUAI ASLINYA */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-full max-w-[85%] object-contain"
                  />
                </div>
                <h2 className="text-sm md:text-md font-bold text-gray-700 uppercase">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;