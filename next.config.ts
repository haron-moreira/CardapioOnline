import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'foodish-api.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'photo-cdn2.icons8.com',
                pathname: '/**',
            },

        ],
    },
};

export default nextConfig;
