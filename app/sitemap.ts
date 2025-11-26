import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://agentic-2d048a95.vercel.app';
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/products`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}

