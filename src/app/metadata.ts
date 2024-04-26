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
