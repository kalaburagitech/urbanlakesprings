import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // ✅ Allows static images
  },
  /* config options here */
};

export default nextConfig;
