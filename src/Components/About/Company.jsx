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
            /* mt-20 pada mobile untuk memastikan tidak tertutup navbar, py-10 untuk spasi putih yang pas */
            className={`relative bg-white mt-20 md:mt-16 py-10 md:py-12 px-6 md:px-16 lg:px-24 transition-all duration-1000
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 max-w-6xl mx-auto">

                {/* IMAGE CONTAINER */}
                <div className="relative w-full md:w-5/12 flex justify-center md:justify-start">
                    {/* max-w-[280px] pada mobile agar gambar tidak memenuhi layar secara vertikal (mencegah kepotong) */}
                    <div className="relative max-w-[280px] sm:max-w-[320px] md:max-w-none w-[80%] md:w-full">
                        <img
                            src={Poster1}
                            alt="Company Info"
                            className="rounded-lg w-full h-auto object-cover relative z-10 shadow-md"
                        />

                        {/* BORDER DEKORASI - Muncul di semua device tapi lebih tipis di mobile */}
                        <div
                            className="absolute -right-3 -bottom-3 md:-right-4 md:-bottom-4 w-full h-full border-[2px] md:border-[3px] rounded-lg -z-10"
                            style={{ borderColor: "#e67e22" }}
                        ></div>
                    </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full md:w-7/12 text-left mt-4 md:mt-0">
                    <div className="inline-block border-l-4 border-[#e67e22] pl-3 mb-3">
                        <p className="text-[#424651] font-bold tracking-widest text-[11px] md:text-xs uppercase">
                            ABOUT
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2f2f2f] leading-tight mb-4">
                        PT Milenial Sukses Coalindo
                    </h2>

                    <div className="text-gray-600 leading-relaxed text-sm md:text-base space-y-4">
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