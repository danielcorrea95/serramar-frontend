/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS,
    AWS_BUCKET: process.env.AWS_BUCKET,
    AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION,
    AWS_ROUTE: process.env.AWS_ROUTE,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rs-esportes-copas.s3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
