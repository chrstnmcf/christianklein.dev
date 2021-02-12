/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
// const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      serif: ['Domine', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      boxShadow: {
        light: '0 12px 35px rgba(0, 0 ,0 , 0.1)',
        dark: '0 6px 25px rgba(255, 255 ,255 , 0.05)',
      },
      container: (theme) => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.4'),
          sm: theme('spacing.5'),
          lg: theme('spacing.6'),
          xl: theme('spacing.8'),
        },
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1024px',
        },
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.700'),
            '[class~="lead"]': {
              color: theme('colors.gray.800'),
            },
            h1: {
              color: theme('colors.gray.600'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.3'),
            },
            'h2, h3, strong': {
              color: theme('colors.gray.500'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.3'),
            },
            'h4, h5, h6': {
              color: theme('colors.gray.400'),
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.2'),
            },
            a: {
              color: theme('colors.gray.600'),
              '&:hover': {
                color: theme('colors.gray.700'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            '[class~="lead"]': {
              color: theme('colors.gray.100'),
            },
            h1: {
              color: theme('colors.gray.300'),
            },
            'h2, h3, strong': {
              color: theme('colors.gray.400'),
            },
            'h4, h5, h6': {
              color: theme('colors.gray.500'),
            },
            a: {
              color: theme('colors.white'),
              '&:hover': {
                color: theme('colors.gray-300'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography')],
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
};
