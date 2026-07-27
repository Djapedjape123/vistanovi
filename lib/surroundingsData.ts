// lib/surroundingsData.ts

export type SurroundingCategorySRB = 'Sve' | 'Priroda & Vidikovci' | 'Vinarije & Restorani' | 'Manastiri & Kultura' | 'Spa & Relaksacija';
export type SurroundingCategoryENG = 'All' | 'Nature & Viewpoints' | 'Wineries & Restaurants' | 'Monasteries & Culture' | 'Spa & Relaxation';

export type SurroundingCategory = SurroundingCategorySRB | SurroundingCategoryENG;

export interface CityDistance {
  city: string;
  time: string;
  distance: string;
}

export interface SurroundingPlace {
  id: string;
  name: string;
  category: SurroundingCategory;
  driveTime: string;
  description: string;
  imageUrl: string;
  googleMapsUrl: string;
}

// KATEGORIJE
export const surroundingCategories = {
  SRB: ['Sve', 'Priroda & Vidikovci', 'Vinarije & Restorani', 'Manastiri & Kultura', 'Spa & Relaksacija'],
  ENG: ['All', 'Nature & Viewpoints', 'Wineries & Restaurants', 'Monasteries & Culture', 'Spa & Relaxation']
};

// VIZUELNA TRAKA (Gradovi)
export const cityDistances = {
  SRB: [
    { city: 'Novi Sad', time: '15-20 min', distance: '12 km' },
    { city: 'Beograd', time: '1h 15 min', distance: '85 km' },
    { city: 'Aerodrom Nikola Tesla', time: '1h', distance: '75 km' },
    { city: 'Sremski Karlovci', time: '25 min', distance: '20 km' },
  ],
  ENG: [
    { city: 'Novi Sad', time: '15-20 min', distance: '12 km' },
    { city: 'Belgrade', time: '1h 15 min', distance: '85 km' },
    { city: 'Nikola Tesla Airport', time: '1h', distance: '75 km' },
    { city: 'Sremski Karlovci', time: '25 min', distance: '20 km' },
  ]
};

