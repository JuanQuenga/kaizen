/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF",
        secondary: "#45A29E",
        base: "#c5c6c7",
        default: "#c5c6c7",
        background: "#0b0c10",
        navigation: "#1F2833",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        bebas: ["Bebas Neue", "sans - serif"],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
  daisyui: {
    themes: [
      {
        hermans: {
          primary: "#f11a23",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "retro",
    ],
  },
};
