import React, { useEffect, useState } from 'react'
import { Header } from '@components/Header'
import { ProductItem } from '@components/Products/ProductItem'
import { ICartItem, IProducts } from '@interfaces/products'
import { getAllProducts } from '@services/products'
import type { NextPage } from 'next'
import { Paginate } from '@components/Paginate'
import usePagination from '@hooks/usePagination'
import { useCart } from '@hooks/useCart'
import { Cart } from '@components/Cart'
import { ModalProduct } from '@components/Modal'
import { useProduct } from '@hooks/useProduct'

const Home: NextPage = () => {
  const [products, setProducts] = useState<IProducts[]>([])
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const { setIsCartOpen } = useCart()
  const { setProduct } = useProduct()
  const [open, setOpen] = useState(false)


  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 8,
    count: products.length,
  });

  async function handleGetAllProducts() {
    const products = await getAllProducts()
    console.log('products', products)
    setProducts(products)
  }

  async function handleAddProduct(productItem: ICartItem) {
    const productExist = cartItems.find(item => item.id === productItem.id)
    if (productExist) {
      setCartItems(cartItems.map(item => item.id === productItem.id ? { ...productExist, quantity: productExist.quantity + 1 }
        : item
      ))
    } else {
      setCartItems([...cartItems, { ...productItem, quantity: 1 }])
    }
  }

  async function handleRemoveProduct(productItem: ICartItem) {
    const productExist = cartItems.find(item => item.id === productItem.id)
    if (productExist?.quantity === 1) {
      setCartItems(cartItems.filter(item => item.id !== productItem.id))
    } else {
      // @ts-ignore
      setCartItems(cartItems.map(item => item.id === productItem.id ? { ...productExist, quantity: productExist?.quantity - 1 } : item))
    }
  }

  async function handleOpenDetail(productItem: ICartItem) {
    setOpen(true)
    setProduct(productItem)
  }


  useEffect(() => {
    handleGetAllProducts()
  }, []);

  return (
    <>
      <Header setCartOpen={setIsCartOpen} />
      <div className="container mx-auto px-6">
        <div className='mt-8 text-center'>
          <Paginate
            page={page}
            setPage={setPage}
            nextPage={nextPage}
            prevPage={prevPage}
            totalPages={totalPages} />
        </div>
        <div className=" grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.slice(firstContentIndex, lastContentIndex).map(product => {
            return (
              <ProductItem description={product.description} handleOpenDetail={handleOpenDetail} id={product.id} handleAddProduct={handleAddProduct} image={product.image} name={product.title} key={product.id} price={product.price} />
            )
          })
          }
        </div>
        <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />
        <ModalProduct setOpen={setOpen} open={open} handleAddProduct={handleAddProduct} />
      </div>
    </>

  )
}

export default Home
