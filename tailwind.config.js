/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#C0FDEF",
        cyan30: "rgba(192, 253, 239, 0.3)",
        peach: "#F5D8C8",
        midBlue: "#518BCA",
        whiteBlue: "#FBFDFF",
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

      fontSize: {
        "1/6": "16.666667%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
