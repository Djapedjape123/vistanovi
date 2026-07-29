'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function Footer() {
    const { activeLang, t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black text-[#F5EFE6] pt-16 pb-8 border-t border-[#C19A5B]/20">
            <div className="mx-auto max-w-7xl px-6">

                {/* 2. GLAVNE KOLONE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">

                    {/* LEVA KOLONA: Brend */}
                    <div className="flex flex-col items-center md:items-start">
                        
                        {/* Logo iznad naslova sa pulsirajućim efektom */}
                        <div className="relative mb-6 flex justify-center md:justify-start">
                            {/* Pulsirajući radarski prsten iza slike */}
                            <div className="absolute inset-0 rounded-full bg-[#C19A5B]/40 animate-ping opacity-75" />
                            {/* Blagi glow efekat koji diše */}
                            <div className="absolute inset-0 rounded-full bg-[#C19A5B]/20 blur-xl animate-pulse" />
                            
                            <div className="relative w-28 h-28 rounded-full border-4 border-black overflow-hidden group shadow-2xl bg-black z-10">
                                {/* Zlatni prsten */}
                                <div className="absolute inset-0 rounded-full border-2 border-[#C19A5B] z-20 pointer-events-none transition-transform duration-700 group-hover:scale-95" />

                                <img
                                    src="https://res.cloudinary.com/duomot4hp/image/upload/v1785149684/ChatGPT_Image_27._%D1%98%D1%83%D0%BB_2026._13_03_26_z5djuf.png"
                                    alt="Vista Novi Footer"
                                    className="w-full h-full object-contain object-center p-1 transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        <h3 className="font-serif text-3xl text-[#C19A5B] mb-4">Vista Novi</h3>
                        <p className="text-[#F5EFE6]/70 max-w-xs leading-relaxed">
                            {activeLang === 'SRB'
                                ? 'Vaša privatna oaza mira u srcu netaknute prirode Fruške gore. Mesto gde se luksuz i priroda spajaju.'
                                : 'Your private oasis of peace in the heart of untouched nature on Fruška Gora. Where luxury meets nature.'}
                        </p>
                    </div>

                    {/* SREDNJA KOLONA: Navigacija */}
                    <div className="flex flex-col items-center md:items-start md:pl-12 lg:pl-24">
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#F5EFE6]">
                            {activeLang === 'SRB' ? 'Brzi Linkovi' : 'Quick Links'}
                        </h4>
                        <ul className="space-y-4">
                            {[
                                { name: t.nav.home, path: '/' },
                                { name: t.nav.about, path: '/smestaj' },
                                { name: t.nav.gallery, path: '/galerija' },
                                { name: t.nav.surroundings, path: '/okolina' },
                                { name: t.nav.contact, path: '/kontakt' },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link href={link.path} className="group flex items-center gap-2 text-[#F5EFE6]/70 hover:text-[#C19A5B] transition-colors">
                                        <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                        <span className="transition-transform group-hover:translate-x-1">{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* DESNA KOLONA: Kontakt (Veliki broj telefona) */}
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="font-bold uppercase tracking-widest text-sm mb-6 text-[#F5EFE6]">
                            {activeLang === 'SRB' ? 'Kontaktirajte nas' : 'Contact Us'}
                        </h4>

                        <a
                            href={`tel:${t.contactSection.phoneVal.replace(/\s/g, '')}`}
                            className="text-3xl sm:text-4xl font-serif text-[#C19A5B] hover:text-[#d3ac6c] transition-colors mb-6 block"
                        >
                            {t.contactSection.phoneVal}
                        </a>

                        <div className="space-y-3 text-[#F5EFE6]/70 text-sm">
                            <a href='mailto:emilijagolubov@gmail.com' className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors cursor-pointer">
                                <Mail size={18} className="text-[#C19A5B]" />
                                {t.contactSection.emailVal}
                            </a>
                            <a href='https://www.google.com/maps/place/NEMA+DALJE/@45.2091999,19.8163856,495m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b0f003133a14f:0x8a27fdfd1f8f041d!8m2!3d45.2091999!4d19.8163856!16s%2Fg%2F11y5c274wm!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D' className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors cursor-pointer">
                                <MapPin size={18} className="text-[#C19A5B]" />
                                {t.contactSection.addressVal}
                            </a>
                        </div>
                    </div>

                </div>

                {/* 3. DONJA TRAKA (Copyright i Potpis) */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5EFE6]/50">
                    <p>
                        © {currentYear} Vista Novi. {activeLang === 'SRB' ? 'Sva prava zadržana.' : 'All rights reserved.'}
                    </p>
                </div>

            </div>
        </footer>
    );
}