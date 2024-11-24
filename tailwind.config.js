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
    themes: ["corporate"],
  },
  plugins: [require("daisyui")],
};
