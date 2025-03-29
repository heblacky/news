/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placehold.co', 'images.unsplash.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig 