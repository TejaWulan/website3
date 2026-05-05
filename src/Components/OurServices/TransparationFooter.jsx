import React from "react";
import Image3 from "../../assets/img/company/coaldistribution2.jpg";

export default function HeroSection() {
    return (
        <div
            style={{
                // Gradasi dari transparan ke abu-abu solid #7a7a7a
                backgroundImage: `
                  linear-gradient(
                    to bottom,
                    rgba(122, 122, 122, 0) 0%,     
                    rgba(122, 122, 122, 0.4) 50%,  
                    rgba(122, 122, 122, 0.9) 85%,  
                    rgba(122, 122, 122, 1) 100%    
                  ),
                  url(${Image3})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // Height otomatis menyesuaikan di mobile agar tidak terlalu panjang
                minHeight: "500px",
                height: "80vh", 
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                flexDirection: "column",
                fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                padding: "0 20px",
                position: "relative"
            }}
        >
            {/* Nama PT - Responsif size */}
            <h4 style={{
                color: "#e67e22",
                fontSize: "clamp(12px, 3vw, 16px)", 
                fontWeight: "800",
                letterSpacing: "2px",
                marginBottom: "10px",
                textTransform: "uppercase"
            }}>
                PT MILENIAL SUKSES COALINDO
            </h4>

            {/* Judul Utama - Dikecilkan sesuai permintaan */}
            <h1 style={{
                // Ukuran lebih kecil: Mobile ~24px, Desktop ~42px
                fontSize: "clamp(22px, 5vw, 42px)", 
                fontWeight: "900",
                lineHeight: "1.2",
                margin: "0",
                maxWidth: "800px", // Agar teks tidak terlalu lebar di desktop
                letterSpacing: "-0.5px",
                textShadow: "0px 4px 10px rgba(0,0,0,0.3)"
            }}>
                Driven by Youth, <br /> 
                Strong Commitment, <br /> 
                Build by Trust and Best Performance
            </h1>

            {/* Space tambahan di bawah untuk efek fade yang luas (tempat logo) */}
            <div style={{ height: "60px" }}></div>
        </div>
    );
}