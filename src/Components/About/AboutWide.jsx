export default function AboutWide() {
	return (
		<>
			<div className="bg-gradient-to-l from-emerald-400 to-blue-900 pt-20 md:pt-0">
				<div className="p-5 card md:p-10 px-5 md:px-24 rounded-t-[50px] md:rounded-t-[117px] bg-white">
					<div className="flex flex-col md:flex-row mt-10">
						<div className="flex flex-col items-center md:w-full mt-5 md:mt-0 mb-9">
							<h4 className="text-[35px] md:text-4xl f-1 c-2 text-bold font-extrabold text-center">
								Our Vision
							</h4>
							<div className="w-full h-full p-5 flex justify-start flex-col md:justify-center">
								<h4 className="text-lg md:text-3xl f-1 text-black text-center">
									Developing young digital talents across Indonesia
								</h4>
							</div>
						</div>
						<div className="flex flex-col items-center md:w-full mt-5 md:mt-0">
							<h4 className="text-[35px] md:text-4xl f-1 c-2 text-bold font-extrabold text-center">
								Our Mission
							</h4>
							<div className="w-full h-full p-5 flex justify-center flex-col">
								<ul className="list-none">
									<li className="f-1 text-lg md:text-2xl text-black mb-4 md:pl-20">
										<h4 className="text-justify">
											<span className="font-semibold mr-4">1.</span> Empowerment
											through education
										</h4>
									</li>
									<li className="f-1 text-lg md:text-2xl text-black mb-4 md:pl-20">
										<h4 className="text-justify">
											<span className="font-semibold mr-4">2.</span> Tailored
											skill enhancement
										</h4>
									</li>
									<li className="f-1 text-lg md:text-2xl text-black mb-4 md:pl-20">
										<h4 className="text-justify">
											<span className="font-semibold mr-4">3.</span> Collaborative industry integration
										</h4>
									</li>
									<li className="f-1 text-lg md:text-2xl text-black md:pl-20">
										<h4 className="text-justify">
											<span className="font-semibold mr-4">4.</span> Nationwide
											reach and accessibility
										</h4>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
