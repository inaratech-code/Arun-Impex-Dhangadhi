/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Disable webpack cache to reduce build size for Cloudflare Pages
  webpack: (config, { dev, isServer }) => {
    // Disable persistent cache for Cloudflare Pages compatibility (25 MiB file limit)
    if (!dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig

