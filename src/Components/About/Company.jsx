import React from "react";
import Poster1 from "../../assets/img/events/gallery3.jpg";
import { Link } from "react-router-dom";

function CompanyInfo() {
	return (
		<section className="bg-white py-16 px-5 md:px-20">
			<div className="flex flex-col md:flex-row items-center gap-10">

				{/* LEFT IMAGE */}
				<div className="relative w-full md:w-1/2">
					<img
						src={Poster1}
						alt="Company"
						className="rounded-xl w-full object-cover"
					/>

					{/* ORANGE FRAME (optional seperti contoh kamu) */}
					<div className="hidden md:block absolute -right-5 top-10 w-full h-full border-4 border-orange-400 rounded-xl -z-10"></div>
				</div>

				{/* RIGHT TEXT */}
				<div className="w-full md:w-1/2">
					<p className="text-green-600 font-semibold tracking-wide mb-2">
						ABOUT
					</p>

					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
						PT. MILENIAL SUKSES COALINDO
					</h2>

					<p className="text-gray-600 mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>
		</section>
	);
}

export default CompanyInfo;