/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],      
      },
    },
  },
  plugins: [
    typography
  ],
}

