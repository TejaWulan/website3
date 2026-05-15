import React from "react";
import Image3 from "../../assets/img/company/coaldistribution3.jpg";

export default function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `
                  linear-gradient(
                    to bottom,
                    rgba(122, 122, 122, 0.2) 0%,     
                    rgba(122, 122, 122, 0.6) 50%,  
                    rgba(122, 122, 122, 1) 100%    
                  ),
                  url(${Image3})
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",

                minHeight: "300px", // Tinggi 
                height: "45vh",     // Hanya mengambil 45% tinggi layar 

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                flexDirection: "column",
                fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                padding: "20px", 
                position: "relative",
                overflow: "hidden"
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
                {/* Nama PT */}
                <h4 style={{
                    color: "#e67e22",
                    fontSize: "clamp(11px, 2.5vw, 14px)",
                    fontWeight: "800",
                    letterSpacing: "2px",
                    marginBottom: "8px",
                    textTransform: "uppercase"
                }}>
                    PT MILENIAL SUKSES COALINDO
                </h4>

                {/* Slogan Utama */}
                <h1 style={{
                    fontSize: "clamp(18px, 4vw, 36px)", 
                    fontWeight: "900",
                    lineHeight: "1.3",
                    margin: "0 auto",
                    maxWidth: "900px",
                    letterSpacing: "-0.5px",
                    textShadow: "0px 2px 8px rgba(0,0,0,0.5)"
                }}>
                    Driven by Youth,  Strong Commitment <br className="hidden md:block" />
                    Build by Trust and Best Performance
                </h1>
            </div>
        </div>
    );
}