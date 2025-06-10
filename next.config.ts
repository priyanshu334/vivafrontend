import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  plugins: [require("tailwind-scrollbar-hide")],

};

export default nextConfig;
