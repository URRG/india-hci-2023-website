import localFont from 'next/font/local';

const degularDisplay = localFont({
    src: [
        {
            path: '../public/fonts/Degular/Degular Display Thin.ttf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/Degular/Degular Display Thin Italic.ttf',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../public/fonts/Degular/Degular Display Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/Degular/Degular Display Light Italic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../public/fonts/Degular/Degular Display Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Degular/Degular Display Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/Degular/Degular Display Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/Degular/Degular Display Medium Italic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../public/fonts/Degular/Degular Display Semibold.ttf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/Degular/Degular Display Semibold Italic.ttf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../public/fonts/Degular/Degular Display Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/Degular/Degular Display Bold Italic.ttf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../public/fonts/Degular/Degular Display Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../public/fonts/Degular/Degular Display Black Italic.ttf',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-degular-display',
});

const ttHoves = localFont({
    src: [
        {
            path: '../public/fonts/TT Hoves/TT Hoves Hairline.otf',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Hairline Italic.otf',
            weight: '100',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Thin.otf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Thin Italic.otf',
            weight: '200',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Light Italic.otf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Italic.otf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Medium Italic.otf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Demibold.otf',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Demibold Italic.otf',
            weight: '600',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Extrabold.otf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Extrabold Italic.otf',
            weight: '800',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Bold Italic.otf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Black.otf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../public/fonts/TT Hoves/TT Hoves Black Italic.otf',
            weight: '900',
            style: 'italic',
        },
    ],
    variable: '--font-tt-hoves',
});

export { degularDisplay, ttHoves };
