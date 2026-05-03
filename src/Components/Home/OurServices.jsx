import React from "react";
// Import gambar sesuai path yang kamu berikan
import gambar1 from "../../assets/img/elements/networking.png"; 
import gambar2 from "../../assets/img/elements/qualitycontrol.png";
import gambar3 from "../../assets/img/elements/kapal.png";
import gambar4 from "../../assets/img/elements/payment.png";

const Services = () => {
  const serviceData = [
    {
      title: "Reliable Supply Network",
      description:
        "Kami bekerja sama dengan jaringan supplier batubara dari berbagai wilayah di Indonesia untuk memastikan ketersediaan pasokan yang stabil dan berkelanjutan sesuai kebutuhan pelanggan.",
      icon: gambar1,
    },
    {
      title: "Quality Assurance",
      description:
        "Setiap pengiriman batubara melalui proses kontrol kualitas untuk memastikan spesifikasi sesuai dengan kebutuhan industri, mulai dari proses loading hingga pengiriman.",
      icon: gambar2,
    },
    {
      title: "Integrated Shipping Support",
      description:
        "Didukung oleh jaringan mitra tugboat dan barge, kami menyediakan layanan shipping broker untuk memastikan proses pengiriman berjalan efisien dan sesuai jadwal.",
      icon: gambar3,
    },
    {
      title: "Flexible Commercial Approach",
      description:
        "Adding value to our services, we can provide a payment term for our coal dedicated only for our loyal customers.",
      icon: gambar4,
    },
  ];

  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section - Menggunakan warna kustom #e67e22 */}
        <h4 className="text-[#e67e22] font-bold tracking-[0.2em] text-sm uppercase mb-2">
          PT MILENIAL SUKSES COALINDO
        </h4>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
          Our Services
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-4 group">
              {/* Icon Container */}
              <div className="w-24 h-24 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 h-14 flex items-center">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
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