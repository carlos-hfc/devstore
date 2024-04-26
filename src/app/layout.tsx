import "./globals.css"

import { Inter } from "next/font/google"
import type { PropsWithChildren } from "react"

import { config } from "./metadata"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = config

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="pt-BR"
      className={inter.variable}
    >
      <body className="bg-zinc-950 antialiased text-zinc-50">{children}</body>
    </html>
  )
}
