/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cart': '#0C5DD6'
      },
      gridTemplateColumns: {
        'products': 'repeat(auto-fill, minmax(200px, 1fr))'
      },
    },
  },
  plugins: [],
};

