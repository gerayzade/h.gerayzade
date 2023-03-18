const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    dropShadow: {
      'emerald': [
        `-0.25em -0.25em ${colors['emerald']['600']}`,
        `-0.25em 0.25em ${colors['emerald']['600']}`,
        `0.25em -0.25em ${colors['emerald']['600']}`,
        `0.25em 0.25em ${colors['emerald']['600']}`,
      ],
    },
    screens: {
      '2xs': '360px',
      'xs': '640px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1200px',
      'xl': '1440px',
      '2xl': '1920px',
    },
  },
  plugins: [],
}
