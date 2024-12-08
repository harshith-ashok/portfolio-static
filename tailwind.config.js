/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
        karla: ["Karla"],
        carme: ["Carme"],
        jet: ["'JetBrains Mono'"],
      },
    },
  },
  daisyui: {
    themes: [
      "corporate",
      {
        black: {
          ...require("daisyui/src/theming/themes")["black"],
          "base-100": "#0A0A0A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
