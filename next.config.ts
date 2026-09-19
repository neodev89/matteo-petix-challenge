import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [50, 60, 70, 80, 90, 100],
  },
  allowedDevOrigins: ['192.168.1.139']
};

export default nextConfig;
