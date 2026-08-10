import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every route is prerendered, so the site ships as plain files in out/.
  // That is what Cloudflare Pages serves.
  output: "export",
  devIndicators: false,
  poweredByHeader: false,
  images: {
    // No Node image optimizer exists on a static host.
    unoptimized: true,
  },
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
