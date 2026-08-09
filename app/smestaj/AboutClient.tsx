'use client';

import React from 'react';
import Link from 'next/link';
import { Check, X, Calendar, Languages } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

// Zamenite ove linkove sa vašim direktnim Cloud linkovima slika
const ABOUT_IMAGES = {
  pool: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992379/WhatsApp_Image_2026-07-20_at_12.24.56_1_gvktyd.jpg',
  evening: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992437/WhatsApp_Image_2026-07-20_at_12.24.55_4_ouuie4.jpg',
  interior: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991928/WhatsApp_Image_2026-07-20_at_12.23.04_8_ayfwsd.jpg',
};

export default function AboutClient() {
  const { t } = useLanguage();
  const about = t.about;

  const featureBlocks = [
    { image: ABOUT_IMAGES.pool, ...about.features.pool },
    { image: ABOUT_IMAGES.evening, ...about.features.evening },
    { image: ABOUT_IMAGES.interior, ...about.features.interior },
  ];

  return (
    <main className="w-full bg-[#1F3325] pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* 1. UVOD */}
        <section className="mb-20 max-w-3xl md:mb-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#C19A5B]">
            {about.eyebrow}
          </p>
          <h1 className="mb-4 font-serif text-4xl leading-[1.1] text-[#F5EFE6] sm:text-5xl md:text-6xl">
            {about.title}
          </h1>
          <p className="mb-6 font-serif text-xl italic text-[#C19A5B] sm:text-2xl">
            {about.subtitle}
          </p>
          <p className="text-base leading-relaxed text-[#F5EFE6]/75 sm:text-lg">
            {about.intro}
          </p>
        </section>

        {/* 2. FEATURE BLOKOVI - naizmenično slika/tekst */}
        <section className="mb-20 flex flex-col gap-16 md:mb-28 md:gap-24">
          {featureBlocks.map((block, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={block.title}
                className={`flex flex-col items-center gap-8 md:gap-12 ${
                  isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                <div className="h-64 w-full overflow-hidden rounded-2xl sm:h-80 md:h-96 md:w-1/2">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="mb-4 font-serif text-2xl text-[#F5EFE6] sm:text-3xl">
                    {block.title}
                  </h2>
                  <p className="text-base leading-relaxed text-[#F5EFE6]/70 sm:text-lg">
                    {block.text}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* 3. ZA KOGA JE / NIJE */}
        <section className="mb-20 md:mb-28">
          <h2 className="mb-10 text-center font-serif text-3xl text-[#F5EFE6] md:text-4xl">
            {about.forWho.title}
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Idealno za */}
            <div className="rounded-2xl border border-[#C19A5B]/30 bg-[#C19A5B]/10 p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#C19A5B]">
                {about.forWho.idealTitle}
              </h3>
              <ul className="space-y-3">
                {about.forWho.idealItems.map((item: string) => (
                  <li key={item} className="flex items-start gap-3 text-[#F5EFE6]">
                    <Check size={18} className="mt-0.5 shrink-0 text-[#C19A5B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nije namenjeno za */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#F5EFE6]/50">
                {about.forWho.notTitle}
              </h3>
              <ul className="space-y-3">
                {about.forWho.notItems.map((item: string) => (
                  <li key={item} className="flex items-start gap-3 text-[#F5EFE6]/60">
                    <X size={18} className="mt-0.5 shrink-0 text-[#F5EFE6]/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. PULL QUOTE */}
        <section className="mb-20 flex flex-col items-center text-center md:mb-28">
          <div className="mb-6 h-px w-16 bg-[#C19A5B]/50" />
          <p className="max-w-2xl font-serif text-2xl italic leading-snug text-[#F5EFE6] sm:text-3xl md:text-4xl">
            "{about.quote}"
          </p>
          <div className="mt-6 h-px w-16 bg-[#C19A5B]/50" />
        </section>

        {/* 5. JEZIK */}
        <section className="mb-20 flex flex-col items-center gap-3 text-center md:mb-28">
          <div className="flex items-center gap-2 text-[#C19A5B]">
            <Languages size={20} />
            <span className="font-semibold tracking-wide">🇷🇸 Srpski · 🇬🇧 English</span>
          </div>
          <p className="text-sm text-[#F5EFE6]/60">{about.languages.label}</p>
        </section>

        {/* 6. CTA */}
        <section className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-[#152219] px-8 py-14 text-center">
          <h2 className="font-serif text-3xl text-[#F5EFE6] sm:text-4xl">
            {about.cta.title}
          </h2>
          <Link
            href="/rezervacije"
            className="group flex items-center gap-3 rounded-full bg-[#C19A5B] px-8 py-4 text-base font-bold text-[#1F3325] shadow-xl shadow-[#C19A5B]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#d3ac6c]"
          >
            <Calendar size={18} />
            {about.cta.button}
          </Link>
        </section>

      </div>
    </main>
  );
}