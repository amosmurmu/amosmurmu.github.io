import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure paths to your files are correct
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light", "dark", "dracula", "retro", "cupcake"],
    darkTheme: "dracula",
  },
};
