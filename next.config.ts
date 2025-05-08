import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'foodish-api.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
