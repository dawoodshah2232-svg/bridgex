import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bridgex",
  // trailingSlash is REQUIRED on GitHub Pages: each route must resolve to
  // /route/index.html, otherwise clean URLs 404 on direct refresh.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
