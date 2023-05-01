/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "470px",
      },
      colors: {
        primary: "#e02e85",
      },
      fontFamily: {
        pacifico: ["var(--font-pacifico)"],
        mont: ["var(--font-mont)"],
        "dancing-script": ["var(--font-dancing-script)"],
        caveat: ["var(--font-caveat)"],
        "rampart-one": ["var(--font-rampart-one)"],
      },
      backgroundColor: {
        main: "#020617",
      },
      textColor: {
        primary: "#e02e85",
      },
    },
  },
  plugins: [],
};
