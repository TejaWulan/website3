import React, { useState } from "react";

//TALENT HIRING PARTNERSHIP
import JavaDeveloper from "../../assets/img/product/Backend Developer.png";
import ITSupport from "../../assets/img/product/IT Support.png";
import MobileDev from "../../assets/img/product/Frontend Developer.png";
import DataAnalyst from "../../assets/img/product/Data Engineer.png";

//CORPORATE L&D SOLUTIONS
import SoftwareEngineer from "../../assets/img/product/Software Engineering.png";
import ProfessionalDev from "../../assets/img/product/Professional Development.png";
import BusinessGrowth from "../../assets/img/product/Business Growth.png";

//THE DIGITAL TALENT BOOTCAMP
import PrimaryCourse from "../../assets/img/product/Java Bootcamp.png";
import ElectiveCourse from "../../assets/img/product/ELECTIVE COURSE.png";
import EnrichmentCourse from "../../assets/img/product/ENRICHMENT COURSE.png";

function WhatToLearn() {
	const [selected, setSelected] = useState(0);
	const [selectShow, setSelectShow] = useState(null);

	const datas = [
		//THE DIGITAL TALENT BOOTCAMP
		[
			{
				title: "PRIMARY COURSE",
				description:
					"This foundational course offers students and aspiring professionals a comprehensive curriculum in Java Backend development. Key topics include REST API creation, Spring Boot, and Maven, providing the essential skills to build scalable and robust applications.",
				image: PrimaryCourse,
				learning_items: [
					"Java Programing Language Bootcamp (Basic), ",
					"Java Programing Language Bootcamp (Advanced). ",
				],
				color: "#121f49",
			},
			{
				title: "ELECTIVE COURSE",
				description:
					"This course offers a specialized curriculum in high-demand fields like Mobile Development, Data Science, and Modern Infrastructure. Participants will learn to build responsive apps, manage and analyze data, and streamline software delivery, gaining essential skills for success in these areas.",
				image: ElectiveCourse,
				learning_items: [
					"Mobile Development (Flutter), ", 
					"Database (SQL), ", 
					"Data Science (Python), ", 
					"DevOps, ",
					"Cyber Security.",
				],
				color: "#121f49",
			},
			{
				title: "ENRICHMENT COURSE",
				description:
					"This course equips students and professionals with essential soft skills for career readiness. Key areas include crafting a standout CV, optimizing LinkedIn profiles, mastering Business English, and preparing for job interviews. It also covers Git (from basic to advanced) for version control, AI prompting, and leadership development to effectively lead and inspire teams.",
				image: EnrichmentCourse,
				learning_items: [
					"CV & LinkedIn, Business English, Interview, Git Basic, Git Advanced, AI Prompting, Leadership.",
				],
				color: "#121f49",
			},
		],
		//TALENT HIRING PARTNERSHIP
		[
			{
				title: "Talent-Ready Backend Developer",
				description:
					"Our Backend Developers are adept at creating scalable and efficient applications. They possess strong skills in REST API development, database management, and application integration. With expertise in frameworks like Spring Boot and tools like Postman, they ensure that your backend systems are not only reliable but also optimized for performance.",
				image: JavaDeveloper,
				learning_items: [
					"Backend Developer, API Engineer.",
				],
				color: "#4c8c8c",
			},
			{
				title: "Talent-Ready Frontend Developer",
				description:
					"Frontend Developers from our talent pool excel in designing and implementing user interfaces that are not only visually appealing but also user-friendly. Proficient in technologies like ReactJS and Flutter, they are equipped to build responsive web and mobile applications that enhance user engagement and satisfaction.",
				image: MobileDev,
				learning_items: [
					"Front-end Developer, Website Developer, Unity Developer.",
				],
				color: "#4c8c8c",
			},
			{
				title: "Talent-Ready Data Analyst",
				description:
					"Our Data Analysts are equipped with the skills to gather, process, and interpret complex datasets. Proficient in SQL, data visualization, and analysis, they can provide key insights that drive informed decision-making and business growth.",
				image: DataAnalyst,
				learning_items: [
					"Business Intelligence Analyst, Data Scientist, SQL Quarry, ERD.",
				],
				color: "#4c8c8c",
			},
		],
		//CORPORATE L&D SOLUTIONS
		[
			{
				title: "PROFESSIONAL DEVELOPMENT",
				description:
					"Our Professional Development programs focus on enhancing essential soft skills that foster collaboration, leadership, and personal growth. Whether it’s mastering effective communication, improving leadership qualities, or boosting team dynamics, we tailor our courses to meet your organization’s unique needs. Empower your workforce to excel in every aspect of their roles.",
				image: ProfessionalDev,
				learning_items: [
					"People Development, ",
					"Change Management, ",
					"Leadership, ",
					"Team Dynamic, ",
					"Public Speaking, ",
					"Business English.",
				],
				color: "#25acad",
			},
			{
				title: "SOFTWARE ENGINEERING",
				description:
					"Our Software Engineering training ensures that your team stays ahead of industry trends and technological advancements. Designed for both new and experienced engineers, this program covers key topics like structured software development, engineering principles, and creating high-quality, scalable applications. Equip your tech teams with the expertise needed to build innovative solutions that drive success.",
				image: SoftwareEngineer,
				learning_items: [
					"Java Programming, ",
					"Mobile Development, ",
					"Code Quality, ",
					"Extended Reality (AR, VR), ",
					"Prompt Engineering, ",
					"Cloud and Cybersecurity, ",
					"Microservices, ",
					"Data Analysis. ",
				],
				color: "#25acad",
			},
			{
				title: "BUSINESS GROWTH",
				description:
					"Our Business Growth solutions focus on leveraging data to drive strategic decision-making and measurable results. This program helps your teams gain the skills needed to turn data into actionable insights, fueling sustainable growth for your company. With a focus on analytics, strategic thinking, and innovation, we help businesses stay competitive and forward-thinking.",
				image: BusinessGrowth,
				learning_items: [
					"Project Management, ",
					"Product Management, ",
					"Risk Management, ",
					"Digital Marketing. ",
				],
				color: "#25acad",
			},
		],
	];

	return (
		<>
			<div className="text-center f-1 text-teal-600 text-3xl md:text-[50px] font-extrabold leading-[65.10px]">
				Choose What to Learn
			</div>

			<div className="xl:flex justify-evenly mt-10 hidden">
				<div
					onClick={() => setSelected(0)}
					className={`cursor-pointer flex items-center flex-col text-center f-1 w-[20%] text-[35px] font-bold leading-[42.70px] ${
						selected == 0 ? "text-blue-950" : "text-gray-400 "
					}`}
				>
					DIGITAL TALENT BOOTCAMP
					<span
						className={`bg-blue-950 w-[100%] h-[20px] rounded-full ${
							selected == 0
								? "block transition-all duration-200"
								: "opacity-0 scale-0 transition-all duration-200"
						}`}
					/>
				</div>
				<div
					onClick={() => setSelected(1)}
					className={`cursor-pointer flex items-center flex-col text-center f-1 w-[20%] text-[35px] font-bold leading-[42.70px] ${
						selected == 1 ? "text-[#1a8281]" : "text-gray-400 "
					}`}
				>
					TALENT HIRING PARTNERSHIP
					<span
						className={`bg-[#1a8281] w-[100%] h-[20px] rounded-full ${
							selected == 1
								? "block transition-all duration-200"
								: "opacity-0 scale-0 transition-all duration-200"
						}`}
					/>
				</div>
				<div
					onClick={() => setSelected(2)}
					className={`cursor-pointer flex items-center flex-col text-center f-1 w-[20%] text-[35px] font-bold leading-[42.70px] ${
						selected == 2 ? "text-[#25acad]" : "text-gray-400 "
					}`}
				>
					CORPORATE L&D SOLUTIONS
					<span
						className={`bg-[#25acad] w-[100%] h-[20px] rounded-full ${
							selected == 2
								? "block transition-all duration-200"
								: "opacity-0 scale-0 transition-all duration-200"
						}`}
					/>
				</div>
			</div>

			<div className="hidden xl:block card-content shadow-2xl rounded-[90px] p-5 mt-5">

				<div>
					{datas.map((category, categoryIndex) => (
						<div key={categoryIndex}>
						{VariantListing(datas, selected, categoryIndex)}
						</div>
					))};
				</div>
				
			</div>

			<div className="block xl:hidden xl:mt-0 md:mt-5">
				<div
					onClick={() =>
						setSelectShow(selectShow != null ? (selectShow != 0 ? 0 : null) : 0)
					}
					className="cursor-pointer card flex items-center justify-center shadow-xl w-[100] p-5 rounded-xl border-l-8 border-[#0D2F69]"
				>
					<h1 className="text-left f-1 text-teal-600 text-3xl font-extrabold" style={{ color: "#121f49" }}>
					DIGITAL TALENT BOOTCAMP
					</h1>
					<box-icon name="chevron-down" color="#2C77A3" size="md"></box-icon>
				</div>
				<div
					className={`card flex flex-col items-center justify-center shadow-xl w-[100] p-2 pt-5 rounded-xl rounded-t-0 ${
						selectShow == 0 ? "block" : "hidden"
					}`}
				>
					<div className="flex items-center justify-between mx-2 mb-6">
						<img
							src={datas[0][0].image}
							className="w-[40%] md:w-[30%] mr-2"
							alt=""
						/>
						<div className="desc w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"
								style={{ color: "#121f49" }}
							>
								{datas[0][0].title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[0][0].description}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between mx-2 mb-6">
						<div className="desc text-right w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"
								style={{ color: "#121f49" }}
							>
								{datas[0][1].title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[0][1].description}
							</div>
						</div>
						<img
							src={datas[0][1].image}
							className="w-[40%] md:w-[30%] ml-2"
							alt=""
						/>
					</div>
					<div className="flex items-center justify-between mx-2 mb-6">
						<img
							src={datas[0][2]?.image}
							className="w-[40%] md:w-[30%] mr-2"
							alt=""
						/>
						<div className="desc w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"
								style={{ color: "#121f49" }}
							>
								{datas[0][2]?.title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[0][2]?.description}
							</div>
						</div>
					</div>
				</div>

				<div
					onClick={() =>
						setSelectShow(selectShow != null ? (selectShow != 1 ? 1 : null) : 1)
					}
					className="cursor-pointer card flex items-center justify-center mt-5 shadow-xl w-[100] p-5 rounded-xl border-l-8 border-[#2C77A3]"
				>
					<h1 className="text-left f-1 text-teal-600 text-3xl font-extrabold" style={{ color:  "#2C77A3" }}>
					TALENT HIRING PARTNERSHIP
					</h1>
					<box-icon name="chevron-down" color="#2C77A3" size="md"></box-icon>
				</div>

				<div
					className={`card flex flex-col items-center justify-center shadow-xl w-[100] p-2 pt-5 rounded-xl rounded-t-0 ${
						selectShow == 1 ? "block" : "hidden"
					}`}
				>
					<div className="flex items-center justify-between mx-2 mb-6">
						<img
							src={datas[1][0].image}
							className="w-[40%] md:w-[30%] mr-2" 
							alt=""
						/>
						<div className="desc w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"
								style={{ color:  "#4c8c8c" }}
							>
								{datas[1][0].title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[1][0].description}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between mx-2 mb-6">
						<div className="desc text-right w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"	
								style={{ color:  "#4c8c8c" }}
							>
								{datas[1][1].title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[1][1].description}
							</div>
						</div>
						<img
							src={datas[1][1].image}
							className="w-[40%] md:w-[30%] ml-2"
							alt=""
						/>
					</div>
					<div className="flex items-center justify-between mx-2 mb-6">
						<img
							src={datas[1][2]?.image}
							className="w-[40%] md:w-[30%] mr-2"
							alt=""
						/>
						<div className="desc w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"
								style={{ color:  "#4c8c8c" }}
							>
								{datas[1][2]?.title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[1][2]?.description}
							</div>
						</div>
					</div>
				</div>
				
				<div
					onClick={() =>
						setSelectShow(selectShow != null ? (selectShow != 2 ? 2 : null) : 2)
					}
					className="cursor-pointer card flex items-center justify-center mt-5 shadow-xl w-[100] p-5 rounded-xl border-l-8 border-[#26ACAD]"
				>
					<h1 className="text-left f-1 text-teal-600 text-3xl font-extrabold" style={{ color:  "#25acad" }}>
					CORPORATE L&D SOLUTIONS
					</h1>
					<box-icon name="chevron-down" color="#2C77A3" size="md"></box-icon>
				</div>
				<div
					className={`card flex flex-col items-center justify-center shadow-xl w-[100] p-5 rounded-xl rounded-t-0 ${
						selectShow == 2 ? "block" : "hidden"
					}`}
				>
					<div className="flex items-center justify-between mx-2 mb-6">
						<img
							src={datas[2][0].image}
							className="w-[40%] md:w-[30%] mr-2"
							alt=""
						/>
						<div className="desc w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"
								style={{ color:  "#25acad" }}
							>
								{datas[2][0].title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[2][0].description}
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between mx-2 mb-6">
						<div className="desc text-right w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"
								style={{ color:  "#25acad" }}
							>
								{datas[2][1].title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[2][1].description}
							</div>
						</div>
						<img
							src={datas[2][1].image}
							className="w-[40%] md:w-[30%] ml-2"
							alt=""
						/>
					</div>
					<div className="flex items-center justify-between mx-2 mb-6">
						<img
							src={datas[2][2].image}
							className="w-[40%] md:w-[30%] mr-2"
							alt=""
						/>
						<div className="desc w-[60%]">
							<div className="text-blue-950 text-xl font-bold f-1 leading-[1.75rem] md:leading-[42.70px]"
								style={{ color:  "#25acad" }}	
							>
								{datas[2][2].title}
							</div>
							<div className="text-justify mt-2 text-indigo-950 text-sm font-normal leading-relaxed">
								{datas[2][2].description}
							</div>
						</div>
					</div>
				</div>
			</div>

		</>

	);
}

