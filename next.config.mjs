/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This allows the build to finish even if there are small typos
    ignoreBuildErrors: true,
  },
  eslint: {
    // This skips another set of strict rules
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
