/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1.5xl': '1440px',// Custom breakpoint smaller than 'sm'
      },
    },
  },
  plugins: [],
}

