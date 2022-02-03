/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  target: 'serverless',
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    };
    return config;
  },
};

module.exports = nextConfig;
