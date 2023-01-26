/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_TOKEN: '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',
  },
  images: {
    domains: ["media.licdn.com", "user-images.githubusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
  reactStrictMode: false,
};

module.exports = nextConfig;
