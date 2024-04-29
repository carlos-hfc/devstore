import { Metadata } from "next"

export const config: Metadata = {
  title: {
    default: "devstore",
    template: "%s | devstore",
  },
  description: "Produtos voltados para devs.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    type: "website",
    url: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
    locale: "pt_BR",
    siteName: "devstore",
  },
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_BASE_URL)),
  alternates: {
    canonical: String(process.env.NEXT_PUBLIC_BASE_URL),
  },
}
