/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "whites":"#f8f8f8",
        "brown":"#D2914A",
        "lightBrown":"#EDD8BD",
        "red":"#e32328"
      },
      screens:{
        "sm":"1px",
        "md":"768px",
        "lg":"1024px"
      },
      fontFamily:{
        "default": ["Abril Fatface", "sans-serif"]
      }
    },
  },
  plugins: [],
}

