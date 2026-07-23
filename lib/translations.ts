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
        capacity: 'Kapacitet do 6 osoba',
        pool: 'Privatni bazen (slana voda)',
        wifi: 'Brzi Optički WiFi'
      }
    },
    contactSection: {
      title: 'Kako do nas',
      subtitle: 'Posetite našu oazu mira na Fruškoj gori i doživite odmor za pamćenje.',
      phone: 'Telefon',
      phoneVal: '+381 64 582 4612',
      address: 'Lokacija',
      addressVal: 'Ledinci Fruška Gora, Srbija',
      email: 'Email adresa',
      emailVal: 'emilijagolubov@gmail.com',
      directionsBtn: 'Kreni do nas',
    },
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
        capacity: 'Capacity up to 6 guests',
        pool: 'Private pool (salt water)',
        wifi: 'Fast Fiber WiFi'
      }
    },
    contactSection: {
      title: 'How to Reach Us',
      subtitle: 'Visit our oasis of peace on Fruška Gora and experience an unforgettable vacation.',
      phone: 'Phone',
      phoneVal: '+381 64 582 4612',
      address: 'Location',
      addressVal: 'Ledinci Fruška Gora, Serbia',
      email: 'Email Address',
      emailVal: 'emilijagolubov@gmail.com',
      directionsBtn: 'Get Directions',
    }
  }
};

export type Language = 'SRB' | 'ENG';