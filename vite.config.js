import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteEjsPlugin } from "vite-plugin-ejs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteEjsPlugin(
      { title: "Home" },
      {
        ejs: {
          // ejs options goes here.
          beautify: true,
        },
      }
    ),
  ],
});
