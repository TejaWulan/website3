import React from "react";
import ImageHero from "../../assets/img/banner/About-Us-Banner-Image.webp";
import BgElement from "../../assets/img/elements/Asset 2@2x 1.webp";
import BgElement1 from "../../assets/img/elements/Asset 2@2x 2 (1).webp";

function Hero() {
	return (
		<>
			<div className="flex-col-reverse lg:flex-row flex justify-between items-center h-[100%] md:h-[800px] lg:h-[600px] bg-gradient-to-l from-emerald-400 to-blue-900">
				<div className="z-[1] px-5 xl:ps-24 master flex flex-col justify-center align-middle ">
					<div className="f-1 text-stone-50 text-[30px] md:text-[45px] font-extrabold md:leading-[65.10px]">
						About WIDE Edu
					</div>
					<div className="md:pb-10 text-stone-50 text-[19px] md:text-[23px] font-normal md:leading-[45px]">
						Unleash your potential with us, an education partner committed to
						nurturing digital brilliance. Our diverse array of transformative
						training programs is tailored to amplify your career journey in
						today's dynamic digital realm. Elevate your skills, embrace
						innovation, and conquer the digital era.
					</div>
				</div>
				<img
					className="z-[1] pr-5 xl:pr-24 h-[300px] md:h-[400px] lg:h-full md:mr-24px"
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
