import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/my-dev",
  assetPrefix: "/my-dev",
  // GitHub Pages cannot optimize images
  images: {
    unoptimized: true,
  },
};
export default nextConfig;