function VariantListing(datas,selected,categoryIndex) {
	let params = ""; 
	if (categoryIndex % 2 === 0) {
		params = "left";
	  } else {
		params = "right";
	  }
	
	  switch (params) {
		case "left":
		  return (
			<div className="flex px-20 items-center mx-4 mt-4">
					<img src={datas[selected][categoryIndex].image} className="w-80 mr-4" alt="" />
					<div className="desc">
						<div 
							className="text-blue-950 f-1 text-[35px] font-bold leading-[1.75rem] md:leading-[42.70px]"
							style={{ color: datas[selected][categoryIndex].color }}
						>
							{datas[selected][categoryIndex].title}
						</div>
						<div className="text-justify mt-2 text-indigo-950 text-xl font-normal leading-relaxed">
							{datas[selected][categoryIndex].description}
						</div>

						<div className="text-justify text-s text-indigo-950 italic leading-relaxed">
							{datas[selected][categoryIndex].learning_items}
						</div>

					</div>
			</div>
		  );
		  
		case "right":
		  return (
			<div className="flex px-20 items-center mx-5 mb-6 mt-10">
					<div className="desc text-right">
						<div className="text-blue-950 f-1 text-[35px] font-bold leading-[1.75rem] md:leading-[42.70px]"
							style={{ color: datas[selected][categoryIndex].color }}
						>
							{datas[selected][categoryIndex].title}
						</div>
						<div className="text-justify mt-2 text-indigo-950 text-xl font-normal leading-relaxed">
							{datas[selected][categoryIndex].description}
						</div>

						<div className="text-justify text-s text-indigo-950 italic leading-relaxed">
							{datas[selected][categoryIndex].learning_items}
						</div>

					</div>
					<img src={datas[selected][categoryIndex].image} className="w-80 ml-6" alt="" />
				</div>
		  );
	
		default:
		  return null; // Return null or a default JSX element if needed
	  }
}

export default WhatToLearn;
