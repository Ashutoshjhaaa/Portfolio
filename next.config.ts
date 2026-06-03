import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
      },
      {
        protocol: "https",
        hostname: "hits.sh",
      },
      {
        protocol: "https",
        hostname: "t2.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
