import React, { useEffect, useState, useRef } from "react";
import gambar1 from "../../assets/img/elements/networking.png"; 
import gambar2 from "../../assets/img/elements/qualitycontrol.png";
import gambar3 from "../../assets/img/elements/kapal.png";
import gambar4 from "../../assets/img/elements/salam.png";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const serviceData = [
    {
      title: "Reliable Supply Network",
      description: "Kami bekerja sama dengan jaringan supplier batubara dari berbagai wilayah di Indonesia untuk memastikan ketersediaan pasokan yang stabil dan berkelanjutan sesuai kebutuhan pelanggan.",
      icon: gambar1,
    },
    {
      title: "Quality Assurance",
      description: "Setiap pengiriman batubara melalui proses kontrol kualitas untuk memastikan spesifikasi sesuai dengan kebutuhan industri, mulai dari proses loading hingga pengiriman.",
      icon: gambar2,
    },
    {
      title: "Integrated Shipping Support",
      description: "Didukung oleh kemitraan logistik dan fasilitas pengiriman yang terkoordinasi, kami memastikan proses distribusi berjalan lebih efisien, aman, dan tepat waktu.",
      icon: gambar3,
    },
    {
      title: "Flexible Commercial Approach",
      description: "Kami percaya bahwa hubungan jangka panjang dibangun melalui kepercayaan, komunikasi yang baik, dan komitmen dalam memberikan pelayanan terbaik bagi setiap pelanggan.",
      icon: gambar4,
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 px-6 md:px-12 lg:px-24 bg-white font-sans overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section - Fade In dari Atas */}
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}>
          <h4 className="text-[#e67e22] font-extrabold tracking-[0.2em] text-sm uppercase mb-2">
            PT MILENIAL SUKSES COALINDO
          </h4>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-12">
            Our Services
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center p-4 transition-all duration-1000 ease-out
                ${isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 translate-x-20" // Efek dari kanan ke kiri
                }`}
              // Inline style untuk stagger effect (bergantian munculnya)
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icon Container */}
              <div className="w-24 h-24 mb-6 flex items-center justify-center transition-transform duration-500 hover:scale-110">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-extrabold text-gray-800 mb-4 h-auto md:h-14 flex items-center justify-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;