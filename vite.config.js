const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    minify: false,
    rollupOptions: {
      external: ["react"],
      output: { globals: { react: "React" } },
    },
    lib: {
      entry: path.resolve(__dirname, "src/Library.jsx"),
      name: "rica-template-react",
      fileName: (format) => `rica-template-react.${format}.js`,
    },
  },
});
