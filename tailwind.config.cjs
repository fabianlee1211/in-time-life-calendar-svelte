const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        neon: 'hsl(160, 100%, 50%)'
      },
      boxShadow: {
        neon: '0 0 10px hsla(160, 100%, 50%, 1)'
      }
    }
  },
  plugins: []
};
