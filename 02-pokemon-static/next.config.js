/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //en el array de dominios coloco todos los dominios permitidos
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
