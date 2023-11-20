/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#C0FDEF",
        peach: "#F5D8C8",
        midBlue: "#518BCA",
      },

      screens: {
        xs: "480px",
      },

      width: {
        "2card": "45%",
        "3card": "30%",
        "4card": "23%",
      },

      flexBasis: {
        "2card": "45%",
        "3card": "30%",
        "4card": "23%",
      },
    },
  },
  plugins: [],
};
