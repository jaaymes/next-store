import { SetStateAction, useState } from "react"
import { createContext } from 'use-context-selector'

interface CartContextType {
  isOpenCard: boolean
  setIsCartOpen: React.Dispatch<SetStateAction<boolean>>
  count: number
  setCount: React.Dispatch<SetStateAction<number>>
}


export const CartContext = createContext({} as CartContextType)

/* @ts-ignore */
export function CartProvider({ children }) {
  const [isOpenCard, setIsCartOpen] = useState(false)
  const [count, setCount] = useState(0)

  const contextValues = { isOpenCard, setIsCartOpen, count, setCount }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}



