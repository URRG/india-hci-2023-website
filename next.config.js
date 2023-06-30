/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/2023' : undefined,
    output: 'export',
};

module.exports = withVideos(nextConfig);
