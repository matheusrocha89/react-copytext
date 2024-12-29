import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-copytext": path.resolve(__dirname, "../src/CopyText/index.ts"),
    },
  },
  server: {
    watch: {
      ignored: ["!**/src/**"],
    },
  },
});
