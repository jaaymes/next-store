import React, { ChangeEvent, useEffect, useState } from 'react'
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
import { Search } from '@components/Search'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const [products, setProducts] = useState<IProducts[]>([])
  const [cartItems, setCartItems] = useState<ICartItem[]>([])
  const { setIsCartOpen } = useCart()
  const { setProduct } = useProduct()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [productsFilter, setProductsFilter] = useState<IProducts[]>([])


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
    setLoading(true)
    const products = await getAllProducts()
    setProducts(products)
    setLoading(false)
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
  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value)
  }

  useEffect(() => {
    setProductsFilter([])
    const filter = products.filter(item => {
      return (
        item.title.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0
      )
    })
    setProductsFilter(filter)
  }, [searchInput]);

  useEffect(() => {
    handleGetAllProducts()
  }, [router.isFallback]);

  return (
    <>
      <div className={`${loading ? '' : "hidden"} absolute none bg-gray-200 bg-opacity-50 z-50 w-full h-full items-center justify-center flex flex-col`}>
        <div className="w-52 h-52 rounded-full animate-spin border-y-2 border-solid border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-lg">Carregando...</p>
      </div>
      <Header setCartOpen={setIsCartOpen} />
      <Search onChange={handleSearch} />
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
          {
            searchInput
              ?
              productsFilter.slice(firstContentIndex, lastContentIndex).map(product => {
                return (
                  <ProductItem product={product} handleOpenDetail={handleOpenDetail} handleAddProduct={handleAddProduct} key={product.id} />
                )
              })
              :
              products.slice(firstContentIndex, lastContentIndex).map(product => {
                return (
                  <ProductItem product={product} handleOpenDetail={handleOpenDetail} handleAddProduct={handleAddProduct} key={product.id} />
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
