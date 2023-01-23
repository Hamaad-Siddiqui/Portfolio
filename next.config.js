/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  domains: ['cdn.sanity.io'],
 },
 experimental: {
  appDir: true,
 },
};

module.exports = nextConfig;
