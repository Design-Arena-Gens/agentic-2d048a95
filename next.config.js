/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['fa'],
    defaultLocale: 'fa',
    localeDetection: false,
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;

