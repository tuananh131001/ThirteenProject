/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.licdn.com", "user-images.githubusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  reactStrictMode: false
};

module.exports = nextConfig;
