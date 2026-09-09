import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ponsanthanbotanicals.com",
        pathname: "/assets/images/hero/**",
      },
      {
        protocol: "https",
        hostname: "ayurvaid.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;