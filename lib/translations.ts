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
    },
    about: {
      eyebrow: 'O vikendici',
      title: 'Vista Novi',
      subtitle: 'Vaš mir iznad svakodnevice',
      intro: 'Mesto gde vreme usporava, a priroda preuzima glavnu ulogu. Okružena zelenilom i prelepim pogledom, ova vikendica pruža savršen beg od gradske gužve i idealna je za parove, vikend odmor ili opuštanje sa najbližima.',
      features: {
        pool: {
          title: 'Jutra uz kafu i izlazak sunca',
          text: 'Uživajte u privatnom bazenu i mirnim jutrima gde jedini zvuk koji čujete je priroda oko vas.',
        },
        evening: {
          title: 'Večeri pod zvezdama',
          text: 'Tišina koju prekidaju samo zvuci prirode - savršeno za opuštanje posle dugog dana.',
        },
        interior: {
          title: 'Topao i moderan enterijer',
          text: 'Sve što vam je potrebno za udoban boravak i potpuni odmor, u prostoru osmišljenom da se osećate kao kod kuće.',
        },
      },
      forWho: {
        title: 'Za koga je Vista Novi',
        idealTitle: 'Idealno za',
        idealItems: [
          'Parove',
          'Vikend odmor',
          'Opuštanje sa najbližima',
          'Goste koji cene mir i prirodu',
        ],
        notTitle: 'Nije namenjeno za',
        notItems: [
          'Žurke i glasna okupljanja',
          'Velike proslave',
          'Grupe koje traže "provod"',
        ],
      },
      quote: 'Dođite da usporite, udahnete punim plućima i uživate u pogledu koji se pamti.',
      languages: {
        label: 'Komunikacija na oba jezika, bez brige oko sporazumevanja',
      },
      cta: {
        title: 'Spremni da usporite?',
        button: 'Rezerviši svoj boravak',
      },
    },
    // NOVO: Tekstovi za stranicu Rezervacija (Srpski)
    booking: {
      backHome: 'Nazad na početnu',
      step: 'KORAK',
      of: 'OD',
      step1: {
        title: 'Kada planirate dolazak?',
        subtitle: 'Izaberite slobodne datume (Cena: 150€ / noć)',
        totalFor: 'Ukupno za',
        nightSingle: 'noćenje',
        nightPlural: 'noćenja',
        confirmDates: 'Potvrdi datume',
        pleaseSelect: '*Molimo izaberite datum dolaska i odlaska na kalendaru iznad.'
      },
      step2: {
        title: 'Detalji boravka',
        guests: 'Broj gostiju',
        maxGuests: 'Maksimalno 6 osoba',
        pets: 'Dolazim sa kućnim ljubimcem',
        petsDesc: 'Vaši krzneni prijatelji su dobrodošli',
        backBtn: 'Nazad',
        nextBtn: 'Dalje'
      },
      step3: {
        title: 'Vaši podaci',
        nameLabel: 'Ime i prezime',
        namePlaceholder: 'Unesite vaše ime',
        emailLabel: 'Email adresa',
        emailPlaceholder: 'primer@email.com',
        phoneLabel: 'Broj telefona',
        phonePlaceholder: '+381 60 123 4567',
        summaryTitle: 'Pregled rezervacije',
        nightsLabel: 'Noćenja:',
        nightsText: 'noći',
        guestsLabel: 'Gosti:',
        guestsText: 'osobe',
        petsLabel: 'Ljubimci:',
        yes: 'Da',
        no: 'Ne',
        totalLabel: 'Ukupno:',
        sending: 'Šaljemo...',
        submitBtn: 'Pošalji zahtev'
      },
      step4: {
        successTitle: 'Zahtev je uspešno poslat!',
        successDesc1: 'Hvala vam na interesovanju, ',
        successDesc2: '. Vlasnik će vas kontaktirati na ostavljeni email ili telefon u najkraćem roku kako bi potvrdio rezervaciju.',
        backHomeBtn: 'Vrati se na početnu',
        whatsappBtn: 'Pišite nam na WhatsApp'
      }
    },
    weather: {
      subtitle: 'Planiraj svoju posetu',
      title: 'Vreme na Fruškoj gori',
      today: 'Danas',
      tomorrow: 'Sutra'
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
    weather: {
      subtitle: 'Plan your visit',
      title: 'Weather on Fruška Gora',
      today: 'Today',
      tomorrow: 'Tomorrow'
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
    },
    about: {
      eyebrow: 'About the house',
      title: 'Vista Novi',
      subtitle: 'Your peace above everyday life',
      intro: 'A place where time slows down and nature takes the lead role. Surrounded by greenery and a beautiful view, this house offers a perfect escape from the city rush and is ideal for couples, weekend getaways, or relaxing with your closest ones.',
      features: {
        pool: {
          title: 'Mornings with coffee and sunrise',
          text: 'Enjoy the private pool and peaceful mornings where the only sound you hear is nature around you.',
        },
        evening: {
          title: 'Evenings under the stars',
          text: 'Silence broken only by the sounds of nature - perfect for unwinding after a long day.',
        },
        interior: {
          title: 'Warm and modern interior',
          text: 'Everything you need for a comfortable stay and complete relaxation, in a space designed to feel like home.',
        },
      },
      forWho: {
        title: 'Who Vista Novi is for',
        idealTitle: 'Ideal for',
        idealItems: [
          'Couples',
          'Weekend getaways',
          'Relaxing with loved ones',
          'Guests who value peace and nature',
        ],
        notTitle: 'Not intended for',
        notItems: [
          'Parties and loud gatherings',
          'Large celebrations',
          'Groups looking for a "party" scene',
        ],
      },
      quote: 'Come to slow down, breathe deeply, and enjoy a view you\'ll remember.',
      languages: {
        label: 'Communication in both languages, no worries about understanding each other',
      },
      cta: {
        title: 'Ready to slow down?',
        button: 'Book your stay',
      },
    },
    // NOVO: Tekstovi za stranicu Rezervacija (Engleski)
    booking: {
      backHome: 'Back to home',
      step: 'STEP',
      of: 'OF',
      step1: {
        title: 'When are you planning to arrive?',
        subtitle: 'Select available dates (Price: 150€ / night)',
        totalFor: 'Total for',
        nightSingle: 'night',
        nightPlural: 'nights',
        confirmDates: 'Confirm dates',
        pleaseSelect: '*Please select check-in and check-out dates on the calendar above.'
      },
      step2: {
        title: 'Stay details',
        guests: 'Number of guests',
        maxGuests: 'Maximum 6 people',
        pets: 'I am coming with a pet',
        petsDesc: 'Your furry friends are welcome',
        backBtn: 'Back',
        nextBtn: 'Next'
      },
      step3: {
        title: 'Your details',
        nameLabel: 'Full name',
        namePlaceholder: 'Enter your name',
        emailLabel: 'Email address',
        emailPlaceholder: 'example@email.com',
        phoneLabel: 'Phone number',
        phonePlaceholder: '+381 60 123 4567',
        summaryTitle: 'Booking summary',
        nightsLabel: 'Nights:',
        nightsText: 'nights',
        guestsLabel: 'Guests:',
        guestsText: 'people',
        petsLabel: 'Pets:',
        yes: 'Yes',
        no: 'No',
        totalLabel: 'Total:',
        sending: 'Sending...',
        submitBtn: 'Send request'
      },
      step4: {
        successTitle: 'Request sent successfully!',
        successDesc1: 'Thank you for your interest, ',
        successDesc2: '. The owner will contact you via email or phone as soon as possible to confirm the reservation.',
        backHomeBtn: 'Return to home',
        whatsappBtn: 'Message us on WhatsApp'
      }
    }
  },
};

export type Language = 'SRB' | 'ENG';