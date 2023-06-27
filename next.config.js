/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/site-template' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/site-template' : '',
}

module.exports = nextConfig
