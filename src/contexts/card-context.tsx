"use client"

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from "react"

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export const useCart = () => useContext(CartContext)

export function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItems(prev => {
      const productInCart = prev.some(item => item.productId === productId)

      if (productInCart) {
        return prev.map(item => {
          if (item.productId) {
            return { ...item, quantity: item.quantity + 1 }
          }

          return item
        })
      }

      return [...prev, { productId, quantity: 1 }]
    })
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
