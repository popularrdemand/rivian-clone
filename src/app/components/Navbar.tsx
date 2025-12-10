"use client"; // Hook kullanacağımız için İstemci Bileşeni olarak işaretliyoruz

import { useState, useEffect } from 'react';

export default function Navbar() {
  // Kaydırma (scroll) durumunu tutar
  const [scrolled, setScrolled] = useState(false);

  // Kaydırma olayını dinleyen fonksiyon
  const handleScroll = () => {
    // Sayfanın dikey kaydırma konumu (scrollTop) 100 pikselden büyükse true yapar
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Bileşen yüklendiğinde ve kaldırıldığında çalışan hook
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Bileşen kaldırıldığında olay dinleyiciyi temizle
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Sadece bir kez çalışır

  return (
    // scrolled state'ine göre sınıfları dinamik olarak belirliyoruz
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
        ${scrolled ? 'bg-gray-900 shadow-lg text-white' : 'bg-transparent text-white'}`
      }
    >
      <div className="flex justify-between items-center h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sol Logo */}
        <div className="text-xl font-extrabold tracking-widest cursor-pointer">
          RIVIAN
        </div>

        {/* Orta Navigasyon Linkleri */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="/r1s" className="hover:text-gray-300">R1S</a>
          <a href="/r1t" className="hover:text-gray-300">R1T</a>
          <a href="/araclar" className="hover:text-gray-300">Araçlar</a>
          <a href="/ag" className="hover:text-gray-300">Ağ</a>
        </nav>

        {/* Sağ Butonlar */}
        <div className="flex space-x-4 text-sm font-medium">
          <a 
            href="/magaza" 
            className={`px-4 py-2 rounded-full border ${scrolled ? 'border-white hover:bg-white hover:text-gray-900' : 'border-transparent hover:bg-white/10'}`}
          >
            Mağaza
          </a>
          <a 
            href="/girisyap" 
            className="px-4 py-2 rounded-full border border-white bg-white text-gray-900 hover:bg-gray-300 transition duration-300"
          >
            Giriş Yap
          </a>
        </div>
      </div>
    </header>
  );
}