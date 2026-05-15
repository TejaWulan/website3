import React from "react";
// Import aset tetap sama
import CoalBulat1 from "../../assets/img/elements/coal1.png";
import CoalBulat2 from "../../assets/img/elements/coal2.png";
import CoalBulat3 from "../../assets/img/elements/coal3.png";
import CoalBulat4 from "../../assets/img/elements/coal4.png";
import CoalSegi1 from "../../assets/img/elements/coalsegiempat1.png";
import CoalSegi2 from "../../assets/img/elements/coalsegiempat2.png";
import CoalSegi3 from "../../assets/img/elements/coalsegiempat3.png";
import logo from "../../assets/img/elements/logo_batu_bara.png";

const ProductSpecification = () => {
  const coalSizes = [
    { img: CoalBulat1, title: "Raw Coal", size: "(0 – 200 mm)" },
    { img: CoalBulat2, title: "Raw Coal", size: "(0 – 200 mm)" },
    { img: CoalBulat3, title: "Crushed Coal", size: "(0 – 50 mm)" },
    { img: CoalBulat4, title: "Crushed Coal", size: "(0 – 50 mm)" },
  ];

  const calorificValues = [
    {
      img: CoalSegi1,
      type: "LOW",
      gar: "3400 – 3800",
      moisture: "43 – 37 %",
      ash: "6%",
      sulphur: "0.5% Max",
      origin: ["South Sumatra", "South Kalimantan", "Central Kalimantan"],
    },
    {
      img: CoalSegi2,
      type: "MEDIUM",
      gar: "4000 – 4800",
      moisture: "36 – 30 %",
      ash: "6%",
      sulphur: "0.6% Max",
      origin: ["South Sumatra", "South Kalimantan", "East Kalimantan", "Central Kalimantan"],
    },
    {
      img: CoalSegi3,
      type: "HIGH",
      gar: "5000",
      moisture: "12 %",
      ash: "8%",
      sulphur: "1% Max",
      origin: ["Central Kalimantan", "East Kalimantan"],
    },
  ];

  return (
    <div className="font-sans">
      {/* --- SECTION 1: COAL SIZE (Background Putih) --- */}
      <section className="bg-white py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#e67e22] font-bold tracking-widest text-xs uppercase mb-2">Our Product</h4>
            <h2 className="text-4xl font-black text-[#2f2f2f] mb-4 text-center">Coal Size</h2>
            <p className="text-gray-600 font-medium">We provide various product size according to your specification needs</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {coalSizes.map((item, index) => (
              <div key={index} className="flex flex-col items-center group relative py-10">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 z-10">
                  <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-4 border-white relative z-10 transition-transform duration-500 group-hover:scale-110">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -left-6 w-12 h-12 md:w-16 md:h-16 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <img src={logo} alt="logo" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-10 border-t-[1px] border-[#7a7a7a] pt-4">
            <div className="text-center relative">
               <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#7a7a7a]"></div>
               <h3 className="text-xl font-black text-[#2f2f2f]">Raw Coal</h3>
               <p className="text-[#e67e22] font-bold text-sm">(0 – 200 mm)</p>
            </div>
            <div className="text-center relative">
               <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#7a7a7a]"></div>
               <h3 className="text-xl font-black text-[#2f2f2f]">Crushed Coal</h3>
               <p className="text-[#e67e22] font-bold text-sm">(0 – 50 mm)</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: CALORIFIC VALUE (Background Warna Baru) --- */}
      <section className="bg-[#f9f9f9] py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h4 className="text-[#e67e22] font-bold tracking-widest text-xs uppercase mb-2">Our Product</h4>
            <h2 className="text-4xl font-black text-[#2f2f2f] mb-4 text-center">Coal Calorific Value</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {calorificValues.map((coal, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="relative w-full aspect-[4/5] rounded-sm overflow-hidden mb-6 shadow-md">
                  <img src={coal.img} alt={coal.type} className="w-full h-full object-cover" />
                </div>
                
                <div className="border-b-2 border-[#e67e22] pb-1 mb-4">
                  <h3 className="text-4xl font-black text-[#2f2f2f] uppercase">{coal.type}</h3>
                  <p className="text-[#e67e22] font-bold text-[10px] tracking-widest uppercase">Calorific Value</p>
                </div>

                <div className="space-y-1 text-[13px]">
                  <div className="flex justify-between py-1.5 border-b border-gray-200 px-1">
                    <span className="font-bold text-[#2f2f2f]">GAR</span>
                    <span className="font-black text-[#2f2f2f]">: {coal.gar}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200 px-1">
                    <span className="text-gray-600 font-medium">Total Moisture</span>
                    <span className="text-gray-600">: {coal.moisture}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200 px-1">
                    <span className="text-gray-600 font-medium">Ash</span>
                    <span className="text-gray-600">: {coal.ash}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-gray-200 px-1">
                    <span className="text-gray-600 font-medium">Total Sulphur</span>
                    <span className="text-gray-600">: {coal.sulphur}</span>
                  </div>
                  <div className="flex flex-col py-1.5 px-1">
                    <span className="text-gray-600 font-medium mb-1">Origin :</span>
                    <ul className="list-disc list-inside text-gray-500 pl-2 space-y-0.5">
                      {coal.origin.map((loc, i) => (
                        <li key={i} className="text-[12px]">{loc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSpecification;