import type { NextConfig } from "next";

const repoName = "my-dev";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Required for GitHub Pages static hosting
  output: "export",

  // Required because Pages serves under /my-dev
  basePath: isProd ? `/${repoName}` : "",

  // Required so CSS/JS assets load correctly
  assetPrefix: isProd ? `/${repoName}/` : "",

  // GitHub Pages cannot optimize images
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
