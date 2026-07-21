// lib/translations.ts

export const translations = {
  SRB: {
    nav: {
      home: 'Početna',
      gallery: 'Galerija',
      about: 'O vikendici',
      surroundings: 'Okolina',
      contact: 'Kontakt',
      book: 'Rezerviši',
      bookNow: 'Rezerviši sada',
    },
    hero: {
      badge: 'Ekskluzivna Vikendica',
      title: 'Dobrodošli u',
      subtitle: 'Pronađite savršen mir i pobegnite od gradske gužve. Iskusite vrhunski komfor, privatnost i prelep pogled u srcu netaknute prirode.',
      bookBtn: 'Rezerviši Smeštaj',
      galleryBtn: 'Istraži Galeriju',
      features: {
        capacity: 'Kapacitet do 8 osoba',
        pool: 'Privatni bazen (slana voda)',
        wifi: 'Brzi Optički WiFi'
      }
    }
  },
  ENG: {
    nav: {
      home: 'Home',
      gallery: 'Gallery',
      about: 'About Us',
      surroundings: 'Surroundings',
      contact: 'Contact',
      book: 'Book',
      bookNow: 'Book Now',
    },
    hero: {
      badge: 'Exclusive Villa',
      title: 'Welcome to',
      subtitle: 'Find perfect peace and escape the city rush. Experience top-tier comfort, privacy, and beautiful views in the heart of untouched nature.',
      bookBtn: 'Book Accommodation',
      galleryBtn: 'Explore Gallery',
      features: {
        capacity: 'Capacity up to 8 guests',
        pool: 'Private pool (salt water)',
        wifi: 'Fast Fiber WiFi'
      }
    }
  }
};

export type Language = 'SRB' | 'ENG';