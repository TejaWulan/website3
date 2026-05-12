import React, { useEffect, useState, useRef } from "react";
import { FaGlobeAsia, FaHandshake, FaTruckLoading, FaShieldAlt } from "react-icons/fa";

const CorporateValues = () => {
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

    const values = [
        {
            id: "1",
            title: "Focus on Domestic Market",
            desc: "Kami berkomitmen untuk mendukung kebutuhan energi industri dalam negeri sebagai prioritas utama.",
            icon: <FaGlobeAsia className="text-4xl text-[#e67e22]" />,
        },
        {
            id: "2",
            title: "Strong Partnership",
            desc: "Kami membangun hubungan kerja sama yang solid dengan supplier dan mitra logistik untuk memastikan kelancaran rantai pasok.",
            icon: <FaHandshake className="text-4xl text-[#e67e22]" />,
        },
        {
            id: "3",
            title: "Reliability & Efficiency",
            desc: "Kami mengutamakan konsistensi, efisiensi, dan ketepatan waktu dalam setiap proses distribusi batubara.",
            icon: <FaTruckLoading className="text-4xl text-[#e67e22]" />,
        },
        {
            id: "4",
            title: "Trust & Commitment",
            desc: "Kepercayaan adalah dasar dari setiap hubungan bisnis kami, yang dijaga melalui komitmen dan kinerja terbaik.",
            icon: <FaShieldAlt className="text-4xl text-[#e67e22]" />,
        },
    ];

    return (
        <section ref={ref} className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* HEADER SECTION */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ease-out 
  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <h4 className="text-[#e67e22] font-black tracking-[0.3em] text-sm uppercase mb-3">
                        PT Milenial Sukses Coalindo
                    </h4>
                    {/* Span garis oranye sudah dihapus di bawah ini */}
                    <h2 className="text-3xl md:text-5xl font-black text-[#2f2f2f] relative inline-block">
                        CORPORATE VALUES
                    </h2>
                </div>

                {/* VALUES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {values.map((item, index) => (
                        <div
                            key={item.id}
                            style={{ transitionDelay: `${index * 200}ms` }}
                            className={`flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 border-b-4 border-gray-100 bg-white hover:border-[#e67e22] hover:shadow-2xl transition-all duration-700
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
                        >
                            {/* ICON CONTAINER */}
                            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gray-50 rounded-2xl border border-gray-100">
                                {item.icon}
                            </div>

                            {/* TEXT CONTAINER */}
                            <div className="text-center sm:text-left">
                                <h3 className="text-xl font-black text-[#424651] mb-3 flex items-center justify-center sm:justify-start gap-3">
                                    <span className="text-[#e67e22] opacity-30 text-3xl italic">0{item.id}</span>
                                    {item.title}
                                </h3>
                                <p className="text-[#7a7a7a] leading-relaxed font-medium text-sm md:text-base">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CorporateValues;