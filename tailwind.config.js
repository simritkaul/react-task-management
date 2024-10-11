/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightPurple: "#F1F2FF",
        darkPurple: "#8094F9",
        darkBlue: "#335099",
        gray: "#5B5B5B",
        red: "#F24E1E",
        orange: "#FF8800",
        green: "#0FA958",
      },
      borderRadius: {
        custom: "20px",
      },
      fontFamily: {
        body: ["Roboto", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
      fontSize: {
        small: "16px",
        medium: "24px",
        large: "36px",
        extraLarge: "48px",
      },
    },
  },
  plugins: [],
};
