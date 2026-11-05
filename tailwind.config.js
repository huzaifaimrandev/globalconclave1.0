/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {extend: {colors: {navy:'#06182a',deep:'#03101e',gold:'#d9ac5d',cream:'#f8f0df'}, fontFamily:{display:['Cormorant Garamond','Georgia','serif'],body:['DM Sans','Arial','sans-serif']}}},
  plugins: []
}
