'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function Footer() {
    const { activeLang, t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        // mt-32 dodaje prostor iznad footera kako bi okrugla slika imala mesta da "izviri"
        <footer className="relative  bg-black text-[#F5EFE6] pt-24 pb-8 border-t border-[#C19A5B]/20">


            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-8 border-[#15241A] overflow-hidden group shadow-2xl">
                    {/* Zlatni prsten */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#C19A5B] z-20 pointer-events-none transition-transform duration-700 group-hover:scale-95" />

                    <img
                        src="https://res.cloudinary.com/duomot4hp/image/upload/v1785149684/ChatGPT_Image_27._%D1%98%D1%83%D0%BB_2026._13_03_26_z5djuf.png"
                        alt="Vista Nova Footer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6">

                {/* 2. GLAVNE KOLONE */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">

                    {/* LEVA KOLONA: Brend */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-serif text-3xl text-[#C19A5B] mb-4">Vista Nova</h3>
                        <p className="text-[#F5EFE6]/70 max-w-xs leading-relaxed">
                            {activeLang === 'SRB'
                                ? 'Vaša privatna oaza mira u srcu netaknute prirode Fruške gore. Mesto gde se luksuz i priroda spajaju.'
                                : 'Your private oasis of peace in the heart of untouched nature on Fruška Gora. Where luxury meets nature.'}
                        </p>
                        {/* Opciono: Social ikonica */}
                        {/* <a href="#" className="mt-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#F5EFE6]/70 hover:text-[#C19A5B] hover:border-[#C19A5B] transition-all">
              <Instagram size={18} />
            </a> */}
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
                            <p className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors cursor-pointer">
                                <Mail size={18} className="text-[#C19A5B]" />
                                {t.contactSection.emailVal}
                            </p>
                            <p className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors cursor-pointer">
                                <MapPin size={18} className="text-[#C19A5B]" />
                                {t.contactSection.addressVal}
                            </p>
                        </div>
                    </div>

                </div>

                {/* 3. DONJA TRAKA (Copyright i Potpis) */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#F5EFE6]/50">
                    <p>
                        © {currentYear} Vista Nova. {activeLang === 'SRB' ? 'Sva prava zadržana.' : 'All rights reserved.'}
                    </p>
                    
                </div>

            </div>
        </footer>
    );
}