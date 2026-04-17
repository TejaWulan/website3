import React from "react";
import WhyChooseUs from "../Components/Product/WhyChooseUs";
import WhatToLearn from "../Components/Product/WhatToLearn";
import Hero from "../Components/Product/Hero";

function Product() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <div className="p-5 md:p-10 px-5 md:px-24">
        <WhatToLearn />
      </div>
    </>
  );
}

export default Product;
