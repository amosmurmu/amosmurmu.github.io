import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Use this for standalone deployment
  build: {
    outDir: "dist", // Ensure the output directory is correct
    assetsDir: "assets", // Ensure assets are in the correct subdirectory
  },
});
