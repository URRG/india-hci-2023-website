/** @type {import('tailwindcss').Config} */

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
                xl: '1440px',
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
        require('@headlessui/tailwindcss'),
    ],
};
