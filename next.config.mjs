/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',  // Explicitly set output directory
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server-side features since we're doing static export
  experimental: {
    appDir: true,
    serverActions: false,
  },
};

export default nextConfig;