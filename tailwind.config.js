/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },

    extend: {
      colors: {
        base_black: '#424245',
        base_white: 'rgba(255,255,255,0.9)',
        selected_white: '#F5F6F7',
        selected_blue: '#B4DBF1',
      },
      padding: {
        container: '30px',
      },
      animation: {
        'card-enter': '3s ease-in 1s infinite reverse both running slidein',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
