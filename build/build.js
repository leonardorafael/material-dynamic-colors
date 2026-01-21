import { build } from "vite";
import fs from "fs";

(async () => {
  await build({
    esbuild: {
      legalComments: 'none'
    },
    build: {
      outDir: "./dist/cdn",
      assetsInlineLimit: 0,
      rollupOptions: {
        input: {
          "material-dynamic-colors.min": "./src/build.ts",
        },
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          manualChunks: undefined,
        },
      },
    },
  });

  try {
    const jsContent = fs.readFileSync("./dist/cdn/material-dynamic-colors.min.js", "utf-8");
    fs.writeFileSync("./dist/cdn/material-dynamic-colors.min.js", jsContent + "\nexport default globalThis.materialDynamicColors;");
  } catch (error) {
    console.error(error);
  }
})();
