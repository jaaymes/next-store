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

  return {
    isOpenCard,
    setIsCartOpen
  }
}