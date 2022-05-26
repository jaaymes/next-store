import { useCart } from "@hooks/useCart"
import { ICartItem } from "@interfaces/products";
import { useEffect } from "react";

interface ICart {
  cartItems: ICartItem[]
  handleAddProduct: (item: ICartItem) => void
  handleRemoveProduct: (item: ICartItem) => void
}

export function Cart({ cartItems, handleAddProduct, handleRemoveProduct }: ICart) {
  const { isOpenCard, setIsCartOpen } = useCart()

  const sumQuantity = cartItems.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0);
  const sumValue = cartItems.map(item => item.price).reduce((prev, curr) => prev + curr, 0);

  return (
    <div className={`${isOpenCard ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'} fixed right-0 top-0 max-w-md w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white borderL-2 border-gray-300 shadow-md`}>

      {cartItems.length === 0
        ?
        <>
          <div className="flex items-center justify-end">
            <button onClick={() => setIsCartOpen(!isOpenCard)} className="text-gray-600 focus:outline-none">
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="flex justify-center">
            <h3 className="text-xl font-medium text-gray-700">Nenhum Item adicionado</h3>
          </div>
        </>
        :
        <>
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-medium text-gray-700">Seu carrinho</h3>
            <button onClick={() => setIsCartOpen(!isOpenCard)} className="text-gray-600 focus:outline-none">
              <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <hr className="my-3" />
          {cartItems.map(item => {
            return (
              <div className="flex justify-between mt-6" key={item.id}>
                <div className="flex">
                  <img
                    className="h-20 w-20 object-cover rounded"
                    src={item?.image} alt={item?.name} />
                  <div className="mx-2">
                    <h3 className="text-sm text-gray-600">{item?.name}</h3>
                    <div className="flex items-center mt-2">
                      <button onClick={() => handleAddProduct(item)} className="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                      <span className="text-gray-700 mx-2">{item.quantity}</span>
                      <button onClick={() => handleRemoveProduct(item)} className="text-gray-500 focus:outline-none focus:text-gray-600">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
                <span className="text-gray-600">R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            )
          })}
          <div className="flex justify-between mt-6">
            <span className="text-gray-600">Total: R$ {(sumQuantity * sumValue).toFixed(2)}</span>
          </div>
          <a className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Finalizar</span>
            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </a>
        </>

      }


    </div>
  )
}