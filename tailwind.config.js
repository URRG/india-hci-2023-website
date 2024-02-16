/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        },
        extend: {
            fontFamily: {
                heading: ['var(--font-degular-display)', 'sans-serif'],
                body: ['var(--font-tt-hoves)', 'sans-serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/container-queries'),
        require('@tailwindcss/typography'),
        require('@headlessui/tailwindcss'),
        plugin(({ addUtilities }) => {
            addUtilities({
                // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
                '.horizontal-writing-tb': { writingMode: 'horizontal-tb' },
                '.vertical-writing-rl': { writingMode: 'vertical-rl' },
                '.vertical-writing-lr': { writingMode: 'vertical-lr' },
                // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
                '.orientation-mixed': { textOrientation: 'mixed' },
                '.orientation-upright': { textOrientation: 'upright' },
                '.orientation-sideways-right': {
                    textOrientation: 'sideways-right',
                },
                '.orientation-sideways': { textOrientation: 'sideways' },
                '.orientation-glyph': {
                    textOrientation: 'use-glyph-orientation',
                },
            });
        }),
    ],
};
