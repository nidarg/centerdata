const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    IPGEOLOCATION_API_KEY: process.env.IPGEOLOCATION_API_KEY,
  },
  images: {
    domains: ['www.datacompliancecentre.com'],
  }
};

module.exports = withNextIntl(nextConfig); 