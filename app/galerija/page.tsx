import type { Metadata } from 'next';
import GalerijaClient from './GalerijaClient';

// OVO JE TVOJ NOVI SEO SERVER WRAPPER
export const metadata: Metadata = {
  title: 'Galerija | Vista Nova Vikendica sa Bazenom Novi Sad',
  description: 'Zavirite u svaki kutak ekskluzivne vikendice Vista Nova na Fruškoj gori. Istražite fotografije luksuznog enterijera, bazena, dvorišta i prostora za proslave.',
  keywords: ['slike vikendice', 'galerija Vista Nova', 'vikendica sa bazenom fotografije', 'enterijer vikendice', 'dvorište sa bazenom'],
  alternates: {
    canonical: 'https://vistanovi.com/galerija', // Promeni u pravi domen kasnije
  },
  openGraph: {
    title: 'Galerija | Vista Nova Vikendica',
    description: 'Pogledajte fotografije enterijera i eksterijera naše luksuzne vikendice.',
    url: 'https://vistanovi.com/galerija', // Promeni u pravi domen kasnije
  }
};

export default function GalerijaPage() {
  return <GalerijaClient />;
}