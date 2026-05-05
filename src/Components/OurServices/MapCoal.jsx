import React from 'react';
import CoalDeliveryProcessImage from "../../assets/img/ourservices/coalmap.png";

function CoalDeliveryProcess() {
  return (
    <section 
      style={{
        backgroundColor: '#f9fafb', // Warna background section ringan agar gambar menonjol
        padding: '2rem 0',          // Memberikan padding atas dan bawah agar tidak mentok
      }}
    >
      <div 
        style={{
          // KONTROL LEBAR UTAMA
          maxWidth: '1200px',        // Lebar maksimal di layar desktop besar agar tidak terlalu melar
          margin: '0 auto',          // Membuat konten rata tengah
          padding: '0 1rem',         // Padding kiri-kanan untuk mobile agar gambar tidak mepet layar
          
          // RESPONSIVE LAYOUT
          // Di mobile/layar kecil (default): display block
          // Di layar menengah ke atas (misal min-width: 768px untuk 'md'):
          '@media (min-width: 768px)': {
            padding: '0 2rem',       // Tambah padding untuk layar lebih besar
          }
        }}
      >
        
        {/* CONTAINER JUDUL (Opsional jika ingin judul diluar gambar) */}
        {/* <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>Coal Delivery Process</h2>
        </div> */}

        {/* CONTAINER GAMBAR (Untuk kontrol ukuran penuh) */}
        <div 
          style={{
            width: '100%',            // Mengambil lebar penuh container parent
            overflow: 'hidden',       // Mencegah gambar meluap jika ada efek rounded
            borderRadius: '0.75rem',  // Memberikan sedikit rounded corners agar estetik
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Shadow tipis agar gambar terlihat 'mengambang'
            backgroundColor: 'white', // Warna background container putih jika gambar memiliki transparansi
            padding: '1rem',          // Padding dalam container agar ada space antara border dan gambar
          }}
        >
          {/* TAG GAMBAR */}
          <img 
            src={CoalDeliveryProcessImage} 
            alt="Coal Delivery Process Diagram"
            style={{
              width: '100%',          // Gambar mengambil 100% lebar container parent (FULL di mobile/tablet)
              height: 'auto',         // Menjaga proporsi aspek rasio gambar agar tidak distorsi
              display: 'block',       // Menghilangkan spasi aneh di bawah gambar
              
            }}
          />
        </div>
        
      </div>
    </section>
  );
}

export default CoalDeliveryProcess;