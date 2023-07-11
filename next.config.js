/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  swcMinify: false,
  env: {
    NEXT_PUBLIC_URL: "https://api.mokletscience.com/api/v1",
    NEXT_PUBLIC_API_TEST: "https://api-stapa-app.vercel.app/api/v1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
