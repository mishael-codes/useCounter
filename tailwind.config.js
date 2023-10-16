/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "320px"
    },
    extend: {
      boxShadow: {
        button: "2.5px 2.5px 10px rgba(0, 0, 0, 0.5)",
        container: "15px 15px 40px rgba(100, 50, 0, 0.7)",
      }
    },
  },
  plugins: [],
}

