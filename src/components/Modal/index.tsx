import { useProduct } from "@hooks/useProduct"
import { ICartItem } from "@interfaces/products";
import { useEffect } from "react";

interface IModalProduct {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleAddProduct: (item: ICartItem) => void
}

export function ModalProduct({ open, setOpen, handleAddProduct }: IModalProduct) {
  const { product } = useProduct()

  function handleAddAndClose() {
    setOpen(false)
    handleAddProduct(product)
  }

  return (
    <div className={`${!open && 'hidden'} main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster`}
      style={{
        background: "rgba(0,0,0,0.7)"
      }}>
      <div
        className="border border-blue-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          {/* <!--Title--> */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">{product?.name}</p>
            <div onClick={() => setOpen(!open)} className="modal-close cursor-pointer z-50">
              <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                viewBox="0 0 18 18">
                <path
                  d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                </path>
              </svg>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <img
              className="h-40 w-40 object-cover rounded"
              src={product?.image} alt={product?.name} />
          </div>
          {/* <!--Body--> */}
          <div className="my-5">
            <p>{product?.description}</p>
          </div>
          {/* <!--Footer--> */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none modal-close px-4 bg-gray-400 p-3 rounded-lg text-black hover:bg-gray-300">Fechar</button>
            <button
              onClick={handleAddAndClose}
              className="focus:outline-none px-4 bg-blue-600 p-3 ml-3 rounded-lg text-white hover:bg-teal-400">Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  )
}