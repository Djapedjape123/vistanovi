
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations'; // Podesi putanju ako treba

type LanguageContextType = {
  activeLang: Language;
  setActiveLang: (lang: Language) => void;
  t: typeof translations.SRB; // Tipiziramo funkciju za prevode
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [activeLang, setActiveLang] = useState<Language>('SRB');

  // Opciono: Pamćenje jezika u localStorage da ostane kad klijent osveži stranicu
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang && (savedLang === 'SRB' || savedLang === 'ENG')) {
      setActiveLang(savedLang);
    }
  }, []);

  const handleSetLang = (lang: Language) => {
    setActiveLang(lang);
    localStorage.setItem('lang', lang);
  };

  // 't' je objekat koji sadrži sve tekstove za trenutno aktivni jezik
  const t = translations[activeLang];

  return (
    <LanguageContext.Provider value={{ activeLang, setActiveLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}