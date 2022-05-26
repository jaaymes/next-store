import '@styles/globals.css'
import { CartProvider } from '@contexts/CartContext'
import type { AppProps } from 'next/app'
import { ProductProvider } from '@contexts/ProductContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default MyApp
