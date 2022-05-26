
import { ProductContext } from '@contexts/ProductContext'
import { useContextSelector } from 'use-context-selector'

export const useProduct = () => {
  const product = useContextSelector(
    ProductContext,
    product => product.product
  )

  const setProduct = useContextSelector(
    ProductContext,
    product => product.setProduct
  )

  return {
    product,
    setProduct
  }
}