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
          maxWidth: '1000px', 
          margin: '0 auto', 
          padding: '0 1.5rem', 
        }}
      >
        
        {/* CONTAINER GAMBAR */}
        <div 
          style={{
            width: '100%',
            overflow: 'hidden',
            borderRadius: '1rem', 
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            backgroundColor: 'white',
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
              transition: 'all 0.3s ease-in-out',
            }}
          />
        </div>

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