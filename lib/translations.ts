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
    // NOVO: Tekstovi za stranicu Okolina
    okolinaPage: {
      badge: 'Istražite okolinu',
      title: 'Otkrijte čari',
      titleHighlight: 'Fruške gore',
      subtitle: 'Smeštena u srcu prirode, a ipak tako blizu grada. Naša vikendica u Ledincima je savršena polazna tačka za vaše avanture.',
      perfectDayTitle: 'Naš predlog za savršen dan',
      perfectDaySubtitle: 'Iskusite najbolje što Ledinci i Fruška gora nude kroz idealno izbalansiran plan za opuštanje i uživanje.',
      morning: 'Pre podne',
      morningDesc: 'Jutarnja kafa na terasi uz cvrkut ptica, pa osvežavajuća šetnja šumskim stazama do Popovice.',
      afternoon: 'Posle podne',
      afternoonDesc: 'Lokalni ručak i degustacija vrhunskih fruškogorskih vina u obližnjoj porodičnoj vinariji.',
      evening: 'Veče',
      eveningDesc: 'Povratak u Vista Novu. Opuštanje u bazenu uz čašu vina, posmatrajući magičan zalazak sunca.',
      mapBtn: 'Prikaži na mapi'
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
    },
    // NOVO: Tekstovi za stranicu Okolina (Engleski)
    okolinaPage: {
      badge: 'Explore Surroundings',
      title: 'Discover the charm of',
      titleHighlight: 'Fruška Gora',
      subtitle: 'Nestled in the heart of nature, yet so close to the city. Our villa in Ledinci is the perfect starting point for your adventures.',
      perfectDayTitle: 'Our suggestion for a perfect day',
      perfectDaySubtitle: 'Experience the best of Ledinci and Fruška Gora through an ideally balanced plan for relaxation and enjoyment.',
      morning: 'Morning',
      morningDesc: 'Morning coffee on the terrace with birdsong, followed by a refreshing walk along the forest trails to Popovica.',
      afternoon: 'Afternoon',
      afternoonDesc: 'Local lunch and tasting of premium Fruška Gora wines at a nearby family winery.',
      evening: 'Evening',
      eveningDesc: 'Return to Vista Nova. Relax in the pool with a glass of wine, watching the magical sunset.',
      mapBtn: 'Show on map'
    }
  }
};

export type Language = 'SRB' | 'ENG';