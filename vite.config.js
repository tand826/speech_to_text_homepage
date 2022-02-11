import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://tand826.github.io/speech_to_text_homepage",
  plugins: [vue()],
  build: {
    outDir: "docs",
  },
});
