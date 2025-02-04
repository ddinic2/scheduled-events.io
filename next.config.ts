// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",

  async headers() {
    return [
      {
        source: "/(.*)", // Apply headers to all routes
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // OR "SAMEORIGIN" if you want to limit it to your own domain
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Or restrict to your FSM domain
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,POST,PUT,DELETE,OPTIONS",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://your-fsm-container.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;