import React from "react";
import { GiCargoShip, GiShipWheel } from "react-icons/gi"; 
import gambarVessel from "../../assets/img/ourproduct/batubara_papan.png"; 
import gambarBarge from "../../assets/img/ourproduct/batubara_kapal.png"; 

const OrderQuantity = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#e67e22] font-bold tracking-widest text-xs md:text-sm uppercase mb-2">
            OUR PRODUCT
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#2f2f2f]">
            Order Quantity
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          
          {/* Barge Item */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4 border-b-2 border-gray-100 pb-4">
              <GiShipWheel className="text-4xl md:text-5xl text-gray-400" />
              <h3 className="text-xl md:text-2xl font-black text-[#2f2f2f]">Barge</h3>
            </div>
            <div className="overflow-hidden rounded-sm shadow-lg">
              <img 
                src={gambarBarge} 
                alt="Barge Transport" 
                className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Vessel Item */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4 border-b-2 border-gray-100 pb-4">
              <GiCargoShip className="text-4xl md:text-5xl text-gray-400" />
              <h3 className="text-xl md:text-2xl font-black text-[#2f2f2f]">Vessel</h3>
            </div>
            <div className="overflow-hidden rounded-sm shadow-lg">
              <img 
                src={gambarVessel} 
                alt="Vessel Transport" 
                className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderQuantity;