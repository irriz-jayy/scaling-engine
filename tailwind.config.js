/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffcf23",
        secondary: "#190d01",
      },
      fontFamily: {
        logo: "Agbalumo",
        main: "Bungee",
        paragraph: "Quicksand",
      },
    },
  },
  plugins: [],
};
