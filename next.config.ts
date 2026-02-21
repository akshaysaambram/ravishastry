import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/ravishastry" : undefined,
  assetPrefix: isProd ? "/ravishastry/" : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
