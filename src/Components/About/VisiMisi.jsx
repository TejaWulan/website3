import React, { useEffect, useState, useRef } from "react";
import Poster1 from "../../assets/img/company/Picture1.png";

function VisionMission() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Memicu animasi saat elemen masuk ke viewport
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { 
                threshold: 0.15, // Muncul setelah 15% bagian section terlihat
                rootMargin: "0px 0px -50px 0px" 
            }
        );

        if (ref.current) observer.observe(ref.current);
        
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <section
            ref={ref}
            className="relative bg-gray-50 mt-16 md:mt-0 py-16 md:py-24 px-6 md:px-16 lg:px-32 overflow-hidden"
        >
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24 max-w-7xl mx-auto">

                {/* IMAGE SECTION - Sekarang muncul dari Bawah ke Atas */}
                <div 
                    className={`relative w-full md:w-5/12 flex justify-center md:order-2 transition-all duration-1000 ease-out
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                >
                    <div className="relative max-w-[250px] sm:max-w-[280px] lg:max-w-[340px] w-[80%] md:w-full">
                        <img
                            src={Poster1}
                            alt="Vision Mission"
                            className="rounded-lg w-full h-auto object-contain relative z-10 shadow-md"
                        />
                        {/* BORDER DEKORASI */}
                        <div
                            className="absolute -left-3 -bottom-3 md:-left-4 md:-bottom-4 w-full h-full border-[2px] md:border-[3px] rounded-lg -z-0"
                            style={{ borderColor: "#e67e22" }}
                        ></div>
                    </div>
                </div>

                {/* TEXT CONTENT - Tetap muncul dari Kiri ke Kanan */}
                <div 
                    className={`w-full md:w-7/12 text-left mt-10 md:mt-0 md:order-1 transition-all duration-1000 delay-300 ease-out
                    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                >
                    <div className="inline-block border-l-4 border-[#e67e22] pl-3 mb-4">
                        <p className="text-[#424651] font-bold tracking-widest text-[10px] md:text-xs uppercase">
                            VISION & MISSION
                        </p>
                    </div>

                    <div className="mb-10">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f2f2f] mb-4">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-[15px] md:text-base italic border-l-2 border-gray-300 pl-4 py-1">
                            "Menjadi perusahaan perdagangan batubara yang terpercaya, kompetitif, dan berkelanjutan dalam memenuhi kebutuhan energi domestik Indonesia."
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f2f2f] mb-4">
                            Our Mission
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Menyediakan pasokan batubara yang stabil dan sesuai dengan spesifikasi kebutuhan pelanggan",
                                "Memberikan solusi logistik yang efisien melalui layanan shipping broker",
                                "Mengembangkan hubungan kerja sama jangka panjang yang saling menguntungkan",
                                "Menjaga kualitas layanan melalui profesionalisme dan responsivitas tinggi"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base font-medium">
                                    <div className="mt-1.5 bg-[#e67e22] rounded-full min-w-[10px] h-[10px] flex-shrink-0"></div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default VisionMission;