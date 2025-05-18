import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Basic Benefits - Healthcare Solutions",
    short_name: "Basic Benefits",
    description: "Simplified healthcare solutions for every workforce",
    start_url: "/",
    display: "standalone",
    background_color: "#1B2741",
    theme_color: "#1B2741",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
