'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Car, 
  Clock, 
  Sun, 
  Coffee, 
  Moon,
  Compass
} from 'lucide-react';
import { 
  surroundingsPlaces, 
  cityDistances, 
  surroundingCategories 
} from '@/lib/surroundingsData';
// Uvezi svoj Language Context! Prilagodi putanju ako je u drugom folderu.
import { useLanguage } from '@/components/LanguageContext';

export default function OkolinaPage() {
  const { activeLang, t } = useLanguage();
  
  // Trenutne kategorije i podaci bazirani na aktivnom jeziku
  const currentCategories = surroundingCategories[activeLang];
  const currentPlaces = surroundingsPlaces[activeLang];
  const currentDistances = cityDistances[activeLang];

  // Početna kategorija je prva u nizu ('Sve' ili 'All')
  const [activeCategory, setActiveCategory] = useState<string>(currentCategories[0]);

  // Ako korisnik promeni jezik dok je na ovoj stranici, resetujemo filter na 'Sve'/'All'
  useEffect(() => {
    setActiveCategory(surroundingCategories[activeLang][0]);
  }, [activeLang]);

  // Filtriranje lokacija (prikazuje sve ako je izabrano 'Sve'/'All', u suprotnom filtrira)
  const filteredPlaces = currentPlaces.filter(
    (place) => activeCategory === currentCategories[0] || place.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[#1F3325] pt-24 pb-20 text-[#F5EFE6] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* --- 1. HEADER SEKCIJA --- */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block rounded-full bg-[#C19A5B]/20 border border-[#C19A5B]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C19A5B] backdrop-blur-md mb-4">
            {t.okolinaPage?.badge || 'Istražite okolinu'}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F5EFE6] mb-6">
            {t.okolinaPage?.title || 'Otkrijte čari'} <span className="italic font-light text-[#C19A5B]">{t.okolinaPage?.titleHighlight || 'Fruške gore'}</span>
          </h1>
          <p className="text-[#F5EFE6]/70 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.okolinaPage?.subtitle || 'Smeštena u srcu prirode, a ipak tako blizu grada...'}
          </p>
        </div>

        {/* --- 2. TRAKA UDALJENOSTI (Distance Bar) --- */}
        <div className="mb-20 grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-700 delay-100">
          {currentDistances.map((city, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all hover:bg-white/10 hover:border-[#C19A5B]/30"
            >
              <Car size={24} className="text-[#C19A5B] mb-3" />
              <h3 className="font-semibold text-center mb-1">{city.city}</h3>
              <div className="flex items-center gap-2 text-sm text-[#F5EFE6]/60">
                <Clock size={14} />
                <span>{city.time}</span>
              </div>
              <span className="text-xs text-[#C19A5B] mt-2 font-medium tracking-wide uppercase">
                {city.distance}
              </span>
            </div>
          ))}
        </div>

        {/* --- 3. FILTERI KATEGORIJA --- */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 animate-in fade-in duration-700 delay-200">
          {currentCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#C19A5B] text-[#1F3325] shadow-lg shadow-[#C19A5B]/20 scale-105' 
                  : 'bg-white/5 text-[#F5EFE6]/80 border border-white/10 hover:bg-white/10 hover:text-[#F5EFE6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- 4. KARTICE ATRAKCIJA (Grid) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          {filteredPlaces.map((place) => (
            <div 
              key={place.id} 
              className="group flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl hover:shadow-[#C19A5B]/10"
            >
              {/* Slika */}
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={place.imageUrl}
                  alt={place.name}
                  
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold tracking-wide text-[#F5EFE6]">
                  <Compass size={14} className="text-[#C19A5B]" />
                  {place.category}
                </div>
              </div>

              {/* Sadržaj kartice */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-2xl font-medium text-[#F5EFE6]">{place.name}</h3>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-[#C19A5B] font-medium mb-4">
                  <Car size={16} />
                  <span>{place.driveTime}</span>
                </div>
                
                <p className="text-[#F5EFE6]/70 text-sm leading-relaxed mb-8 flex-grow">
                  {place.description}
                </p>

                <a 
                  href={place.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-semibold text-[#F5EFE6] transition-all group-hover:bg-[#C19A5B] group-hover:text-[#1F3325] group-hover:border-[#C19A5B]"
                >
                  <MapPin size={18} />
                  {t.okolinaPage?.mapBtn || 'Prikaži na mapi'}
                </a>
              </div>
            </div>
          ))}
        </div>

       
       

      </div>
    </main>
  );
}