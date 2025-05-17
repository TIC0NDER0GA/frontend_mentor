// tailwind.config.js
import themeable from 'tailwindcss-themeable'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [themeable],
}