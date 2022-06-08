const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    fontFamily: {
        sans: ['BrandonText', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
        10: ['10px', {
            letterSpacing: '0.04em',
            lineHeight: '12px', // or 18px (regular/semibold) or 15px (bold)
        }],
        12: ['12px', {
            letterSpacing: '0.03em', // or 0.02em (semibold)
            lineHeight: '14px', // or 18px (bold)
        }],
        14: ['14px', {
            letterSpacing: '0.01em', // or nothing (regular/bold)
            lineHeight: '16px',
        }],
        16: ['16px', {
            lineHeight: '18px', // or 19px (regular)
        }],
        18: ['18px', {
            lineHeight: '21px', // or 22px (bold)
        }],
        20: ['20px', {
            lineHeight: '25px', // or 36px (regular/semibold)
        }],
        24: ['24px', {
            lineHeight: '28px', // or 29px (semibold) or 43px (regular)
        }],
        28: ['28px', {
            letterSpacing: '-0.01em', // or nothing (regular/bold)
            lineHeight: '42px', // or 50px (regular/semibold)
        }],
        32: ['32px', {
            letterSpacing: '-0.01em', // or nothing (regular/bold)
            lineHeight: '48px', // or 57px (semibold)
        }],
        36: ['36px', {
            letterSpacing: '-0.01em', // or nothing (regular)
            lineHeight: '64px', // or 54px (bold)
        }],
        40: ['40px', {
            letterSpacing: '-0.02em', // or -0.01em (regular)
            lineHeight: '72px', // or 60px (bold)
        }],
    },
    fontWeight: {
        regular: 400,
        semibold: 500,
        bold: 700,
    },
    colors: {
        // TextKit Brand Colors
        navy: '#293C89',
        magenta: '#E1207B',
        teal: '#3FB8C0',

        // Primary Colors
        white: '#FFFFFF',
        primary: {
            d2: '#2F49C1', // Active
            d1: '#3A55CF', // Hover
            DEFAULT: '#4B64D7',
            l1: '#B0BAEB', // Disabled
        },
        main: {
            DEFAULT: '#2D2D2D',
            l1: '#414141',
            l2: '#747474',
            l3: '#B1B1B1',
        },
        background: {
            DEFAULT: '#FFFFFF',
            hover: '#EEF1FB',
            spacer: '#E5E5E5',
            secondary: '#F3F3F3',
            navigation: '#FCFCFC',
        },
        success: {
            DEFAULT: '#347F4D',
            l1: '#58D07E',
            l2: '#EDF9F0',
        },
        warning: {
            DEFAULT: '#A36127',
            l1: '#FE9B6C',
            l2: '#FFF4EC',
        },
        error: {
            DEFAULT: '#C92F24',
            l1: '#F17E7E',
            l2: '#FCEAE8',
        },
        info: {
            d1: '#134CEE', // Active
            DEFAULT: '#285FFA',
            l1: '#8EACFB',
            l2: '#EBF1FF',
        },

        // Secondary Colors
        stark: '#4B9BFF',
        martell: '#50B2A0',
        dothraki: '#9258E7',
        mormont: '#FFB46E',
        tyrell: '#FF73C3',
        kahstark: '#FFD76E',
        lannister: '#FF5F5F',
        targaryen: '#9BE169',
        tarly: '#5FC8FF',

        // OLD
        gray: {
            hover: 'hsl(229, 63%, 96%)',
            active: 'hsl(229.3, 63.6%, 94%)',
            secondary: 'hsl(0, 0%, 93%)',
            spacer: 'hsl(0, 0%, 90%)', // #E6E6E6
            highlight: 'hsl(0, 0%, 99%)', // #FCFCFC
            shadow: 'hsla(0, 0%, 12%, 0.15)',
        },
    },
    boxShadow: {
        modal: '0px 4px 10px rgba(128, 128, 128, 0.3)',
        tooltip: '0px 2px 4px rgba(128, 128, 128, 0.25)',
        popover: '0px 8px 16px rgba(128, 128, 128, 0.25)',
        card: '0px 2px 16px rgba(128, 128, 128, 0.25)',
        drag: '0px 8px 16px rgba(128, 128, 128, 0.25)',
        dropdown: '0px 4px 8px rgba(128, 128, 128, 0.2)',
        slider: '0px 1px 4px rgba(128, 128, 128, 0.25)',
        alert: '0px 8px 16px rgba(128, 128, 128, 0.25)',
    },
    minWidth: {
        4: '1rem',
    },
    opacity: {
        15: '0.15',
    },
    spacing: {
        22: '5.5rem',
        84: '21rem',
        88: '22rem',
        100: '25rem',
        124: '31rem',

        sub4: 'calc(100% - 1rem)',
        sub7: 'calc(100% - 1.75rem)',
    }
};