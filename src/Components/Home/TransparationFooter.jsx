import React from "react";
import Image3 from "../../assets/img/company/coaldistribution2.jpg";

export default function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.4) 0%,
            rgba(0,0,0,0.5) 70%,
            rgba(0,0,0,0.7) 100%
          ),
          url(${Image3})
        `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "600px", // Ditambah sedikit tingginya agar lebih proporsional
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                flexDirection: "column",
                fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif", // Font modern mirip gambar
                padding: "0 20px"
            }}
        >
            {/* Nama PT dengan warna Orange #e67e22 */}
            <h4 style={{
                color: "#e67e22",
                fontSize: "16px",
                fontWeight: "800",
                letterSpacing: "1px",
                marginBottom: "10px",
                textTransform: "uppercase"
            }}>
                PT KALDERA ENERGI NUSANTARA
            </h4>

            {/* Judul Utama dengan gaya tebal mirip gambar */}
            <h1 style={{
                fontSize: "clamp(32px, 8vw, 64px)", // Responsif: mengecil di HP, besar di Desktop
                fontWeight: "900",
                lineHeight: "1.1",
                margin: "0",
                letterSpacing: "-1px", // Memberikan kesan padat seperti di gambar
                textShadow: "2px 4px 10px rgba(0,0,0,0.3)" // Memberikan kedalaman agar teks terbaca jelas
            }}>
                From Deep <br /> Underground To Your <br /> Factory
            </h1>
        </div>
    );
}