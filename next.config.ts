// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Add your standard Next.js options here
  reactStrictMode: true,

  // Custom Webpack configuration
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Server-specific configuration (if needed)
    }

    // Add any custom webpack configurations here if needed
    return config;
  },

  // Remove the i18n config as it's not needed with App Router
  // The i18n configuration is now handled by next-intl middleware
};

export default withNextIntl(nextConfig);
