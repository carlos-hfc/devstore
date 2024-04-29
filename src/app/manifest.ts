import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "devstore",
    short_name: "devstore",
    icons: [
      {
        src: "/favicon/favicon16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon/favicon32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon/favicon192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon/favicon512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon/favicon2048x2048.png",
        sizes: "2048x2048",
        type: "image/png",
      },
    ],
    theme_color: "#000",
    background_color: "#000",
    display: "standalone",
    lang: "pt_BR",
    description: "Produtos voltados para devs.",
    start_url: ".",
  }
}
