import React from "react";
import ImageHero from "../../assets/img/banner/Our Products_Banner Image.png";
import BgElement from "../../assets/img/elements/Asset 2@2x 1.webp";
import BgElement1 from "../../assets/img/elements/Asset 2@2x 2 (1).webp";

function Hero() {
	return (
		<>
			<div className="py-0 xl:py-0 md:py-10 flex-col-reverse lg:flex-row flex justify-between items-center h-[100%] md:h-[600px] xl:h-[600px] bg-gradient-to-l from-emerald-400 to-blue-900">
				<div className="px-5 xl:pl-24 master flex flex-col justify-center align-middle">
					<div className="f-1 text-stone-50 text-[45px] font-extrabold leading-[65.10px]">
						Discover Our Product
					</div>
					<div className=" text-stone-50 text-[19px] md:text-[25px] font-normal md:leading-[45px]">
						Immerse yourself in transformation: explore our tailored offerings,
						crafted to perfectly match your unique learning and development
						needs and preferences.
					</div>
				</div>
				<img
					className="z-[1] h-[300px] md:h-[400px] lg:[600px] xl:h-full md:mr-24"
					src={ImageHero}
					alt=""
				/>
				<img
					src={BgElement}
					className="absolute h-full z-1 opacity-30"
					alt=""
				/>
				<img
					src={BgElement1}
					className="right-0 w-[80%] absolute z-1 opacity-30"
					alt=""
				/>
			</div>
		</>
	);
}

export default Hero;
