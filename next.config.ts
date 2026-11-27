import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  reactCompiler: true,
  typedRoutes: true,
  images: {
    // Static export has no image optimizer, so a custom loader serves the
    // pre-sized variants from scripts/media-variants.mjs instead.
    loader: 'custom',
    loaderFile: './lib/image-loader.ts',
    // Match the generated variant widths to keep srcsets short.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [384],
  },
  experimental: {
    // Inline the (small) global stylesheet into each page's <head> so it
    // isn't a render-blocking request.
    inlineCss: true,
  },
  turbopack: {
    root: __dirname
  },
}

export default nextConfig
