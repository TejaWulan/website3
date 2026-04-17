import React from "react";
import Carousel from "react-multi-carousel";

import Poster1 from "../../assets/img/events/Salinan dari Poster Bootcamp 042024 (11 Website).png";
import Poster2 from "../../assets/img/events/Poster Mobile Dev.png";
import Poster3 from "../../assets/img/events/Poster Mobile Dev part 2 (3).png";
import Poster4 from "../../assets/img/events/Poster Bootcamp 052024.png";
import Poster5 from "../../assets/img/events/Poster Data Science.png";
import Poster6 from "../../assets/img/events/Poster Leadership.png";
import Poster7 from "../../assets/img/events/MicrosoftTeams-image (40) (old Poster).png";
import Poster8 from "../../assets/img/events/MicrosoftTeams-image (38) (old Poster).png";
import Poster9 from "../../assets/img/events/Poster Personal Branding Victoria Wong(old Poster).jpg";
import Poster10 from "../../assets/img/events/Poster Personal Braning Venna(old Poster).jpg";
import Poster11 from "../../assets/img/events/Salinan Draft WCC WIDE Edu x SpeakSync (1080 x 1080 piksel)(old Poster).png";
import Poster12 from "../../assets/img/events/Webinar Pak Fachrie (Generative AI)(old Poster).png";
import Poster13 from "../../assets/img/events/Webinar programming WIDE Edu(old Poster).jpg";
import Poster14 from "../../assets/img/events/poster webinar wide edu it industry giri kuncoro(old Poster).jpeg";

function Events() {
	const posters = [
		Poster1,
		Poster2,
		Poster3,
		Poster4,
		Poster5,
		Poster6,
		Poster7,
		Poster8,
		Poster9,
		Poster10,
		Poster11,
		Poster12,
		Poster13,
		Poster14,
	];

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 2,
		},
		desktop: {
			breakpoint: { max: 7000, min: 1024 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 765, min: 0 },
			items: 1,
		},
	};

	return (
		<div className="bg-gradient-to-l from-emerald-400 to-blue-900 pt-20 md:pt-0">
			<div className="p-5 px-5 card md:p-10 md:px-24 rounded-t-[50px] md:rounded-t-[117px] bg-white">
				<div className="text-center f-1 text-teal-600 text-3xl md:text-[50px] font-extrabold leading-[65.10px]">
					Our Events
				</div>
				<div className="events md:mx-5 flex relative">
					<Carousel
						additionalTransfrom={0}
						arrows={false}
						autoPlay
						autoPlaySpeed={2000}
						customTransition="all 1s ease"
						transitionDuration={3000}
						centerMode={true}
						className="flex items-center mt-5 w-full mx-auto"
						containerClass="container"
						dotListClass=""
						draggable
						focusOnSelect={false}
						infinite
						itemClass=""
						keyBoardControl
						minimumTouchDrag={80}
						pauseOnHover
						renderArrowsWhenDisabled={false}
						renderButtonGroupOutside={true}
						renderDotsOutside={true}
						responsive={responsive}
						rewind={false}
						rewindWithAnimation={false}
						rtl={false}
						shouldResetAutoplay
						showDots={true}
						sliderClass=""
						slidesToSlide={1}
						swipeable
					>
						{posters.map((poster, k) => (
							<img
								key={k}
								src={poster}
								alt=""
								className="rounded-3xl mx-auto w-[80%] h-[80%]"
							/>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
}

export default Events;
