'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language } from '@/lib/translations';

type LanguageContextType = {
  activeLang: Language;
  setActiveLang: (lang: Language) => void;
  t: typeof translations.SRB;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [activeLang, setActiveLang] = useState<Language>('SRB');

  useEffect(() => {
    try {
      // Zaštita: Instagram WebView često blokira localStorage
      const savedLang = window.localStorage.getItem('lang') as Language;
      if (savedLang && (savedLang === 'SRB' || savedLang === 'ENG')) {
        setActiveLang(savedLang);
      }
    } catch (error) {
      console.warn("localStorage je blokiran u ovom pretraživaču (Instagram WebView). Učitavam default jezik.");
    }
  }, []);

  const handleSetLang = (lang: Language) => {
    setActiveLang(lang);
    try {
      // Zaštita i prilikom pamćenja novog jezika
      window.localStorage.setItem('lang', lang);
    } catch (error) {
      console.warn("Nije moguće sačuvati jezik u localStorage.");
    }
  };

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
