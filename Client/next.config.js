/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akamaividz2.zee5.com",
      },
    ],
  },
};

module.exports = nextConfig;
