import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
    ],
    qualities: [75, 85, 90, 95, 100]
  },
  output: 'standalone',
};

export default nextConfig;
