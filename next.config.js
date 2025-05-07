/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // required for static hosting
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true,
      domains: ['images.unsplash.com'],
   },
};

module.exports = nextConfig;
