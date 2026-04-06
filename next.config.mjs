/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    // We must allow Unsplash URLs here so <Image /> can optimize them
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
