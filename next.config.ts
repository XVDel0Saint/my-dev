import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/my-dev",
  assetPrefix: "/my-dev",
  // GitHub Pages cannot optimize images
  images: {
    unoptimized: true,
  },
};
export default nextConfig;