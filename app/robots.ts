import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = 'https://agentic-2d048a95.vercel.app';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  };
}

