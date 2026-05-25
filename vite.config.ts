import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// hyronb-egypt — 独立 repo,不再走 Lovable 双向同步
// base:GitHub Pages 子路径,Vercel/CF Pages 走根路径会自动 ignore
export default defineConfig(({ mode }) => ({
  base: mode === "production" && process.env.GITHUB_PAGES === "true" ? "/hyronb-egypt/" : "/",
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
