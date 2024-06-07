/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/clozer-bc97fb95-images/RKAs4VxFlOZ1q2uWhD6UIYgybuj2/avatar-1717568012.png',
      },
    ],
  },
}

module.exports = nextConfig
