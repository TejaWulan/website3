import Image3 from "../../assets/img/company/coaldistribution2.jpg";

export default function HeroSection() {
    return (
        <div
            style={{
                backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0.4) 0%,
            rgba(122,122,122,0.6) 70%,
            rgba(122,122,122,0.9) 100%
          ),
          url(${Image3})
        `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
                flexDirection: "column",
            }}
        >
            <h4 style={{ color: "#2f2f2f" }}>
                PT KALDERA ENERGI NUSANTARA
            </h4>
            <h1>
                From Deep Underground To <br /> Your Factory
            </h1>
        </div>
    );
}