'use client';

import React from 'react';
import { Phone, MapPin, Mail, Navigation } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function KakoDoNas() {
  const { t } = useLanguage();

  // Koordinate vikendice za Google Maps navigaciju
  const destLat = 45.20950991389186;
  const destLng = 19.816353134261675;

  const handleGetDirections = () => {
    // Proverava da li pretraživač podržava geolokaciju
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          // Otvara Google Maps sa rutom od korisnika do vikendice
          const url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}`;
          window.open(url, '_blank');
        },
        () => {
          // Ako korisnik odbije lokaciju, otvara samo mapu sa postavljenom destinacijom
          const url = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}`;
          window.open(url, '_blank');
        }
      );
    } else {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}`;
      window.open(url, '_blank');
    }
  };

  return (
    <section className="relative bg-[#1F3325] py-24 px-6 text-[#F5EFE6]">
      <div className="mx-auto max-w-6xl">
        
        {/* Naslov sekcije */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-[#C19A5B]/20 border border-[#C19A5B]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#C19A5B] backdrop-blur-md mb-4">
            Lokacija
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#F5EFE6] mb-4">
            {t.contactSection?.title || 'Kako do nas'}
          </h2>
          <p className="text-[#F5EFE6]/80 font-light max-w-xl mx-auto text-base">
            {t.contactSection?.subtitle || 'Posetite našu oazu mira na Fruškoj gori i doživite odmor za pamćenje.'}
          </p>
        </div>

        {/* Grid layout: Leva strana info, desna mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEVA STRANA: 3 polja + Dugme */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              
              {/* Telefon polje */}
              <a
                href="tel:+381645824612"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-[#C19A5B]/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C19A5B]/20 text-[#C19A5B] transition-transform group-hover:scale-110">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F5EFE6]/60 block mb-0.5">
                    {t.contactSection?.phone || 'Telefon'}
                  </span>
                  <span className="text-base font-semibold text-[#F5EFE6] group-hover:text-[#C19A5B] transition-colors">
                    {t.contactSection?.phoneVal || '+381 60 000 0000'}
                  </span>
                </div>
              </a>

              {/* Adresa polje */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C19A5B]/20 text-[#C19A5B]">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F5EFE6]/60 block mb-0.5">
                    {t.contactSection?.address || 'Lokacija'}
                  </span>
                  <span className="text-base font-semibold text-[#F5EFE6]">
                    {t.contactSection?.addressVal || 'Fruška Gora, Srbija'}
                  </span>
                </div>
              </div>

              {/* Email polje */}
              <a
                href="mailto:emilijagolubov@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-[#C19A5B]/50"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#C19A5B]/20 text-[#C19A5B] transition-transform group-hover:scale-110">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F5EFE6]/60 block mb-0.5">
                    {t.contactSection?.email || 'Email adresa'}
                  </span>
                  <span className="text-base font-semibold text-[#F5EFE6] group-hover:text-[#C19A5B] transition-colors">
                    {t.contactSection?.emailVal || 'info@vistanova.rs'}
                  </span>
                </div>
              </a>

            </div>

            {/* Dugme Kreni do nas */}
            <button
              onClick={handleGetDirections}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#C19A5B] py-4 px-6 text-base font-bold text-[#1F3325] shadow-xl shadow-[#C19A5B]/20 transition-all duration-300 hover:bg-[#d3ac6c] hover:-translate-y-1 active:scale-95"
            >
              <Navigation size={20} className="transition-transform group-hover:rotate-45" />
              {t.contactSection?.directionsBtn || 'Kreni do nas'}
            </button>
          </div>

          {/* DESNA STRANA: Google Mapa */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.5949286005344!2d19.816353134261675!3d45.20950991389186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b0f003133a14f%3A0x8a27fdfd1f8f041d!2sNEMA%20DALJE!5e1!3m2!1ssr!2srs!4v1784829181282!5m2!1ssr!2srs"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.25rem' }}
              
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Vista Nova Lokacija"
              className="w-full h-full grayscale-[20%] contrast-[105%] brightness-[90%]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}