import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "VITE_");

  return {
    // Netlify serves from /; GitHub Pages sets VITE_BASE_PATH in its workflow.
    base: env.VITE_BASE_PATH || "/",
    plugins: [react()],
  };
});
