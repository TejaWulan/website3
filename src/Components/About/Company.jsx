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
            { threshold: 0.15 } // Trigger sedikit lebih cepat saat scroll
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <section
            ref={ref}
            // px-6 hingga lg:px-32 memastikan ada space kiri kanan yang cukup luas
            className="relative bg-white mt-20 md:mt-16 py-16 md:py-24 px-6 md:px-16 lg:px-32 overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24 max-w-7xl mx-auto">

                {/* IMAGE CONTAINER - Animasi Fade In dari Bawah ke Atas */}
                <div 
                    className={`relative w-full md:w-5/12 flex justify-center transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                >
                    {/* max-w-[340px] agar gambar tidak terlalu raksasa di layar desktop */}
                    <div className="relative max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] w-[80%] md:w-full">
                        <img
                            src={Poster1}
                            alt="Company Info"
                            className="rounded-lg w-full h-auto object-cover relative z-10 shadow-lg"
                        />

                        {/* BORDER DEKORASI */}
                        <div
                            className="absolute -right-3 -bottom-3 md:-right-5 md:-bottom-5 w-full h-full border-[2px] md:border-[3px] rounded-lg -z-0"
                            style={{ borderColor: "#e67e22" }}
                        ></div>
                    </div>
                </div>

                {/* TEXT CONTENT - Animasi Fade In dari Kanan ke Kiri */}
                <div 
                    className={`w-full md:w-7/12 text-left mt-8 md:mt-0 transition-all duration-1000 delay-300 ease-out
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
                >
                    <div className="inline-block border-l-4 border-[#e67e22] pl-3 mb-4">
                        <p className="text-[#424651] font-black tracking-widest text-[11px] md:text-xs uppercase">
                            ABOUT US
                        </p>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2f2f2f] leading-tight mb-6">
                        PT Milenial Sukses Coalindo
                    </h2>

                    <div className="text-gray-600 leading-relaxed text-[15px] md:text-base space-y-5 font-medium">
                        <p>
                            <strong className="text-[#424651] font-extrabold">PT Milenial Sukses Coalindo</strong> adalah perusahaan yang bergerak di bidang perdagangan 
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