'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, MoveHorizontal } from 'lucide-react';
import { galleryItems, galleryCategories, galleryStories, Category } from '@/lib/galleryData';

export default function GalerijaPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('Sve');
    const [visibleCount, setVisibleCount] = useState(12);

    // Lightbox State
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    
    // Swipe State koristeći useRef (Rešava problem seckanja i "zakucavanja")
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);
    const minSwipeDistance = 50; 

    // 1. Filtriranje slika
    const filteredImages = galleryItems.filter(
        (item) => activeCategory === 'Sve' || item.category === activeCategory
    );

    const displayedImages = filteredImages.slice(0, visibleCount);

    // Logika za navigaciju u lightbox-u
    const goToNext = () => {
        setLightboxIndex((prev) => (prev! + 1) % filteredImages.length);
    };

    const goToPrev = () => {
        setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
    };

    // Glatka Swipe logika (Bez zagušivanja aplikacije)
    const onTouchStart = (e: React.TouchEvent) => {
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            goToNext();
        }
        if (isRightSwipe) {
            goToPrev();
        }
        
        // Reset
        touchStartX.current = null;
        touchEndX.current = null;
    };

    // Tastatura i zabrana skrola
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') setLightboxIndex(null);
            else if (e.key === 'ArrowRight') goToNext();
            else if (e.key === 'ArrowLeft') goToPrev();
        };

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

                {/* --- 1. STORIES TRAKA --- */}
                <div className="mb-12 flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar animate-in fade-in duration-700 delay-100">
                    {galleryStories.map((story, index) => (
                        <div
                            key={`story-${story.id}-${index}`}
                            onClick={() => {
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

                {/* --- 3. BENTO MREŽA SLIKA --- */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                    {displayedImages.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => setLightboxIndex(index)}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-white/5 transition-transform duration-500 hover:scale-[0.98] ${
                                item.isHero ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
                                }`}
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                            />

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

                {/* --- 4. LIGHTBOX SA SWIPE OPCIJOM --- */}
                {lightboxIndex !== null && (
                    <div 
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Top Traka (Odmaknuta od ivice zbog notch-a na mobilnom) */}
                        <div className="absolute top-4 sm:top-6 left-0 right-0 flex items-center justify-between px-4 sm:px-6 z-[60]">
                            <div className="text-[#F5EFE6]/70 font-mono text-sm bg-black/50 px-4 py-2 rounded-full border border-white/10 shadow-lg">
                                {lightboxIndex + 1} / {filteredImages.length}
                            </div>
                            <button
                                onClick={() => setLightboxIndex(null)}
                                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#C19A5B] transition-colors shadow-lg"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Strelica Levo */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                            className="hidden sm:flex absolute left-4 md:left-10 z-50 w-12 h-12 md:w-14 md:h-14 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#C19A5B] transition-colors backdrop-blur-md"
                        >
                            <ChevronLeft size={32} />
                        </button>

                        {/* Glavna uvećana slika (dodat draggable={false} da spreči ghost-drag slike) */}
                        <div className="relative w-full max-w-6xl h-[55vh] sm:h-[75vh] md:h-[85vh] mx-auto px-4 sm:px-6 flex items-center justify-center pointer-events-none sm:pointer-events-auto">
                            <img
                                src={filteredImages[lightboxIndex].url}
                                alt={filteredImages[lightboxIndex].title}
                                draggable={false}
                                className="w-full h-full object-contain rounded-lg animate-in zoom-in-95 duration-300 select-none pointer-events-auto"
                            />
                        </div>

                        {/* Vizuelna instrukcija za Swipe (Samo na telefonima) */}
                        {/* <div className="absolute bottom-24 sm:hidden flex items-center gap-2 text-white/50 bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm pointer-events-none animate-pulse">
                            <MoveHorizontal size={16} />
                            <span className="text-xs">Prevucite prstom</span>
                        </div> */}

                        {/* Opis slike u dnu ekrana */}
                        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-center bg-black/60 px-6 py-3 rounded-full backdrop-blur-md w-[90%] sm:w-auto max-w-[95vw]">
                            <span className="text-[#C19A5B] text-[10px] md:text-xs uppercase tracking-widest font-bold block mb-0.5">
                                {filteredImages[lightboxIndex].category}
                            </span>
                            <span className="text-white font-serif text-sm md:text-base line-clamp-1">
                                {filteredImages[lightboxIndex].title}
                            </span>
                        </div>

                        {/* Strelica Desno */}
                        <button
                            onClick={(e) => { e.stopPropagation(); goToNext(); }}
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