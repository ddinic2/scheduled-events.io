import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  // basePath: '/scheduled-events.io',
  // assetPrefix: '/scheduled-events.io',
  // basePath: '',
  // assetPrefix: '',
};

export default nextConfig;
