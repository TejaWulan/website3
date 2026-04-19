import React from "react";
import Poster1 from "../../assets/img/events/gallery1.png";
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
						COMPANY INFORMATION
					</p>

					<h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
						Leading and Trusted Coal Supplier in Indonesia
					</h2>

					<p className="text-gray-600 mb-6">
						PT lorem ipsum lorem ipsum PT lorem ipsum lorem ipsum PT lorem ipsum lorem ipsum PT lorem ipsum lorem ipsum PT lorem ipsum lorem ipsum
					</p>

					{/* LIST */}
					<div className="space-y-3 mb-6">
						<div className="flex items-center gap-3">
							<div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
								✓
							</div>
							<p className="text-gray-700">
								Good quality coal with competitive price
							</p>
						</div>

						<div className="flex items-center gap-3">
							<div className="bg-orange-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
								✓
							</div>
							<p className="text-gray-700">
								Focusing to supply for domestic market
							</p>
						</div>
					</div>

					<Link to="/about">
						<button className="border border-gray-400 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition">
							Read More
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default CompanyInfo;