/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        chuksOrange: '#FF7A18', // Primary brand color
        chuksDark: '#3E2723',   // Footer/Deep text color
        chuksGray: '#F3F4F6',   // Light backgrounds
      },
    },
  },
  plugins: [],
}