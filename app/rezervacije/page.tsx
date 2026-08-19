import type { Metadata } from 'next';
import RezervacijeClient from './RezervacijeClient';

// OVO JE TVOJ NOVI SEO SERVER WRAPPER
export const metadata: Metadata = {
  title: 'Rezervacije i Cene | Vista Nova Vikendica Novi Sad',
  description: 'Proverite raspoloživost i rezervišite svoj termin u vikendici Vista Nova. Pogledajte cene zakupa, izaberite datume i osigurajte svoj savršen odmor na Fruškoj gori.',
  keywords: ['rezervacija vikendice', 'cena vikendice na dan', 'iznajmljivanje vikendice Novi Sad', 'provera raspoloživosti', 'smeštaj Fruška gora','Kako rezervisati vikendicu Vista Novi'],
  alternates: {
    canonical: 'https://vistanovi.com/rezervacije', // Zameniti pravim domenom kasnije
  },
  openGraph: {
    title: 'Rezervišite Vista Nova Vikendicu',
    description: 'Proverite slobodne termine i rezervišite smeštaj sa bazenom za vaš odmor.',
    url: 'https://vistanovi.com/rezervacije', // Zameniti pravim domenom kasnije
  }
};

export default function RezervacijePage() {
  return <RezervacijeClient />;
}