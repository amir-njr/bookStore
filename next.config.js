/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{remotePatterns: [{protocol:"https",hostname:"itbook.store"}]}
}

module.exports = nextConfig
