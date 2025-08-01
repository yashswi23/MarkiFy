/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
   plugins: [
    require('@tailwindcss/typography'),  // <- enable this plugin
  ],
}
