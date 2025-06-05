/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ★この行が重要
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}