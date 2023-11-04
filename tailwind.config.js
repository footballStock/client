/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#DBDBDB',
        'custom-green': '#70B8BC',
      },
    },
  },
  plugins: [],
};
