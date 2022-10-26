/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: '/v3/:path*',
                destination: `https://www.googleapis.com/youtube/v3/:path*`,
            },
            {
                source: '/vi/:path*',
                destination: `https://i.ytimg.com/vi/:path*`,
            },
        ];
    },
};

module.exports = nextConfig;
