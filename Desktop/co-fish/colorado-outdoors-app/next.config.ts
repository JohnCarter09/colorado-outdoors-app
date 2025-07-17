import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.clerk.dev'] // For Clerk user avatars
  }
};

export default nextConfig;
