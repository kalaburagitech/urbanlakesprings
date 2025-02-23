import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Ensures static export
  trailingSlash: true, // ✅ Adds trailing slash for SEO-friendly URLs
  images: {
    unoptimized: true, // ✅ Allows static images to be used without optimization
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
