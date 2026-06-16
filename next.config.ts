import type { NextConfig } from "next";
import { redirects } from "./src/lib/redirects";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Sanity-hosted testimonial photos are served from the Sanity image CDN;
      // next/image must allowlist the host or it refuses to optimize them.
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
