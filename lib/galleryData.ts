// lib/galleryData.ts

export type Category = 'Sve' | 'Bazen' | 'Enterijer' | 'Druženje' | 'Pogled';

export interface GalleryItem {
  id: number;
  url: string;
  category: Category;
  title?: string;
  isHero?: boolean;
}

export const galleryCategories: Category[] = ['Sve', 'Bazen', 'Enterijer', 'Druženje', 'Pogled'];

// Podaci za "Stories" traku (filterCategory MORA da se poklapa sa Category tipovima)
export const galleryStories = [
  { id: 'story1', title: 'Bazen', coverImage: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991847/WhatsApp_Image_2026-07-20_at_12.23.04_2_odplsd.jpg', filterCategory: 'Bazen' },
  { id: 'story2', title: 'Unutrašnji deo', coverImage: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992536/WhatsApp_Image_2026-07-20_at_12.23.04_11_agedxv.jpg', filterCategory: 'Enterijer' },
  { id: 'story3', title: 'Druženje', coverImage: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992027/WhatsApp_Image_2026-07-20_at_12.24.56_2_ssikv9.jpg', filterCategory: 'Druženje' },
  { id: 'story4', title: 'Pogled', coverImage: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992548/WhatsApp_Image_2026-07-20_at_12.24.55_5_bzybvm.jpg', filterCategory: 'Pogled' },
];

// Generišemo 29 slika 
export const galleryItems: GalleryItem[] = [
  // 1-10 Bazen
  { id: 1, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992548/WhatsApp_Image_2026-07-20_at_12.24.55_5_bzybvm.jpg', category: 'Bazen', isHero: true },
  { id: 2, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992407/WhatsApp_Image_2026-07-20_at_12.24.56_mr3rzr.jpg', category: 'Bazen' },
  { id: 3, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992379/WhatsApp_Image_2026-07-20_at_12.24.56_1_gvktyd.jpg', category: 'Bazen' },
  { id: 4, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992363/WhatsApp_Image_2026-07-20_at_12.23.04_3_sltrzb.jpg', category: 'Bazen' },
  { id: 5, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992227/WhatsApp_Image_2026-07-20_at_12.24.56_7_inrk37.jpg', category: 'Bazen' },
  { id: 6, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992184/WhatsApp_Image_2026-07-20_at_12.24.57_1_ubg4mu.jpg', category: 'Bazen', isHero: true },
  { id: 7, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992173/WhatsApp_Image_2026-07-20_at_12.24.57_2_fgtusu.jpg', category: 'Bazen' },
  { id: 8, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992129/WhatsApp_Image_2026-07-20_at_12.23.04_2_siuslx.jpg', category: 'Bazen' },
  { id: 9, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991859/WhatsApp_Image_2026-07-20_at_12.23.04_3_q98yht.jpg', category: 'Bazen' },
  { id: 10, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991847/WhatsApp_Image_2026-07-20_at_12.23.04_2_odplsd.jpg', category: 'Bazen' },

  // 11-19 Enterijer
  { id: 11, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991722/WhatsApp_Image_2026-07-20_at_12.23.02_kjui5m.jpg', category: 'Enterijer', isHero: true },
  { id: 12, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991729/WhatsApp_Image_2026-07-20_at_12.23.02_1_q96aag.jpg', category: 'Enterijer' },
  { id: 13, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991747/WhatsApp_Image_2026-07-20_at_12.23.03_1_op1kji.jpg', category: 'Enterijer' },
  { id: 14, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991871/WhatsApp_Image_2026-07-20_at_12.23.04_4_ybc3rk.jpg', category: 'Enterijer' },
  { id: 15, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991882/WhatsApp_Image_2026-07-20_at_12.23.04_5_x671jp.jpg', category: 'Enterijer' },
  { id: 16, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991896/WhatsApp_Image_2026-07-20_at_12.23.04_6_z9fb7x.jpg', category: 'Enterijer', isHero: true },
  { id: 17, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991915/WhatsApp_Image_2026-07-20_at_12.23.04_7_tw0gav.jpg', category: 'Enterijer' },
  { id: 18, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784991981/WhatsApp_Image_2026-07-20_at_12.23.04_10_xikkjl.jpg', category: 'Enterijer' },
  { id: 19, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992013/WhatsApp_Image_2026-07-20_at_12.23.05_1_cadm3l.jpg', category: 'Enterijer' },

  // 20-25 Druženje
  { id: 20, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992313/WhatsApp_Image_2026-07-20_at_12.24.56_3_vlb63p.jpg', category: 'Druženje', isHero: true },
  { id: 21, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992291/WhatsApp_Image_2026-07-20_at_12.24.56_4_epjegz.jpg', category: 'Druženje' },
  { id: 22, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992242/WhatsApp_Image_2026-07-20_at_12.24.56_6_tdb3by.jpg', category: 'Druženje' },
  { id: 23, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992194/WhatsApp_Image_2026-07-20_at_12.24.57_twsoob.jpg', category: 'Druženje' },
  { id: 24, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992065/WhatsApp_Image_2026-07-20_at_12.24.55_b32ycg.jpg', category: 'Druženje', isHero: true },
  { id: 25, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992087/WhatsApp_Image_2026-07-20_at_12.24.55_2_qrsutf.jpg', category: 'Druženje' },

  // 26-29 Pogled
  { id: 26, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992173/WhatsApp_Image_2026-07-20_at_12.24.57_2_fgtusu.jpg', category: 'Pogled' },
  { id: 27, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992258/WhatsApp_Image_2026-07-20_at_12.23.03_4_g0wdkw.jpg', category: 'Pogled' },
  { id: 28, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992437/WhatsApp_Image_2026-07-20_at_12.24.55_4_ouuie4.jpg', category: 'Pogled' },
  { id: 29, url: 'https://res.cloudinary.com/duomot4hp/image/upload/v1784992548/WhatsApp_Image_2026-07-20_at_12.24.55_5_bzybvm.jpg', category: 'Pogled' },
];