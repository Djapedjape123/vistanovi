"use client";

import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Broj doktorke (samo broj bez nula na početku, prefiks 381)
  const phoneNumber = "381645824612"; 
  const message = "Zdravo, pišem vam sa sajta Vista Novi. Kada imate slobodnih dana.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pojavljuje se nakon 2 sekunde
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-500 animate-in fade-in zoom-in-50 hover:scale-110 flex items-center justify-center group"
      aria-label="Kontaktirajte nas na WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Pišite nam na WhatsApp
      </span>
      
      <FaWhatsapp size={28} />
      
      {/* Pulsirajući efekat */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>
    </a>
  );
};

export default WhatsAppButton;