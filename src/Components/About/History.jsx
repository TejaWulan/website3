import React from "react";
import Poster1 from "../../assets/img/company/1247700294.jpg";

function AboutCompany() {
  return (
    <section 
      className="relative py-20 px-6 md:px-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${Poster1})` }}
    >
      {/* Overlay Hitam Transparan untuk efek Hitam Putih pada Background */}
      <div className="absolute inset-0 bg-black/70 backdrop-grayscale-[100%] z-0"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* LABEL OUR STORY */}
        <div className="inline-block border-l-4 border-[#e67e22] pl-3 mb-4">
          <p className="text-[#e67e22] font-bold tracking-[0.2em] text-sm md:text-base uppercase">
            OUR STORY
          </p>
        </div>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
          PT MILENIAL SUKSES COALINDO
        </h1>

        {/* CONTENT PARAGRAPH */}
        <div className="text-gray-200 space-y-6 leading-relaxed text-sm md:text-lg text-justify md:text-left">
          <p>
            <strong className="text-white">PT Milenial Sukses Coalindo</strong> didirikan dengan semangat untuk membangun perusahaan yang modern, adaptif, dan berorientasi pada kemitraan jangka panjang.
          </p>

          <p>
            Pada tahap awal operasional, perusahaan telah membangun jaringan <span className="text-white italic">supplier</span> dan <span className="text-white italic">buyer</span> serta mulai menjalankan aktivitas perdagangan batubara untuk pasar domestik. Dengan dukungan relasi yang terus berkembang, kami berperan sebagai penghubung antara sumber tambang dan kebutuhan industri.
          </p>

          <p>
            Selain itu, perusahaan juga memperkuat peran dalam rantai distribusi melalui layanan <span className="text-white italic">shipping broker</span>, guna memastikan proses pengiriman berjalan lebih efisien dan terkoordinasi.
          </p>

          <p className="pt-4 border-t border-white/20">
            Kami memahami bahwa kelangsungan operasional pelanggan sangat bergantung pada ketersediaan pasokan energi. Oleh karena itu, kami berkomitmen untuk menjadi mitra yang dapat diandalkan dalam menjaga stabilitas pasokan batubara.
          </p>

          <p className="font-semibold text-white">
            Kepercayaan merupakan fondasi utama dalam setiap hubungan bisnis yang kami bangun dan pertahankan.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;