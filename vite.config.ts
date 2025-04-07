import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "background.png",
        "backgrounds/*.webp",
        "bottles/*.webp",
        "bottles/*.png",
      ],
      manifest: {
        name: "La Botellita",
        short_name: "Botellita",
        description: "Juego de La Botellita",
        theme_color: "#ffffff",
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
        ],
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,webp}"],
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // 20MB
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
