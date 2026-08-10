import type { Metadata } from 'next';
import OkolinaClient from './OkolinaClient';

// OVO JE TVOJ NOVI SEO SERVER WRAPPER
export const metadata: Metadata = {
  title: 'Okolina i Atrakcije | Vista Nova Fruška Gora',
  description: 'Istražite šta sve možete posetiti u blizini vikendice Vista Nova. Otkrijte prelepe manastire Fruške gore, lokalne vinarije, prirodu i atrakcije Novog Sada.',
  keywords: ['Fruška gora atrakcije', 'šta videti Novi Sad', 'izleti Fruška gora', 'vinarije Fruška gora', 'okolina Novog Sada', 'manastiri Fruška gora','okolina vikendica Vista Novi'],
  alternates: {
    canonical: 'https://vistanovi.vercel.app/okolina', // Zameniti pravim domenom kasnije
  },
  openGraph: {
    title: 'Istražite Okolinu | Vista Nova Vikendica',
    description: 'Smeštena u srcu prirode, Vista Nova je savršena polazna tačka za obilazak Fruške gore.',
    url: 'https://vistanovi.vercel.app/okolina',
  }
};

export default function OkolinaPage() {
  return <OkolinaClient />;
}