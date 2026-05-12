import React from 'react';
import CoalDeliveryProcessImage from "../../assets/img/ourservices/coalmap2revisi.png";

function CoalDeliveryProcess() {
  return (
    <section 
      style={{
        backgroundColor: '#f9fafb', 
        padding: '3rem 0', // Menambah padding atas bawah agar lebih lega
      }}
    >
      <div 
        style={{
          // KONTROL LEBAR: Diperkecil dari 1200px ke 1000px agar gambar tidak terlalu raksasa
          maxWidth: '1000px', 
          margin: '0 auto', 
          // Space kiri kanan agar tidak mentok layar (terutama di mobile)
          padding: '0 1.5rem', 
        }}
      >
        
        {/* CONTAINER GAMBAR */}
        <div 
          style={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: '1rem', // Membuat sudut lebih halus
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            backgroundColor: 'white',
            // Memberikan padding putih di sekeliling gambar agar terlihat seperti bingkai
            padding: '1.5rem', 
          }}
        >
          <img 
            src={CoalDeliveryProcessImage} 
            alt="Coal Delivery Process Diagram"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              // Menambahkan transisi halus jika ada perubahan ukuran layar
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </div>

        {/* Optional: Caption singkat di bawah gambar */}
        <p style={{ 
          textAlign: 'center', 
          marginTop: '1.5rem', 
          color: '#6b7280', 
          fontSize: '0.875rem',
          fontWeight: '500' 
        }}>
        </p>
        
      </div>
    </section>
  );
}

export default CoalDeliveryProcess;