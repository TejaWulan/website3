import React, { useEffect, useState, useRef } from "react";
import Poster1 from "../../assets/img/company/truck.jpg";

function CompanyInfo() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <section
            ref={ref}
            /* mt-12 cukup untuk memberi jarak dari navbar tanpa terlalu lowong */
            className={`relative bg-white mt-12 md:mt-16 py-8 md:py-12 px-6 md:px-16 lg:px-24 transition-all duration-1000
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 max-w-6xl mx-auto">

                {/* IMAGE - Ukuran lebih proposional */}
                <div className="relative w-full md:w-5/12 flex justify-center md:justify-start">
                    <div className="relative max-w-[260px] sm:max-w-[300px] md:max-w-none w-[70%] md:w-full">
                        <img
                            src={Poster1}
                            alt="Company"
                            className="rounded-lg w-full object-contain relative z-10 shadow-md"
                        />

                        {/* BORDER DEKORASI - Lebih tipis dan rapat */}
                        <div
                            className="hidden md:block absolute -right-4 -bottom-4 w-full h-full border-[3px] rounded-lg -z-10"
                            style={{ borderColor: "#e67e22" }}
                        ></div>
                    </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full md:w-7/12 text-left">
                    <div className="inline-block border-l-4 border-[#e67e22] pl-3 mb-2">
                        <p className="text-[#424651] font-bold tracking-widest text-[10px] md:text-xs uppercase">
                            ABOUT
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2f2f2f] leading-tight mb-4">
                        PT Milenial Sukses Coalindo
                    </h2>

                    <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-3">
                        <p>
                            <strong className="text-[#424651]">PT Milenial Sukses Coalindo</strong> adalah perusahaan yang bergerak di bidang perdagangan 
                            batubara dan jasa shipping broker, yang berfokus pada pemenuhan kebutuhan energi untuk sektor industri dan pembangkit listrik di Indonesia.
                        </p>
                        <p>
                            Kami hadir sebagai mitra yang adaptif dan responsif dalam menghadapi dinamika pasar, dengan mengedepankan efisiensi, keandalan, dan profesionalisme dalam setiap proses bisnis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CompanyInfo;