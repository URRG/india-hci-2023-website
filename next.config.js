/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/2023' : undefined,
    output: 'export',
};

module.exports = nextConfig;
