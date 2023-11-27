/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#DBDBDB',
        'custom-green': '#70B8BC',
        'custom-room': '#F3F2F2',
        'custom-chat': '#FDF7F7',
        'custom-white-gray': '#d4d4d4',
        'custom-green-gray' : '#b8d4d4',
        'custom-white-gray2' : '#dbdbdb',
        'custom-white-green' : '#a5d6b7',
        'custom-gray2' : '#c2c2c2',
        'custom-gray3' : '#adacac',

      },
      boxShadow: {
        red: '2px 4px 0px 1px rgba(255,0,0,0.75)',
        orange: '2px 4px 0px 1px rgba(255,165,0,0.75)',
        yellow: '2px 4px 0px 1px rgba(255,255,0,0.75)',
        green: '2px 4px 0px 1px rgba(0,128,0,0.75)',
        blue: '2px 4px 0px 1px rgba(0,0,255,0.75)',
        indigo: '2px 4px 0px 1px rgba(75,0,130,0.75)',
        violet: '2px 4px 0px 1px rgba(238,130,238,0.75)',
        black: '2px 4px 0px 1px rgba(0,0,0,0.75)',
      },
      fontFamily: {
        'sidebar-name': ['Georgia','Cambria',"Times New Roman"],
        'sidebar-menu': ['Times'],
        'detail-title' : ["Cambria"]
        ///, Roboto, "Cambria", , "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"
      }
    },
  },
  plugins: [],
};

