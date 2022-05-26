import { CartContext } from '@contexts/CartContext'
import { useContextSelector } from 'use-context-selector'

export const useCart = () => {
  const isOpenCard = useContextSelector(
    CartContext,
    cart => cart.isOpenCard
  )

  const setIsCartOpen = useContextSelector(
    CartContext,
    cart => cart.setIsCartOpen
  )

  const count = useContextSelector(
    CartContext,
    cart => cart.isOpenCard
  )

  const setCount = useContextSelector(
    CartContext,
    cart => cart.setIsCartOpen
  )

  return {
    isOpenCard,
    setIsCartOpen
  }
}