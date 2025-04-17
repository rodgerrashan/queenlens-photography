import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    domains: ['www.queenlens.lk'],
  },

  
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
