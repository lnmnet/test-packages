/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // apps content
    "app/**/*.{js,ts,jsx,tsx}",
    // packages content
    "../../packages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
