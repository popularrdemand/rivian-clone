"use client";

import { useState } from 'react';
import Image from 'next/image';

// Rivian Hero Görsellerinin Veri Yapısı
const heroSlides = [
  {
    src: '/images/hero.avif', // 01.avif
    alt: 'R1S En Yeni Macera',
    title: 'En Yeni Macera',
    subtitle: 'R1S',
    ctaText: 'Sipariş Ver',
  },
  {
    src: '/images/performance.avif', // 02.avif
    alt: 'R1S 660 km Menzil',
    title: "660 km'ye Kadar",
    subtitle: 'MENZİL',
    ctaText: 'Detayları Gör',
  },
  {
    src: '/images/winter.avif', // 03.avif adını böyle varsayalım
    alt: 'R1S Kış Testi',
    title: 'Her Türlü Hava',
    subtitle: 'KIŞ PERFORMANSI',
    ctaText: 'Keşfet',
  },
];

export default function HeroSlider() {
  // Aktif görselin indeksini tutuyoruz
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = heroSlides.length;

  const nextSlide = () => {
    // Son görseldeysek, başa (0'a) dön
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    // İlk görseldeysek, sona dön
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="min-h-screen relative overflow-hidden">
      
      {/* 1. Görsel (Transition ile geçişi sağlayan yapı) */}
      <Image
        key={activeSlide.src} // Key değişince React yeniden render eder (geçişi tetikler)
        src={activeSlide.src}
        alt={activeSlide.alt}
        priority 
        fill 
        className="object-cover transition-opacity duration-1000 ease-in-out" // Geçiş efekti
      />

      {/* 2. İçerik ve Butonlar (Hepsi Mutlak Konumda) */}
      <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center pt-20">
        <div className="text-center text-white">
          <h2 className="text-sm font-medium tracking-widest uppercase">
            {activeSlide.subtitle}
          </h2>
          <h1 className="text-7xl font-extrabold mt-4 mb-8">
            {activeSlide.title}
          </h1>
          <a
            href="/configure"
            className="bg-white text-black font-semibold tracking-wide uppercase px-8 py-3 rounded-full hover:bg-gray-200 transition duration-300"
          >
            {activeSlide.ctaText}
          </a>
        </div>
      </div>

      {/* 3. Navigasyon Okları (Sağ ve Sol) */}
      <div className="absolute inset-0 z-20 flex justify-between items-center px-12 text-white">
        {/* Sol Ok */}
        <button onClick={prevSlide} className="text-3xl hover:opacity-80 transition duration-300">
          {'<'}
        </button>
        {/* Sağ Ok */}
        <button onClick={nextSlide} className="text-3xl hover:opacity-80 transition duration-300">
          {'>'}
        </button>
      </div>
      
      {/* 4. Navigasyon Noktaları (Dots) */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400 opacity-50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}