import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    externalDir: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@/legacy": require("path").resolve(__dirname, "../src"),

    };
    return config;
  },

};

export default nextConfig;
