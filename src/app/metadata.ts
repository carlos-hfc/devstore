import { Metadata } from "next"

export const config: Metadata = {
  title: {
    default: "devstore",
    template: "%s | devstore",
  },
  description: "Produtos voltados para devs.",
  twitter: {
    card: "summary_large_image",
    images: {
      url: "/favicon/favicon2048x2048.png",
      alt: "devstore",
    },
  },
  openGraph: {
    type: "website",
    url: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
    locale: "pt_BR",
    siteName: "devstore",
    images: {
      url: "/favicon/favicon2048x2048.png",
      alt: "devstore",
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "180x180" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "48x48" },
    ],
    apple: { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    shortcut: "/favicon/shortcut-icon.png",
    other: {
      rel: "mask-icon",
      url: "/favicon/safari-pinned-tab.svg",
    },
  },
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
  alternates: {
    canonical: String(process.env.NEXT_PUBLIC_BASE_URL),
  },
}
