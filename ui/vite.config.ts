import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "vitest.setup.ts",
    css: true,
    coverage: {
      reporter: ["text", "json-summary", "json"],
    },
  },
});
