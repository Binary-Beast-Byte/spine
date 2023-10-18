import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@esotericsoftware/spine-player":
        "/node_modules/@esotericsoftware/spine-player/dist/index.js",
        assets: './src/assets'
    },
  },
});
