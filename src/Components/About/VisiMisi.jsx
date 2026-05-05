import React, { useEffect, useState, useRef } from "react";
import Poster1 from "../../assets/img/company/Picture1.png";

function VisionMission() {
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
            className={`relative bg-gray-50 py-12 md:py-16 px-6 md:px-16 lg:px-24 transition-all duration-1000
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-14 max-w-6xl mx-auto">

                {/* TEXT CONTENT (Kiri di Desktop) */}
                <div className="w-full md:w-7/12 text-left">
                    <div className="inline-block border-l-4 border-[#e67e22] pl-3 mb-2">
                        <p className="text-[#424651] font-bold tracking-widest text-[10px] md:text-xs uppercase">
                            VISION & MISSION
                        </p>
                    </div>

                    {/* VISION */}
                    <div className="mb-8">
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#2f2f2f] mb-3">
                            Our Vision
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                            "Menjadi perusahaan perdagangan batubara yang terpercaya, kompetitif, dan berkelanjutan dalam memenuhi kebutuhan energi domestik Indonesia."
                        </p>
                    </div>

                    {/* MISSION */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-extrabold text-[#2f2f2f] mb-3">
                            Our Mission
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Menyediakan pasokan batubara yang stabil dan sesuai dengan spesifikasi kebutuhan pelanggan",
                                "Memberikan solusi logistik yang efisien melalui layanan shipping broker",
                                "Mengembangkan hubungan kerja sama jangka panjang yang saling menguntungkan",
                                "Menjaga kualitas layanan melalui profesionalisme dan responsivitas tinggi"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                                    <span className="text-[#e67e22] mt-1 font-bold">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* IMAGE (Kanan di Desktop) */}
                <div className="relative w-full md:w-5/12 flex justify-center md:justify-end">
                    <div className="relative max-w-[260px] sm:max-w-[300px] md:max-w-none w-[70%] md:w-full">
                        <img
                            src={Poster1}
                            alt="Vision Mission"
                            className="rounded-lg w-full object-contain relative z-10 shadow-md"
                        />

                        {/* BORDER DEKORASI - Posisi dibalik ke kiri bawah */}
                        <div
                            className="hidden md:block absolute -left-4 -bottom-4 w-full h-full border-[3px] rounded-lg -z-10"
                            style={{ borderColor: "#e67e22" }}
                        ></div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default VisionMission;