// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   daisyui: {
//     themes: ["light", "dark", "cupcake", "night", "sunset"],
//   },
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// };

//new new
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "night", "sunset"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
