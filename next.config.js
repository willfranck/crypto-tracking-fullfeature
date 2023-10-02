/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'https://nextcryptotracker.vercel.app/' },
          { key: 'Access-Control-Allow-Origin', value: 'http://localhost:3000' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, XMLHttpRequest, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ]
  },

  images: {
    domains: ['cdn.coinranking.com', 'lh3.googleusercontent.com', 'nextcryptotracker.vercel.app', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.coinranking.com',
        port: '',
        pathname: '/components/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/components/**',
      },
      {
        protocol: 'https',
        hostname: 'nextcryptotracker.vercel.app',
        port: '',
        pathname: '/components/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost:3000',
        port: '',
        pathname: '/components/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
