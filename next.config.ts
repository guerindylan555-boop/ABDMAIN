import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.prismic.io" },
      { protocol: "https", hostname: "cdn.sanity.io" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/tarifs",
        destination: "/offres",
        permanent: true,
      },
      {
        source: "/tarifs/",
        destination: "/offres",
        permanent: true,
      },
      {
        source: "/tarifs/:slug",
        destination: "/offres#:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
