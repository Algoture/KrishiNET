/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      accent: "#70e000",
      link: "#004bff",
      primary: "#F4F4F4",
      white: "#ffffff",
      bred: "#d90429",
    },
    boxShadow: {
      box: "10px 10px 40px #00000041, inset -10px -10px 40px #ffffff40",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
