'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Image as ImageIcon, Calendar, ArrowRight, Users, Wifi, Waves } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

// Zamenite ove linkove sa vašim direktnim Cloud linkovima slika
const HERO_IMAGES = [
  'https://res.cloudinary.com/duomot4hp/image/upload/v1784648479/WhatsApp_Image_2026-07-20_at_12.23.03_pgmcnz.jpg',
  'https://res.cloudinary.com/duomot4hp/image/upload/v1784648468/WhatsApp_Image_2026-07-20_at_12.23.04_nkakcv.jpg',
  'https://res.cloudinary.com/duomot4hp/image/upload/v1784648458/WhatsApp_Image_2026-07-20_at_12.23.04_1_lzqfr2.jpg',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Dohvatamo funkciju za prevode i trenutni jezik iz Context-a
  const { t, activeLang } = useLanguage();

  // FEATURES prebacujemo ovde unutra kako bismo mogli da koristimo prevode
  const FEATURES = [
    { icon: Users, label: t.hero.features.capacity },
    { icon: Waves, label: t.hero.features.pool },
    { icon: Wifi, label: t.hero.features.wifi },
  ];

  // Smena slika na svakih 4 sekunde sa automatskim ponavljanjem
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#1F3325]">
      {/* 1. Background Slider sa Fade i Zoom Efektom */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((imgUrl, index) => (
          <div
            key={imgUrl}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? 'opacity-100 scale-105'
                : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${imgUrl}')` }}
          />
        ))}

        {/* Gradijent preko slika za bolju čitljivost teksta i stapanje sa sajtom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3325] via-[#1F3325]/50 to-[#1F3325]/70" />
      </div>

      {/* 2. Hero Sadržaj */}
      <section className="relative z-10 flex min-h-screen flex-col justify-between px-6 pt-32 pb-12 mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-center flex-1 max-w-3xl pt-12">
          
          {/* Tagline / Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C19A5B]/20 border border-[#C19A5B]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C19A5B] backdrop-blur-md mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C19A5B] animate-pulse" />
            {t.hero.badge}
          </div>

          {/* Glavni Naslov */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-tight text-[#F5EFE6] mb-6">
            {t.hero.title} <br />
            <span className="italic font-light text-[#C19A5B]">Vista Novi</span>
            {activeLang === 'SRB' ? ' Oazu' : ' Oasis'}
          </h1>

          {/* Podnaslov */}
          <p className="text-base sm:text-lg text-[#F5EFE6]/80 font-light max-w-xl leading-relaxed mb-8">
            {t.hero.subtitle}
          </p>

          {/* Akciona Dugmad */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              href="/kontakt"
              className="group flex items-center justify-center gap-3 rounded-full bg-[#C19A5B] px-8 py-4 text-base font-bold text-[#1F3325] shadow-xl shadow-[#C19A5B]/20 transition-all duration-300 hover:bg-[#d3ac6c] hover:-translate-y-1"
            >
              <Calendar size={18} />
              {t.hero.bookBtn}
            </Link>

            <Link
              href="/galerija"
              className="group flex items-center justify-center gap-2 rounded-full border border-[#F5EFE6]/30 bg-[#F5EFE6]/10 px-8 py-4 text-base font-medium text-[#F5EFE6] backdrop-blur-md transition-all duration-300 hover:bg-[#F5EFE6]/20 hover:border-[#F5EFE6]"
            >
              <ImageIcon size={18} />
              {t.hero.galleryBtn}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* 3. Donji deo: Info traka & Indikatori Slajdera */}
        <div className="mt-12 pt-8 border-t border-[#F5EFE6]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Karakteristike */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {FEATURES.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-[#F5EFE6]/90 text-sm font-medium">
                <item.icon size={18} className="text-[#C19A5B]" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Slajder Indikatori (Tačke/Linije) */}
          <div className="flex items-center gap-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                aria-label={`Prikaži sliku ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentImageIndex
                    ? 'w-8 bg-[#C19A5B]'
                    : 'w-2 bg-[#F5EFE6]/40 hover:bg-[#F5EFE6]/70'
                }`}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}