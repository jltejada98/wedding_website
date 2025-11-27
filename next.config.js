/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: false,
  },
  eslint : {
    ignoreDuringBuilds : true,
  },
}

module.exports = nextConfig

