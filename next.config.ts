import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["i.pinimg.com", "cdn.myanimelist.net", "www.nautiljon.com"],
  },
  typescript: {
    ignoreBuildErrors: true, // ❗ Ignores TypeScript errors on build
  },
};

export default nextConfig;
