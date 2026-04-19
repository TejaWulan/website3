import React, { useEffect, useState } from "react";
import Kaldera from "../../assets/img/home/kaldera.png";
import Rekind from "../../assets/img/home/rekind.png";

function Partner() {
  const data = [
    { img: Kaldera, title: "PT KALDERA COAL SUPPLIER" },
    { img: Rekind, title: "PT REKIND DAYA MAMUJU" },
    { img: Kaldera, title: "PARTNER 3" },
    { img: Rekind, title: "PARTNER 4" },
  ];

  const extendedData = [...data, ...data];
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // reset infinite
  useEffect(() => {
    if (current >= data.length) {
      setTimeout(() => setCurrent(0), 700);
    }
  }, [current]);

  return (
    <div className="mt-10 py-16 bg-gray-100 relative">

      {/* TITLE */}
      <h1 className="text-center text-3xl md:text-5xl font-extrabold text-teal-600 mb-10">
        Our Partners
      </h1>

      {/* PANAH DI BACKGROUND */}
      <button
        onClick={() => setCurrent((prev) => prev - 1)}
        className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
      >
        ❮
      </button>

      <button
        onClick={() => setCurrent((prev) => prev + 1)}
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 z-20 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
      >
        ❯
      </button>

      {/* SLIDER */}
      <div className="max-w-3xl mx-auto overflow-hidden">

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 50}%)`,
          }}
        >
          {extendedData.map((item, index) => (
            <div key={index} className="w-1/2 flex-shrink-0 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center h-full hover:shadow-xl transition">
                <img
                  src={item.img}
                  alt=""
                  className="h-[120px] mx-auto mb-4"
                />
                <h2 className="text-sm md:text-lg font-bold">
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

export default Partner;