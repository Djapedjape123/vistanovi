'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryItems, galleryCategories, galleryStories, Category } from '@/lib/galleryData'; // Tvoj fajl

export default function GalerijaPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('Sve');
    const [visibleCount, setVisibleCount] = useState(12); // Počinjemo sa 12 slika radi brzine

    // Lightbox State (kad je null, lightbox je zatvoren)
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    // 1. Filtriranje slika
    const filteredImages = galleryItems.filter(
        (item) => activeCategory === 'Sve' || item.category === activeCategory
    );

    // 2. Ograničavanje broja prikazanih slika (Load More logika)
    const displayedImages = filteredImages.slice(0, visibleCount);

    // Lightbox Kontrole (Tastatura i zabrana skrolovanja pozadine)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;

            if (e.key === 'Escape') {
                setLightboxIndex(null);
            } else if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
            } else if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
            }
        };

        // Blokiraj skrol na sajtu kad je slika uvećana
        if (lightboxIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, filteredImages.length]);

    return (
        <main className="min-h-screen bg-[#1F3325] pt-24 pb-20 text-[#F5EFE6]">
            <div className="mx-auto max-w-7xl px-6">

                {/* --- HEADER SEKCIJA --- */}
                <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="inline-block rounded-full bg-[#C19A5B]/20 border border-[#C19A5B]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C19A5B] backdrop-blur-md mb-4">
                        Vista Nova Galerija
                    </span>
                    <h1 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#F5EFE6] mb-4">
                        Istražite našu oazu
                    </h1>
                    <p className="text-[#F5EFE6]/70 max-w-2xl mx-auto">
                        Zavirite u svaki kutak naše vikendice i osetite mir koji vas očekuje.
                    </p>
                </div>

                {/* --- 1. STORIES TRAKA (Brzi pregled po temama) --- */}
                {/* --- 1. STORIES TRAKA --- */}
                <div className="mb-12 flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar animate-in fade-in duration-700 delay-100">
                    {galleryStories.map((story, index) => (
                        <div
                            key={`story-${story.id}-${index}`}
                            onClick={() => {
                                // Direktno postavlja filterCategory bez komplikovanih prevoda
                                setActiveCategory(story.filterCategory as Category);
                                setVisibleCount(12);
                            }}
                            className="relative shrink-0 snap-center cursor-pointer group flex flex-col items-center gap-2"
                        >
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-[#C19A5B] to-[#F5EFE6] transition-transform duration-300 group-hover:scale-105">
                                <div className="relative w-full h-full rounded-full border-2 border-[#1F3325] overflow-hidden">
                                    <img
                                        src={story.coverImage}
                                        alt={story.title}
                                        className="object-cover w-full h-full"
                                        sizes="96px"
                                    />
                                </div>
                            </div>
                            <span className="text-xs font-semibold tracking-wide text-[#F5EFE6]/80 group-hover:text-[#C19A5B] transition-colors">
                                {story.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* --- 2. DUGMIĆI ZA FILTERE --- */}
                <div className="mb-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 animate-in fade-in duration-700 delay-200">
                    {galleryCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setActiveCategory(cat);
                                setVisibleCount(12);
                            }}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-[#C19A5B] text-[#1F3325] shadow-lg shadow-[#C19A5B]/20'
                                    : 'bg-white/5 text-[#F5EFE6]/70 border border-white/10 hover:bg-white/10 hover:text-[#F5EFE6]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* --- 3. BENTO MREŽA SLIKA (Masonry osećaj) --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    {displayedImages.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setLightboxIndex(index)}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5 transition-transform duration-500 hover:scale-[0.98] ${
                                // Ako je isHero true, slika zauzima duplo više mesta (2x2 kocke)
                                item.isHero ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                                }`}
                        >
                            <img
                                src={item.url}
                                alt={item.title}

                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />

                            {/* Tamni overlay sa tekstom na hover (samo na desktopu, na mobilnom se slabije vidi) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3325]/90 via-[#1F3325]/20 to-transparent opacity-0 transition-opacity duration-300 md:group-hover:opacity-100 flex flex-col justify-end p-6">
                                <div className="translate-y-4 transition-transform duration-300 group-hover:translate-y-0 flex items-center justify-between">
                                    <div>
                                        <span className="text-[#C19A5B] text-xs uppercase tracking-widest font-bold mb-1 block">
                                            {item.category}
                                        </span>
                                        <h3 className="text-[#F5EFE6] font-serif text-xl">{item.title}</h3>
                                    </div>
                                    <div className="hidden md:flex w-10 h-10 rounded-full bg-white/20 backdrop-blur-md items-center justify-center text-white">
                                        <Maximize2 size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- DUGME "PRIKAŽI JOŠ" --- */}
                {visibleCount < filteredImages.length && (
                    <div className="mt-12 flex justify-center animate-in fade-in duration-500">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 12)}
                            className="px-8 py-3 rounded-full border border-[#C19A5B]/50 text-[#C19A5B] font-bold hover:bg-[#C19A5B]/10 transition-colors"
                        >
                            Učitaj još slika ({filteredImages.length - visibleCount})
                        </button>
                    </div>
                )}

                {/* --- 4. LIGHTBOX (PUNOEKRANSKI MODAL ZA PREGLED) --- */}
                {lightboxIndex !== null && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200">

                        {/* Top Traka (Brojač i X) */}
                        <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 md:p-6 z-50">
                            <div className="text-[#F5EFE6]/70 font-mono text-sm bg-black/50 px-4 py-2 rounded-full border border-white/10">
                                {lightboxIndex + 1} / {filteredImages.length}
                            </div>
                            <button
                                onClick={() => setLightboxIndex(null)}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#C19A5B] transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Strelica Levo (Skrivena na jako malim ekranima gde ljudi koriste swipe) */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length); }}
                            className="hidden sm:flex absolute left-4 md:left-10 z-50 w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#C19A5B] transition-colors backdrop-blur-md"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Glavna uvećana slika */}
                        <div
                            className="relative w-full max-w-6xl h-[60vh] sm:h-[75vh] md:h-[85vh] mx-0 sm:mx-4"
                            // Omogućava klik na samu sliku za prelazak na sledeću (odlično za mobilne telefone)
                            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % filteredImages.length); }}
                        >
                            <img
                                src={filteredImages[lightboxIndex].url}
                                alt={filteredImages[lightboxIndex].title}

                                className="object-contain animate-in zoom-in-95 duration-300"
                                sizes="100vw"

                            />

                            {/* Opis slike u dnu ekrana */}
                            <div className="absolute -bottom-16 sm:bottom-4 left-1/2 -translate-x-1/2 text-center bg-black/60 px-6 py-2 md:py-3 rounded-full backdrop-blur-md w-[90%] sm:w-auto">
                                <span className="text-[#C19A5B] text-[10px] md:text-xs uppercase tracking-widest font-bold block mb-0.5">
                                    {filteredImages[lightboxIndex].category}
                                </span>
                                <span className="text-white font-serif text-sm md:text-base">
                                    {filteredImages[lightboxIndex].title}
                                </span>
                            </div>
                        </div>

                        {/* Strelica Desno */}
                        <button
                            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev! + 1) % filteredImages.length); }}
                            className="hidden sm:flex absolute right-4 md:right-10 z-50 w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#C19A5B] transition-colors backdrop-blur-md"
                        >
                            <ChevronRight size={32} />
                        </button>

                    </div>
                )}

            </div>
        </main>
    );
}