// BAZA ATRAKCIJA OKO LEDINACA
export const surroundingsPlaces = {
  SRB: [
    {
      id: 'p1',
      name: 'Ledinačko jezero',
      category: 'Priroda & Vidikovci',
      driveTime: '10 min vožnje',
      description: 'Biser Fruške gore smešten na mestu bivšeg kamenoloma. Okruženo strmim liticama, idealno je mesto za šetnju i neverovatne fotografije.',
      imageUrl: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/9hLqL5KqzJw28U189'
    },
    {
      id: 'p2',
      name: 'Vidikovac Zmajevac',
      category: 'Priroda & Vidikovci',
      driveTime: '15 min vožnje',
      description: 'Jedan od najlepših vidikovaca na Fruškoj gori sa kojeg se pruža panoramski pogled na Srem. Savršeno mesto za zalazak sunca.',
      imageUrl: 'https://images.unsplash.com/photo-1506744626753-1fa28f6e511e?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/qJzW1K7x5nJqR5b56'
    },
    {
      id: 'p3',
      name: 'Izletište Popovica',
      category: 'Priroda & Vidikovci',
      driveTime: '12 min vožnje',
      description: 'Polazna tačka čuvenog Fruškogorskog maratona. Odlično za lagani treking, šetnju šumom i beg u potpuno zelenilo.',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/R1T2dY4v9Y3u6bQ36'
    },
    {
      id: 'v1',
      name: 'Vinarija Kovačević',
      category: 'Vinarije & Restorani',
      driveTime: '25 min vožnje',
      description: 'Čuvena vinarija sa vrhunskim restoranom. Doživite pravu gastronomsku bajku uparenu sa najboljim vinima Fruške gore.',
      imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/mX1Y1Q3Z1J7Y1Q3Z7' 
    },
    {
      id: 'v2',
      name: 'Vinarija Salaxia (Rakovac)',
      category: 'Vinarije & Restorani',
      driveTime: '10 min vožnje',
      description: 'Autentična lokalna vinarija u susednom selu. Odličan ambijent za popodnevnu degustaciju vrhunskih crvenih i belih vina.',
      imageUrl: 'https://images.unsplash.com/photo-1560684352-8497838a2229?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/SalaxiaLink123'
    },
    {
      id: 'v3',
      name: 'Restoran Vidikovac (Iriški Venac)',
      category: 'Vinarije & Restorani',
      driveTime: '15 min vožnje',
      description: 'Tradicionalna srpska kuhinja, divljač i specijaliteti ispod sača, sa terasom koja gleda na guste fruškogorske šume.',
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/RestoranVidikovac'
    },
    {
      id: 'm1',
      name: 'Manastir Rakovac',
      category: 'Manastiri & Kultura',
      driveTime: '8 min vožnje',
      description: 'Jedan od najstarijih fruškogorskih manastira iz 15. veka. Odiše neverovatnim mirom i arhitekturom ušuškanom u prirodu.',
      imageUrl: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/ManastirRakovac'
    },
    {
      id: 'm2',
      name: 'Manastir Vrdnik (Ravanica)',
      category: 'Manastiri & Kultura',
      driveTime: '25 min vožnje',
      description: 'Poznat i kao Sremska Ravanica, u njemu su nekada čuvane mošti kneza Lazara. Mesto od velikog istorijskog značaja.',
      imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/ManastirVrdnik'
    },
    {
      id: 's1',
      name: 'Fruške Terme & Vrdnička Kula',
      category: 'Spa & Relaksacija',
      driveTime: '25 min vožnje',
      description: 'Najluksuzniji spa kompleks u Srbiji. Preko 10 bazena sa termo-mineralnom vodom i etno naselje Vrdnička Kula za savršen izlet.',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/FruskeTerme'
    }
  ],
  ENG: [
    {
      id: 'p1',
      name: 'Ledinci Lake',
      category: 'Nature & Viewpoints',
      driveTime: '10 min drive',
      description: 'The pearl of Fruška Gora located in a former quarry. Surrounded by steep cliffs, it is an ideal place for walking and incredible photos.',
      imageUrl: 'https://images.unsplash.com/photo-1543872084-c7bd3822856f?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/9hLqL5KqzJw28U189'
    },
    {
      id: 'p2',
      name: 'Zmajevac Viewpoint',
      category: 'Nature & Viewpoints',
      driveTime: '15 min drive',
      description: 'One of the most beautiful viewpoints on Fruška Gora offering a panoramic view of Srem. Perfect spot for sunset.',
      imageUrl: 'https://images.unsplash.com/photo-1506744626753-1fa28f6e511e?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/qJzW1K7x5nJqR5b56'
    },
    {
      id: 'p3',
      name: 'Popovica Picnic Area',
      category: 'Nature & Viewpoints',
      driveTime: '12 min drive',
      description: 'The starting point of the famous Fruška Gora marathon. Great for light trekking, forest walks, and escaping into total greenery.',
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/R1T2dY4v9Y3u6bQ36'
    },
    {
      id: 'v1',
      name: 'Kovačević Winery',
      category: 'Wineries & Restaurants',
      driveTime: '25 min drive',
      description: 'A famous winery with a top-notch restaurant. Experience a true gastronomic fairytale paired with the best wines of Fruška Gora.',
      imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/mX1Y1Q3Z1J7Y1Q3Z7' 
    },
    {
      id: 'v2',
      name: 'Salaxia Winery (Rakovac)',
      category: 'Wineries & Restaurants',
      driveTime: '10 min drive',
      description: 'An authentic local winery in the neighboring village. Excellent ambiance for an afternoon tasting of premium red and white wines.',
      imageUrl: 'https://images.unsplash.com/photo-1560684352-8497838a2229?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/SalaxiaLink123'
    },
    {
      id: 'v3',
      name: 'Vidikovac Restaurant (Iriški Venac)',
      category: 'Wineries & Restaurants',
      driveTime: '15 min drive',
      description: 'Traditional Serbian cuisine, game meat, and specialties under the bell, with a terrace overlooking dense Fruška Gora forests.',
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/RestoranVidikovac'
    },
    {
      id: 'm1',
      name: 'Rakovac Monastery',
      category: 'Monasteries & Culture',
      driveTime: '8 min drive',
      description: 'One of the oldest Fruška Gora monasteries from the 15th century. It exudes incredible peace and architecture nestled in nature.',
      imageUrl: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/ManastirRakovac'
    },
    {
      id: 'm2',
      name: 'Vrdnik Monastery (Ravanica)',
      category: 'Monasteries & Culture',
      driveTime: '25 min drive',
      description: 'Also known as Srem Ravanica, it once housed the relics of Prince Lazar. A place of great historical significance.',
      imageUrl: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/ManastirVrdnik'
    },
    {
      id: 's1',
      name: 'Fruške Terme & Vrdnička Kula',
      category: 'Spa & Relaxation',
      driveTime: '25 min drive',
      description: 'The most luxurious spa complex in Serbia. Over 10 pools with thermo-mineral water and the ethno village Vrdnička Kula for a perfect trip.',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://maps.app.goo.gl/FruskeTerme'
    }
  ]
};