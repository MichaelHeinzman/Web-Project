import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

// Simulate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

export default defineConfig(({ mode }) => {
  // Manually load the environment variables for use in config
  const env = dotenv.config().parsed || {};

  return {
    base: "/", // Add this line to set the base path to the root
    plugins: [react()],
    server: {
      proxy:
        env.VITE_NODE_ENV === "production"
          ? undefined
          : {
              "/api": {
                target: env.VITE_API_URL || "http://localhost:5000",
                changeOrigin: true,
                secure: false,
              },
            },
    },
    build: {
      emptyOutDir: true, // Clear output directory before each build
      outDir: path.resolve(__dirname, "dist"),
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
          },
        },
      },
    },
    resolve: {
      alias: {
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@components": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
      },
    },
  };
});
