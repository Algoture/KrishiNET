/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#70e000",
        link: "#004bff",
        primary: "#F4F4F4",
        white: "#ffffff",
        bred: "#d90429",
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      boxShadow: {
        box: "10px 10px 40px #00000041, inset -10px -10px 40px #ffffff40",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Sat: ["Satisfy", "sans-serif"],
      },
    },
  },
  plugins: [],
};
