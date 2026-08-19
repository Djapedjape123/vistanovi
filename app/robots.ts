import type { MetadataRoute } from 'next';

const siteUrl = 'https://vistanovi.com'; // ili .rs, zavisno koji si kupio

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/','/private/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
