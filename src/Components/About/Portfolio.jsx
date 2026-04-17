import ugm from "../../assets/img/portfolio/Logo UGM.webp";
import kmtk_ugm from "../../assets/img/portfolio/KMTK UGM.webp";
import its from "../../assets/img/portfolio/Logo ITS.webp";
import wikrama from "../../assets/img/portfolio/SMK Wikrama.webp";
import himatek_its from "../../assets/img/portfolio/HIMATEKK ITS.webp";
import mandiri from "../../assets/img/portfolio/Mandiri Bank.png";
import univ_telkom from "../../assets/img/portfolio/Logo Universitas Telkom.webp";
import wide_tech from "../../assets/img/portfolio/Wide Technologies Indonesia.webp";
import Widea from "../../assets/img/portfolio/Widea.png";
import PVS from "../../assets/img/portfolio/PVS.png";
import EsaUnggul from "../../assets/img/portfolio/Esa Ungul.png";
import IDStar from "../../assets/img/portfolio/IDStar.png";
import ITPLN from "../../assets/img/portfolio/ITPLN.png";
import LG from "../../assets/img/portfolio/LG.png";
import UNISSULA from "../../assets/img/portfolio/UNISSULA.png";
import USDY from "../../assets/img/portfolio/Universitas Sanata Dharma Yogja.png";
import UNJ from "../../assets/img/portfolio/UNJ.png";
import UTY from "../../assets/img/portfolio/UTY.png";
import WireHire from "../../assets/img/portfolio/WireHire.png";
import TokioMarine from "../../assets/img/portfolio/Logo Tokio Marine.png";
import RanduWorldHub from "../../assets/img/portfolio/Logo Randu World Hub.png";

import Carousel from "react-multi-carousel";

const portfolioLogo = [
  { src: ugm, link: "https://www.ugm.ac.id" },
  { src: kmtk_ugm, link: "https://chemeng.ugm.ac.id/kmtk" },
  { src: himatek_its },
  { src: its, link: "https://www.its.ac.id" },
  { src: wikrama, link: "https://www.smkwikrama.sch.id" },
  { src: univ_telkom, link: "https://telkomuniversity.ac.id" },
  { src: mandiri, link: "https://www.bankmandiri.co.id" },
  { src: PVS, link: "https://primavista-solusi.com/" }, 
  { src: wide_tech, link: "https://www.widetechnologies.co.id/" },
  { src: Widea, link: "https://www.linkedin.com/in/widea-dagang-nusantara-5a036b258/?originalSubdomain=id" },
  { src: EsaUnggul, link: "https://www.esaunggul.ac.id" },
  { src: IDStar, link: "https://www.idstar.co.id" },
  { src: ITPLN, link: "https://www.itpln.ac.id" },
  { src: LG, link: "https://www.lg.com/id" },
  { src: UNISSULA, link: "https://unissula.ac.id" },
  { src: USDY, link: "https://usd.ac.id" }, // Universitas Sanata Dharma Yogyakarta
  { src: UNJ, link: "https://www.unj.ac.id" },
  { src: UTY, link: "https://uty.ac.id/" }, // Universitas Teknologi Yogyakarta
  { src: WireHire, link: "https://wirehire.co.id/" },
  { src: TokioMarine, link: "https://www.tokiomarine.com/id/en.html" },
  { src: RanduWorldHub, link: "https://www.linkedin.com/company/pt-randu-world-hub/?originalSubdomain=id" },
];

export default function Portfolio() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 7000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 796, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      <h1 className="text-4xl font-1 font-black text-center tracking-tight mb-2 mt-16">
        Our Portfolio
      </h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2500}
        centerMode={false}
        className="mt-5"
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        
      {portfolioLogo.map((image, index) => (
        <a href={image.link} key={index} target="_blank" rel="noopener noreferrer">
        <img
          key={index}
          src={image.src}
          className="mt-5 md:w-[40%] w-[40%] mx-auto md:mx-auto"
        />
        </a>
      ))}
        
      </Carousel>
    </>
  );
}
