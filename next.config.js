/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.google.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
