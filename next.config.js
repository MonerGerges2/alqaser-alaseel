/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    unoptimized: true, 
  },
  async headers() {
    return [
      {
        source: "/Fonts/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Content-Type",
            value: "font/ttf",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
