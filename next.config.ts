import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    unoptimized: true
  },
  turbopack: {
    root: __dirname
  },
}

export default nextConfig
