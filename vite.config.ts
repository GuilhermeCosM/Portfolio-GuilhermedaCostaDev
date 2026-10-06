import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  // GitHub Pages serves this project from /<repository-name>/.
  base: mode === "production" ? "/Portfolio-GuilhermedaCostaDev/" : "/",
  plugins: [react()],
}));
