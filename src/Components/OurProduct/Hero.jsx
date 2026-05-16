import React from "react";
import gambar4 from "../../assets/img/ourproduct/truckkeruk.jpg";

const ProductHeader = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div 
        className="relative h-[250px] md:h-[300px] flex items-center px-6 md:px-20 lg:px-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${gambar4})` }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-0"></div>

        {/* Content Section */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          
          {/* Judul Halaman (OUR PRODUCT) */}
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            OUR PRODUCT
          </h1>

          {/* Breadcrumb (HOME > OUR PRODUCT) */}
          <nav className="flex items-center gap-2 text-[11px] md:text-xs font-bold tracking-widest uppercase">
            <span className="text-white hover:text-[#e67e22] cursor-pointer transition-colors">
              HOME
            </span>
            <span className="text-[#e67e22] scale-150 font-light mx-1">›</span>
            <span className="text-[#e67e22]">
              OUR PRODUCT
            </span>
          </nav>

        </div>

        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#e67e22] z-20"></div>
      </div>
    </section>
  );
};

export default ProductHeader;