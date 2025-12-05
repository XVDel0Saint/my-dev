import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/my-dev" : "",
  assetPrefix: isProd ? "/my-dev/" : "",
  images: {
    unoptimized: true, // GitHub Pages requires this
  },
};

export default nextConfig;