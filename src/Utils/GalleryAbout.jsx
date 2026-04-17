import React from "react";
import Carousel from "react-multi-carousel";

//Other or free photos
import Free01 from "../../src/assets/img/gallery/Bebas/IMG_20230825_151156_371.jpg";
import Free02 from "../../src/assets/img/gallery/Bebas/IMG_20230825_151205_492.jpg";
import Free03 from "../../src/assets/img/gallery/Bebas/WhatsApp Image 2024-08-29 at 16.29.30 (4).jpeg";
import Free04 from "../../src/assets/img/gallery/Bebas/photo_2023-10-05_09-45-17.jpg";
import Free05 from "../../src/assets/img/gallery/Bebas/photo_2023-10-19_15-28-10 (2) (1).jpg";

//Appreciation Charter Photos
import Charter01 from "../../src/assets/img/gallery/Piagam/WhatsApp Image 2024-08-29 at 16.29.28.jpeg";
import Charter02 from "../../src/assets/img/gallery/Piagam/photo_2023-06-14_08-23-21 (1).jpg";
import Charter03 from "../../src/assets/img/gallery/Piagam/photo_2023-10-05_09-46-14 (1).jpg";
import Charter04 from "../../src/assets/img/gallery/Piagam/photo_2023-10-19_15-28-38.jpg";

//Training Gallery Photos
import gallery01 from "../../src/assets/img/gallery/Training/Day 1 20221102_155946.jpg";
import gallery02 from "../../src/assets/img/gallery/Training/Day 3 20221104_111308.jpg";
// import gallery03 from "../../src/assets/img/gallery/Training/Day 1 20221102_155946.jpg";
import gallery04 from "../../src/assets/img/gallery/Training/IMG_20230127_151219.jpg";
import gallery05 from "../../src/assets/img/gallery/Training/IMG_20230127_161714.jpg";
import gallery06 from "../../src/assets/img/gallery/Training/MARAGA221018003 (1).jpg";
import gallery07 from "../../src/assets/img/gallery/Training/MARMTX220816007 (3).jpeg";
import gallery08 from "../../src/assets/img/gallery/Training/MicrosoftTeams-image (62) (2).png"; 
import gallery09 from "../../src/assets/img/gallery/Training/MicrosoftTeams-image (65) (1).png";
import gallery010 from "../../src/assets/img/gallery/Training/WhatsApp Image 2024-08-29 at 16.29.32 (1).jpeg";
import gallery011 from "../../src/assets/img/gallery/Training/WhatsApp Image 2024-08-29 at 16.29.32.jpeg";
import gallery012 from "../../src/assets/img/gallery/Training/WhatsApp Image 2024-08-29 at 16.31.34 (1).jpeg";
import gallery013 from "../../src/assets/img/gallery/Training/WhatsApp Image 2024-08-29 at 16.31.37.jpeg"; 
import gallery014 from "../../src/assets/img/gallery/Training/WhatsApp Image 2024-08-29 at 16.36.24.jpeg";
import gallery015 from "../../src/assets/img/gallery/Training/photo_2023-10-05_09-46-21 (1).jpg";
import gallery016 from "../../src/assets/img/gallery/Training/photo_2023-10-19_15-28-07 (1).jpg";
import gallery017 from "../../src/assets/img/gallery/Training/photo_2023-10-19_15-28-13.jpg";
import gallery018 from "../../src/assets/img/gallery/Training/photo_2023-10-19_15-28-14.jpg"; 

export default function GalleryAbout(props) {
  const responsive_gallery = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 7000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 796, min: 0 },
      items: 1,
    },
  };

  //for Bootcamp photos
  const images1 = [
    {image:gallery01,},
    {image:gallery02,},
    // {image:gallery03,},
    {image:gallery04,},
    {image:gallery05,},
    {image:gallery06,},
    {image:gallery07,},
    {image:gallery08,},
    {image:gallery09,},
    {image:gallery010,},
    {image:gallery011,},
    {image:gallery012,},
    {image:gallery013,},
    {image:gallery014,},
    {image:gallery015,},
    {image:gallery016,},
    {image:gallery017,},
    {image:gallery018,},
  ];
//for Appreciations charter photos
  const images2 = [
    {image: Charter01,},
    {image: Charter02,},
    {image: Charter03,},
    {image: Charter04,},
  ];
  //for others photos
  const images3 = [
    {image: Free01,},
    {image: Free02,},
    {image: Free03,},
    {image: Free04,},
    {image: Free05,},
  ];

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={props.pos == 1 ? 5300 : props.pos == 2 ? 3100 : 4300}
      centerMode={false}
      className="flex items-center  h-full w-[100%]"
      containerClass="container"
      dotListClass=""
      draggable={false}
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive_gallery}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      pauseOnHover={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable={false}
    >
      {props.pos == 1 &&(
        images1.slice(0, images1.length - 1).map((p, i) => (
          <div className="p-5" key={i}>
            <img
              src={p.image}
              alt=""
              className={`rounded-3xl w-full h-full ${
                props.size == "small" ? "aspect-video" : "aspect-small"
              } object-cover shadow-lg`}
            />
          </div>
        ))
      )}
      {props.pos == 2 &&(
        images2.slice(0, images2.length - 1).map((p, i) => (
          <div className="p-5" key={i}>
            <img
              src={p.image}
              alt=""
              className={`rounded-3xl w-full h-full ${
                props.size == "small" ? "aspect-video" : "aspect-small"
              } object-cover shadow-lg`}
            />
          </div>
        ))
      )}
      {props.pos == 3 &&(
        images3.slice(0, images3.length - 1).map((p, i) => (
          <div className="p-5" key={i}>
            <img
              src={p.image}
              alt=""
              className={`rounded-3xl w-full h-full ${
                props.size == "small" ? "aspect-video" : "aspect-small"
              } object-cover shadow-lg`}
            />
          </div>
        ))
      )}
      
    </Carousel>
  );
}
