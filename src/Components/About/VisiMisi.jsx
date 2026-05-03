import React, { useEffect, useState, useRef } from "react";
import Poster1 from "../../assets/img/company/gallery1.png";

function VisionMission() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gray-100 py-20 px-5 md:px-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* LEFT TEXT (dari kanan → ke kiri) */}
        <div
          className={`w-full md:w-1/2 transition-all duration-1000 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >

          <p className="text-green-400 font-semibold tracking-wide mb-2">
            PT MILENIAL SUKSES COALINDO
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-8">
            Vision & Mission
          </h2>

          {/* VISION */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                ✓
              </div>
              <h3 className="font-bold text-lg">Our Vision</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* MISSION */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                ✓
              </div>
              <h3 className="font-bold text-lg">Our Mission</h3>
            </div>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore</li>
              <li>Ut enim ad minim veniam quis nostrud exercitation</li>
            </ul>
          </div>
        </div>

        {/* RIGHT IMAGE (dari kiri → ke kanan biar kontras) */}
        <div
          className={`relative w-full md:w-1/2 transition-all duration-1000 ease-out delay-200
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <img
            src={Poster1}
            alt="Vision Mission"
            className="rounded-xl w-full object-cover"
          />

          <div className="hidden md:block absolute -right-5 top-10 w-full h-full border-4 border-orange-400 rounded-xl -z-10"></div>
        </div>

      </div>
    </section>
  );
}

export default VisionMission;