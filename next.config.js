/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: 'https://nextcryptotracker.vercel.app/' },
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
    remotePatterns: [
      'cdn.coinranking.com',
      'lh3.googleusercontent.com',
    ].map((hostname) => [
      {
        protocol: 'https',
        hostname,
        port: '',
      }
    ]),
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig
