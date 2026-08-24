import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Current GitHub Pages deploys under /ledge/. Set VITE_BASE_PATH=/ when the
  // verified custom domain is ready; no source links need to change.
  base: process.env.VITE_BASE_PATH || '/ledge/',
  // 源码定位属性只用于本地协作；生产 HTML 不携带 code-path 文件坐标。
  plugins: [
    ...(command === 'serve' ? [inspectAttr()] : []),
    react(),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
