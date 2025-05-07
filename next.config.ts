import type { NextConfig } from "next";

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
};

export default nextConfig;

