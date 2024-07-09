/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vapiblocks-carhive.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      }
    ],
  },
};

module.exports = nextConfig;
