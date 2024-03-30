/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "flowbite.s3.amazonaws.com",
    ],
  },
};

export default nextConfig;
