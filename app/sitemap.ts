import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sahooskitchen.com';
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/weekly-menu',
    '/menu',
    '/privacy-policy',
    '/terms-of-service',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Add dynamic pages here once they are created
  // For example, dish category pages, blog posts, etc.
  
  return [...staticPages];
} 