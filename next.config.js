/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

const isBasePathSet = !!process.env.BASE_PATH;

const nextConfig = {
    basePath: isBasePathSet ? process.env.BASE_PATH : undefined,
    images: {
        unoptimized: true,
    },
    output: 'export',
};

module.exports = withVideos(nextConfig);
