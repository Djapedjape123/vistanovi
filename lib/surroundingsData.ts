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
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161111/images_kbbwyi.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/%D0%9B%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0%D1%87%D0%BA%D0%BE+%D1%98%D0%B5%D0%B7%D0%B5%D1%80%D0%BE/@45.1652139,19.8011157,495m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b0f57ca84dec5:0xc7e030291c8d71eb!8m2!3d45.1653148!4d19.8041647!16zL20vMDk3MWI3?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'p2',
      name: 'Vidikovac Zmajevac',
      category: 'Priroda & Vidikovci',
      driveTime: '15 min vožnje',
      description: 'Jedan od najlepših vidikovaca na Fruškoj gori sa kojeg se pruža panoramski pogled na Srem. Savršeno mesto za zalazak sunca.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161239/22_jvtmdh.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/%D0%97%D0%BC%D0%B0%D1%98%D0%B5%D0%B2%D0%B0%D1%86/@45.1553754,19.7670695,5606m/data=!3m1!1e3!4m6!3m5!1s0x475b08b15fe2fcf1:0x6123a62f29764594!8m2!3d45.1571311!4d19.7801566!16s%2Fg%2F11f3xh0b19?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'p3',
      name: 'Izletište Popovica',
      category: 'Priroda & Vidikovci',
      driveTime: '12 min vožnje',
      description: 'Polazna tačka čuvenog Fruškogorskog maratona. Odlično za lagani treking, šetnju šumom i beg u potpuno zelenilo.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161307/23_qpb9ym.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/Izleti%C5%A1te+Popovica/@45.1845442,19.8197071,495m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b05601b242acb:0x5b513f212f7bc854!8m2!3d45.1845442!4d19.822282!16s%2Fg%2F11tgcrf79l?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'v1',
      name: 'Vinarija Kovačević',
      category: 'Vinarije & Restorani',
      driveTime: '25 min vožnje',
      description: 'Čuvena vinarija sa vrhunskim restoranom. Doživite pravu gastronomsku bajku uparenu sa najboljim vinima Fruške gore.',
      imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://www.google.com/maps?client=firefox-b-d&hs=UC0&sca_esv=e34115c41044c7f2&output=search&q=vinarija+kovacevic&source=lnms&fbs=ABfTbFVi9oS3HvbxoGyUbfjKCToTdHF_kYxL3VV9y8CggSYLVZmlk7HIdEM9mcQQR4DQpJe_Vau35VW2jobV9aGbcoaUELJbGfVFkiAcRzqoFMc8EmOgoW97Qbx3mCK4wTC2w3Zqc047tcRJ3rD8EDUxlBm2A7X1SfxY4_7X1Kdrv_yBko_wlU5v6MsBKHbwDU4rnE_ZbP-yaTwtH2pHpzIUU89TMjYZF9ut7JMpuRfPC5dZpfwSUn8&entry=mc&ved=1t:200715&ictx=111' 
    },
    {
      id: 'v2',
      name: 'Vinarija Salaxia (Rakovac)',
      category: 'Vinarije & Restorani',
      driveTime: '10 min vožnje',
      description: 'Autentična lokalna vinarija u susednom selu. Odličan ambijent za popodnevnu degustaciju vrhunskih crvenih i belih vina.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161434/33_uog9zb.jpg',
      googleMapsUrl: 'https://www.google.com/maps?client=firefox-b-d&hs=9WfV&sca_esv=e34115c41044c7f2&biw=1252&bih=589&output=search&q=Vinarija+Salaxia+(Rakovac)&source=lnms&fbs=ABfTbFVNiD0Uk5GmJNhY9Cc-l7v26LprAs6pGRhVns6W_GfpNbylwt7fdyIdqgQEFKHisqxM3oaw4NRwAQmWBqNf3L92w1qhf21gCSpHCBOvHlq82Z6rmvpQTHABURm_z8jWxiFVpaukpCzC7mmTl3nv2oLDeQZE0dGho_AilgDOE8qmv7Se06pfb7uRav1KKPeh5YffuKbfsKDsBWfJbeK5ups2CpP3EO6HjAPTc3yOp4IpY2twtKo&entry=mc&ved=1t:200715&ictx=111'
    },
    {
      id: 'v3',
      name: 'Restoran Vidikovac (Iriški Venac)',
      category: 'Vinarije & Restorani',
      driveTime: '15 min vožnje',
      description: 'Tradicionalna srpska kuhinja, divljač i specijaliteti ispod sača, sa terasom koja gleda na guste fruškogorske šume.',
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://www.google.com/maps/search/Restoran+Vidikovac+Iri%C5%A1ki+Venac/@45.1868765,19.8001099,15848m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'm1',
      name: 'Manastir Rakovac',
      category: 'Manastiri & Kultura',
      driveTime: '8 min vožnje',
      description: 'Jedan od najstarijih fruškogorskih manastira iz 15. veka. Odiše neverovatnim mirom i arhitekturom ušuškanom u prirodu.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161592/mana_fizb9i.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80+%D0%A0%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%D1%86,+%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80%D1%81%D0%BA%D0%B0+47,+%D0%A0%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%D1%86/@45.1846362,19.7721076,495m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b0f184c182cf1:0xef50bc348575fc05!8m2!3d45.1845388!4d19.7745994!16zL20vMGN5bjFw?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'm2',
      name: 'Manastir Vrdnik (Ravanica)',
      category: 'Manastiri & Kultura',
      driveTime: '25 min vožnje',
      description: 'Poznat i kao Sremska Ravanica, u njemu su nekada čuvane mošti kneza Lazara. Mesto od velikog istorijskog značaja.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161667/eee_g0z2de.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80+%D0%92%D1%80%D0%B4%D0%BD%D0%B8%D0%BA+-+%D0%A0%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8%D1%86%D0%B0/@45.1283957,19.7817559,496m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b0629407e9a61:0x219ec946b2cf868a!8m2!3d45.1283957!4d19.7843308!16zL20vMGN4NmRu?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3Dk'
    },
    {
      id: 's1',
      name: 'Fruške Terme & Vrdnička Kula',
      category: 'Spa & Relaksacija',
      driveTime: '25 min vožnje',
      description: 'Najluksuzniji spa kompleks u Srbiji. Preko 10 bazena sa termo-mineralnom vodom i etno naselje Vrdnička Kula za savršen izlet.',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://www.google.com/maps/search/fruske+terme/@45.1412197,19.7785649,496m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    }
  ],
  ENG: [
    {
      id: 'p1',
      name: 'Ledinci Lake',
      category: 'Nature & Viewpoints',
      driveTime: '10 min drive',
      description: 'The pearl of Fruška Gora located in a former quarry. Surrounded by steep cliffs, it is an ideal place for walking and incredible photos.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161111/images_kbbwyi.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/%D0%9B%D0%B5%D0%B4%D0%B8%D0%BD%D0%B0%D1%87%D0%BA%D0%BE+%D1%98%D0%B5%D0%B7%D0%B5%D1%80%D0%BE/@45.1652139,19.8011157,495m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b0f57ca84dec5:0xc7e030291c8d71eb!8m2!3d45.1653148!4d19.8041647!16zL20vMDk3MWI3?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'p2',
      name: 'Zmajevac Viewpoint',
      category: 'Nature & Viewpoints',
      driveTime: '15 min drive',
      description: 'One of the most beautiful viewpoints on Fruška Gora offering a panoramic view of Srem. Perfect spot for sunset.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161239/22_jvtmdh.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/%D0%97%D0%BC%D0%B0%D1%98%D0%B5%D0%B2%D0%B0%D1%86/@45.1553754,19.7670695,5606m/data=!3m1!1e3!4m6!3m5!1s0x475b08b15fe2fcf1:0x6123a62f29764594!8m2!3d45.1571311!4d19.7801566!16s%2Fg%2F11f3xh0b19?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'p3',
      name: 'Popovica Picnic Area',
      category: 'Nature & Viewpoints',
      driveTime: '12 min drive',
      description: 'The starting point of the famous Fruška Gora marathon. Great for light trekking, forest walks, and escaping into total greenery.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161307/23_qpb9ym.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/Izleti%C5%A1te+Popovica/@45.1845442,19.8197071,495m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b05601b242acb:0x5b513f212f7bc854!8m2!3d45.1845442!4d19.822282!16s%2Fg%2F11tgcrf79l?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'v1',
      name: 'Kovačević Winery',
      category: 'Wineries & Restaurants',
      driveTime: '25 min drive',
      description: 'A famous winery with a top-notch restaurant. Experience a true gastronomic fairytale paired with the best wines of Fruška Gora.',
      imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://www.google.com/maps?client=firefox-b-d&hs=UC0&sca_esv=e34115c41044c7f2&output=search&q=vinarija+kovacevic&source=lnms&fbs=ABfTbFVi9oS3HvbxoGyUbfjKCToTdHF_kYxL3VV9y8CggSYLVZmlk7HIdEM9mcQQR4DQpJe_Vau35VW2jobV9aGbcoaUELJbGfVFkiAcRzqoFMc8EmOgoW97Qbx3mCK4wTC2w3Zqc047tcRJ3rD8EDUxlBm2A7X1SfxY4_7X1Kdrv_yBko_wlU5v6MsBKHbwDU4rnE_ZbP-yaTwtH2pHpzIUU89TMjYZF9ut7JMpuRfPC5dZpfwSUn8&entry=mc&ved=1t:200715&ictx=111' 
    },
    {
      id: 'v2',
      name: 'Salaxia Winery (Rakovac)',
      category: 'Wineries & Restaurants',
      driveTime: '10 min drive',
      description: 'An authentic local winery in the neighboring village. Excellent ambiance for an afternoon tasting of premium red and white wines.',
     imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161434/33_uog9zb.jpg',
      googleMapsUrl: 'https://www.google.com/maps?client=firefox-b-d&hs=9WfV&sca_esv=e34115c41044c7f2&biw=1252&bih=589&output=search&q=Vinarija+Salaxia+(Rakovac)&source=lnms&fbs=ABfTbFVNiD0Uk5GmJNhY9Cc-l7v26LprAs6pGRhVns6W_GfpNbylwt7fdyIdqgQEFKHisqxM3oaw4NRwAQmWBqNf3L92w1qhf21gCSpHCBOvHlq82Z6rmvpQTHABURm_z8jWxiFVpaukpCzC7mmTl3nv2oLDeQZE0dGho_AilgDOE8qmv7Se06pfb7uRav1KKPeh5YffuKbfsKDsBWfJbeK5ups2CpP3EO6HjAPTc3yOp4IpY2twtKo&entry=mc&ved=1t:200715&ictx=111'
    },
    {
      id: 'v3',
      name: 'Vidikovac Restaurant (Iriški Venac)',
      category: 'Wineries & Restaurants',
      driveTime: '15 min drive',
      description: 'Traditional Serbian cuisine, game meat, and specialties under the bell, with a terrace overlooking dense Fruška Gora forests.',
      imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://www.google.com/maps/search/Restoran+Vidikovac+Iri%C5%A1ki+Venac/@45.1868765,19.8001099,15848m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'm1',
      name: 'Rakovac Monastery',
      category: 'Monasteries & Culture',
      driveTime: '8 min drive',
      description: 'One of the oldest Fruška Gora monasteries from the 15th century. It exudes incredible peace and architecture nestled in nature.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161592/mana_fizb9i.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80+%D0%A0%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%D1%86,+%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80%D1%81%D0%BA%D0%B0+47,+%D0%A0%D0%B0%D0%BA%D0%BE%D0%B2%D0%B0%D1%86/@45.1846362,19.7721076,495m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b0f184c182cf1:0xef50bc348575fc05!8m2!3d45.1845388!4d19.7745994!16zL20vMGN5bjFw?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      id: 'm2',
      name: 'Vrdnik Monastery (Ravanica)',
      category: 'Monasteries & Culture',
      driveTime: '25 min drive',
      description: 'Also known as Srem Ravanica, it once housed the relics of Prince Lazar. A place of great historical significance.',
      imageUrl: 'https://res.cloudinary.com/duomot4hp/image/upload/v1785161667/eee_g0z2de.jpg',
      googleMapsUrl: 'https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BD%D0%B0%D1%81%D1%82%D0%B8%D1%80+%D0%92%D1%80%D0%B4%D0%BD%D0%B8%D0%BA+-+%D0%A0%D0%B0%D0%B2%D0%B0%D0%BD%D0%B8%D1%86%D0%B0/@45.1283957,19.7817559,496m/data=!3m2!1e3!4b1!4m6!3m5!1s0x475b0629407e9a61:0x219ec946b2cf868a!8m2!3d45.1283957!4d19.7843308!16zL20vMGN4NmRu?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3Dk'
    },
    {
      id: 's1',
      name: 'Fruške Terme & Vrdnička Kula',
      category: 'Spa & Relaxation',
      driveTime: '25 min drive',
      description: 'The most luxurious spa complex in Serbia. Over 10 pools with thermo-mineral water and the ethno village Vrdnička Kula for a perfect trip.',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
      googleMapsUrl: 'https://www.google.com/maps/search/fruske+terme/@45.1412197,19.7785649,496m/data=!3m2!1e3!4b1?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D'
    }
  ]
};