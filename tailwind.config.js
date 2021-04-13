const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './_content/**/*.mdx'],
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
      animation: {
        appear: 'appear 500ms ease-in-out forwards',
        disappear: 'disappear 500ms ease-in-out forwards',
        'slide-down': 'slideY 250ms ease-out forwards',
      },
      keyframes: {
        slideY: {
          '0%': { transform: 'translateY(-120%)' },
          '100%': { transform: 'translateY(-0%)' },
        },
        appear: {
          to: { opacity: 1 },
        },
        disappear: {
          to: { opacity: 0 },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            margin: '0 auto',
            color: theme('colors.gray.700'),
            '[class~="lead"]': {
              color: theme('colors.gray.800'),
            },
            h1: {
              color: theme('text-gray-700'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.3'),
            },
            'h2, h3, strong': {
              color: theme('colors.gray.600'),
              marginTop: theme('spacing.6'),
              marginBottom: theme('spacing.3'),
            },
            'h4, h5, h6': {
              color: theme('colors.gray.500'),
              marginTop: theme('spacing.4'),
              marginBottom: theme('spacing.2'),
            },
            a: {
              color: theme('colors.blue.500'),
              fontWeight: 600,
              '&:hover': {
                color: theme('colors.blue.400'),
              },
            },
            code: {
              padding: theme('spacing.1'),
              background: theme('colors.gray.200'),
              borderRadius: theme('borderRadius.md'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            '[class~="lead"]': {
              color: theme('colors.white'),
            },
            h1: {
              color: theme('colors.gray.200'),
            },
            'h2, h3, strong': {
              color: theme('colors.gray.400'),
            },
            'h4, h5, h6': {
              color: theme('colors.gray.500'),
            },
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.500'),
              },
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            'ol > li::before': {
              color: theme('colors.gray.400'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.600'),
            },
            hr: {
              borderColor: theme('colors.gray.300'),
            },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.gray.600'),
            },
            'figure figcaption': {
              color: theme('colors.gray.400'),
            },
            code: {
              color: theme('colors.gray.300'),
              background: theme('colors.gray.700'),
            },
            'a code': {
              color: theme('colors.gray.300'),
            },
            pre: {
              color: theme('colors.gray.300'),
              backgroundColor: theme('colors.gray.800'),
            },
            'pre code': {
              backgroundColor: theme('colors.gray.800'),
            },
            thead: {
              color: theme('colors.gray.200'),
              borderBottomColor: theme('colors.gray.400'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.600'),
            },
          },
        },
        bleed: {
          css: {
            'pre, image': {
              'margin-left': '-2.5rem',
              'margin-right': '-2.5rem',
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
