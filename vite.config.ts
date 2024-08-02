import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import bootPlugin from "./bootPlugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), bootPlugin()],
});
