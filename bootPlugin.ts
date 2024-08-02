import { Plugin } from "vite";
import { boot } from "./src/boot";
import fs from "fs";
import path from "path";

const bootPlugin = (): Plugin => {
  let isInitialized = false;

  // Helper function to format the timestamp
  function getCurrentTimestamp(): string {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }
  return {
    name: "vite-plugin-boot",
    configResolved() {
      const timestamp = getCurrentTimestamp();
      if (!isInitialized) {
        // Your initialization code here
        boot(fs, path);
        isInitialized = true;
      } else {
        console.log(`[${timestamp}] Boot file re-executed`);
      }
    },
  };
};

export default bootPlugin;
