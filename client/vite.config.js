import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
      },
    }),
    tsconfigPaths()
  ],
  server: {
    watch: {
      usePooling: true,
    },
    host: true,
    strictPort: true,
    port: 3030,
  },
});
