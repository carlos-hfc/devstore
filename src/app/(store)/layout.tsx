import type { PropsWithChildren } from "react"

import { Header } from "@/components/header"
import { CartProvider } from "@/contexts/card-context"

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <CartProvider>
      <div className="mx-auto grid min-h-dvh w-full max-w-screen-2xl grid-rows-app gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartProvider>
  )
}
