import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Pastikan sudah install react-icons

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk memantau posisi scroll
  const toggleVisibility = () => {
    // Tombol muncul jika scroll lebih dari 300px
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk kembali ke atas 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[999]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#e67e22] hover:bg-[#d35400] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;