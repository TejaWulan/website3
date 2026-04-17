import instagram from "../../assets/img/icons/instagram.png";
import linkdin from "../../assets/img/icons/linkdin.png";
import youtube from "../../assets/img/icons/youtube.png";

export default function ContactUs() {
  return (
    <>
      <h1 className="text-4xl font-1 font-black text-center tracking-tight mb-2 mt-16">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-[100%] md:w-[60%] aspect-video p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3960916541746!2d106.81866731163143!3d-6.211376693750567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6958c82097f%3A0xf337205da16f9eb2!2sPT%20Wide%20Technologies%20Indonesia!5e0!3m2!1sid!2sid!4v1689324587509!5m2!1sid!2sid"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-[100%] md:w-[40%]">
          <div className="p-5">
            <div className="mb-7">
              <span className="c-2 font-bold text-2xl f-1">
                Location: &nbsp;
              </span>
              <p className="text-[#0D2f69] font-1 font-normal md:text-2xl mt-2">
                International Financial Centre, Lantai 19, Jl. Jend. Sudirman
                Kav. 22-23, Jakarta 12920, Indonesia. 
              </p>
            </div>
            <div className="mb-7">
              <span className="c-2 font-bold text-2xl f-1">
                Operating hours: &nbsp;
              </span>
              <p className="font-1 font-normal md:text-2xl mt-2">
                Monday to Friday
                <br />
                8.30AM to 5.30PM
              </p>
            </div>
            <div className="mb-7">
              <span className="c-2 font-bold text-2xl f-1">
                Contact: &nbsp;
              </span>
              <div id="whatsapp">
                <a className="font-1 font-normal md:text-2xl mt-2">Whatsapp</a>
                <a
                  className="font-1 font-normal md:text-2xl mt-2"
                  href="https://bit.ly/WAChatWIDEEdu"
                  aria-label="button"
                >
                  : +62 822 1111 2676 
                </a>
              </div>
              <div id="email">
                <a className="font-1 font-normal md:text-2xl mt-2">Email</a>
                <a
                  className="font-1 font-normal md:text-2xl mt-2"
                  href="mailto:media@wideedu.co.id"
                  aria-label="button"
                >
                  : info@wideedu.co.id 
                </a>
              </div>
            </div>
            <div className="flex mt-5">
              <a
                href="https://www.instagram.com/wideedu.id/"
                className="mr-1 md:mr-2 w-[10%] md:w-auto"
              >
                <img src={instagram} alt="" />
              </a>
              <a
                href="https://id.linkedin.com/company/wideedu-id "
                className="mx-1 md:mx-2 w-[10%] md:w-auto"
              >
                <img src={linkdin} alt="" />
              </a>
              <a
                href="https://www.youtube.com/@wideedu"
                className="mx-1 md:mx-2 w-[10%] md:w-auto"
              >
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
