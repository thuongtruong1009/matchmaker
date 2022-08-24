/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            aspectRatio: {
                '9/16': '9 / 16',
            },
            boxShadow: {
                nav: 'rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset',
            },
            maxWidth: {
                '8xl': '88rem',
                '9xl': '96rem',
            },
            fontSize: {
                h1: '2.5rem',
                h2: '2rem',
                h3: '1.25rem',
                h4: '1rem',
                h2: '1.5rem',
                h3: '1.5rem',
                h4: '1.25rem',
                'button-1': '18px',
                'button-2': '16px',
                'caption-1': '14px',
                'small-b': '12px',
                'small-r': '12px',
                'body-1': '24px',
                'body-2': '16px',
                'body-3': '14px',
                'body-2': '14px',
                display: '64px',
            },
            lineHeight: {
                h1: '52px',
                h2: '42px',
                h3: '26px',
                h4: '20px',
                h2: '32px',
                h3: '32px',
                h4: '26px',
                'button-1': '24px',
                'button-2': '24px',
                'caption-1': '18px',
                'small-b': '16px',
                'small-r': '16px',
                'body-1': '32px',
                'body-2': '24px',
                'body-3': '18px',
                'body-2': '18px',
                display: '82px',
            },
            colors: {
                neutral: {
                    100: '#2a2846',
                    80: '#55536B',
                    65: '#7F7E90',
                    60: '#7A838C',
                    40: '#AAA9B5',
                    20: '#D4D4DA',
                    10: '#EAE9ED',
                    5: '#F4F4F6',
                    0: '#fff',
                },
                primary: {
                    100: '#7A66C7',
                    80: '#C5C2F3',
                    65: '#F9F9FF',
                    50: '#7a56fe',
                    40: '#5D5FEF',
                    30: '#a48bfe',
                    20: '#F2EEFF',
                },
                thirdth: {
                    70: '#689f38',
                    60: '#00d084',
                    50: '#7bdcb5',
                    40: '#fcb900',
                    30: '#ff6900',
                },
                danger: '#FE5D5D',
                main: {
                    purple: '#7A56FE',
                    dark_purple: '#EAEAEA',
                    grey: '#343E58',
                    pink: '#fd65b7',
                },
            },
            fontFamily: {
                primary: 'SVN-Circular',
                secondary: 'SVN-Gilroy',
            },
        },
    },
    plugins: [],
};
