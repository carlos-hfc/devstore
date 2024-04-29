"use client"

import { ShoppingBag } from "lucide-react"

import { useCart } from "@/contexts/card-context"

export function CartWidget() {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="size-4" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  )
}
