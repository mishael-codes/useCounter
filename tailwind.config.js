/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "15px 15px 40px rgba(100, 50, 0, 0.7)"
      }
    },
  },
  plugins: [],
}

