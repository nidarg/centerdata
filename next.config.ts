import type { NextConfig } from "next";
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

    return config; // Always return the modified config
  },

  i18n: {
    locales: ['en', 'da', 'sv', 'no', 'fi'],
    defaultLocale: 'en',
  },
};

export default withNextIntl(nextConfig);

