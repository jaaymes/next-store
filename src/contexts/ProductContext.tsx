import { ICartItem } from "@interfaces/products"
import { useState } from "react"
import { createContext } from 'use-context-selector'

interface ProductContextType {
  setProduct: React.Dispatch<React.SetStateAction<ICartItem>>
  product: ICartItem
}


export const ProductContext = createContext({} as ProductContextType)

/* @ts-ignore */
export function ProductProvider({ children }) {
  const [product, setProduct] = useState<ICartItem>()

  const contextValues = { setProduct, product }


  return (
    /* @ts-ignore */
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  )
}



