/** @type {import('next').NextConfig} */

const STUDIO_REWRITE = {
  source: '/studio/:path*',
  destination:
    process.env.NODE_ENV === 'development' ? 'http://localhost:3333/studio/:path*' : '/studio/index.html',
};
const nextConfig = {
  reactStrictMode: true,
  // ssr and displayName are configured by default
  styledComponents: true,
  rewrites: async () => [STUDIO_REWRITE],
  images: {
    domains: ['cdn.sanity.io'],
  },
};

module.exports = nextConfig;
