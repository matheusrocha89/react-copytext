import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      jsxImportSource: "react",
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/CopyText/index.ts"),
      name: "ReactCopyText",
      formats: ["es", "umd"],
      fileName: (format) => `copy-text.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react-icons",
        "react-icons/fa6",
        "classnames",
        "react/jsx-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react-icons": "ReactIcons",
          "react-icons/fa6": "ReactIconsFa6",
          classnames: "classNames",
        },
      },
    },
  },
});
