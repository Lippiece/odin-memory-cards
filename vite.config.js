/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  define: { "process.env": {} },
  resolve: { alias: { util: "util/" } },
  base: "/odin-memory-cards/",
});
