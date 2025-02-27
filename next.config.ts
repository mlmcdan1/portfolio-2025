/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Fixes issues with Next.js image optimization
  },
  basePath: "/portfolio-2025", // Required for GitHub Pages
  assetPrefix: "/portfolio-2025",
};

module.exports = nextConfig;
