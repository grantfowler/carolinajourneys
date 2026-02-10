/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Earthy, cartographic palette
        parchment: {
          50: '#FDFBF7',
          100: '#FAF6ED',
          200: '#F5EDD8',
          300: '#EDE0BE',
          400: '#E0CFA0',
          500: '#D4BF82',
        },
        ink: {
          DEFAULT: '#2C1810',
          light: '#4A3728',
          lighter: '#6B5344',
        },
        forest: {
          50: '#F0F4F1',
          100: '#DCE5DF',
          200: '#B9CBBF',
          300: '#8DAA96',
          400: '#5F8A6C',
          500: '#3D6B4A',
          600: '#2F5239',
          700: '#243F2C',
        },
        trail: {
          DEFAULT: '#8B7355',
          light: '#A89076',
          dark: '#6B5744',
        },
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A84B',
          muted: '#9A7B4F',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink.light'),
            '--tw-prose-headings': theme('colors.ink.DEFAULT'),
            '--tw-prose-links': theme('colors.forest.600'),
            '--tw-prose-bold': theme('colors.ink.DEFAULT'),
            '--tw-prose-quotes': theme('colors.ink.lighter'),
            '--tw-prose-quote-borders': theme('colors.trail.DEFAULT'),
            maxWidth: '72ch',
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
