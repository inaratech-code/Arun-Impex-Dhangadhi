/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This creates a static export
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig

