import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
 
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // 1MB limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("src/specificModule")) {
            return "specificModule";
          }
        },
      },
    },
  },
});
