import { useCart } from "@hooks/useCart"

interface IHeader {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({ setCartOpen }: IHeader) {
  const { isOpenCard } = useCart()

  function handleOpenOrCloseCart() {
    setCartOpen(!isOpenCard)
  }

  return (
    <header>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-end w-full">
            <button onClick={handleOpenOrCloseCart} className="text-gray-600 focus:outline-none mx-4 sm:mx-0 hover:scale-105 transition-all duration-300 ease-linear">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}