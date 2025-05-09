/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com']
  },
  eslint: {
    // Disable specific ESLint rules for the project
    ignoreDuringBuilds: true, // Ignore ESLint during build (use with caution)
  }
};

export default nextConfig;