import Tooltip from "@components/ToolTip";
import { useCart } from "@hooks/useCart";
import { IProductItem } from "@interfaces/products";


export function ProductItem({ id, image, name, price, handleAddProduct, description, handleOpenDetail }: IProductItem) {
  const { isOpenCard, setIsCartOpen } = useCart()
  const product = {
    id,
    name,
    image,
    price,
    quantity: 1,
    description
  }
  function handleAddandOpenCart() {
    setIsCartOpen(true)
    handleAddProduct(product)
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden hover:scale-105 transition-all duration-300 ease-linear">
      <div className="flex items-end justify-end h-56 w-full bg-cover"
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <Tooltip text="Adicionar">
          <button onClick={handleAddandOpenCart} className="p-2 rounded-full bg-blue-600 text-white mx-2 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
        </Tooltip>
        <Tooltip text="Detalhe">
          <button onClick={() => handleOpenDetail(product)} className="p-2 rounded-full bg-blue-600 text-white mx-2 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </Tooltip>

      </div>
      <div className="px-5 py-3">
        <h3 className="text-gray-700 uppercase">{name}</h3>
        <span className="text-gray-500 mt-2">R$ {price}</span>
      </div>
    </div>
  )
}