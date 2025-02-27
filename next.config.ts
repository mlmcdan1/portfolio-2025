/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Ensures images load properly
  },
  distDir: ".next", // Default Next.js build folder (important for Vercel!)
};

module.exports = nextConfig;
