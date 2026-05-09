import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/jobs",
        destination: "https://nexus.vimanasa.com/jobs",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

