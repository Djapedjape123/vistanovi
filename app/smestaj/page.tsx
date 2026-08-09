import type { Metadata } from 'next';
import AboutClient from './AboutClient';

// OVO JE TVOJ NOVI SEO SERVER WRAPPER
export const metadata: Metadata = {
  title: 'O Nama i Smeštaj | Vista Nova Vikendica sa Bazenom',
  description: 'Otkrijte šta sve nudi Vista Nova vikendica. Luksuzan enterijer, predivan bazen i magične večeri na Fruškoj gori. Saznajte da li smo idealan izbor za vaš odmor.',
  keywords: ['smeštaj Fruška gora', 'vikendica sa bazenom', 'luksuzan odmor Novi Sad', 'iznajmljivanje vikendice karakteristike', 'privatni bazen vikendica'],
  alternates: {
    // Napomena: Ako se tvoj folder zove /smestaj, ostavi ovako. Ako je /o-nama, promeni reč na kraju linka.
    canonical: 'https://vistanovi.vercel.app/smestaj', 
  },
  openGraph: {
    title: 'Sadržaj i Smeštaj | Vista Nova',
    description: 'Saznajte zašto je naša vikendica sa bazenom savršeno mesto za vaš beg iz grada.',
    url: 'https://vistanovi.vercel.app/smestaj',
  }
};

export default function AboutPage() {
  return <AboutClient />;
}