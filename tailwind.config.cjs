module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    minHeight: {
      '160': '40rem',
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
    extend: {
      spacing: {
        '120': '30rem',
        '160': '40rem',
        '200': '50rem',
      },
    },
  },
  plugins: [],
}
