import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// hyronb-egypt — 独立 repo，不再走 Lovable 双向同步
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8181,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
