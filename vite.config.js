import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/deploy-vite-Netflix-clone-2024/",
  plugins: [react()],
});
