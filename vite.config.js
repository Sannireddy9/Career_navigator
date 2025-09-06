import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {
            colors: {
              coral: {
                50: "#fff5f5",
                100: "#ffe0e0",
                200: "#ffc5c5",
                300: "#ff9e9e",
                400: "#ff6b6b",
                500: "#ff3d3d",
                600: "#ff1f1f",
                700: "#ff0000",
                800: "#e50000",
                900: "#c40000",
              },
            },
          },
        },
        plugins: [],
      },
    }),
  ],
});
