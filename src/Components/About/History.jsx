import React from "react";

function AboutCompany() {
  return (
    <section className="py-20 px-5 md:px-24 bg-gray-100">
      
      <div className="max-w-5xl">
        
        {/* LABEL ABOUT */}
        <p className="text-green-400 font-semibold tracking-widest text-lg md:text-xl mb-3">
          ABOUT
        </p>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-6">
          PT. MILENIAL SUKSES COALINDO
        </h1>

        {/* PARAGRAPH */}
        <div className="text-gray-700 space-y-4 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;