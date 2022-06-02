import { CartProvider } from '@contexts/CartContext';
import { useCart } from '@hooks/useCart';
import { render, screen, fireEvent, renderHook, createEvent } from '@testing-library/react';
import { ProductItem } from './ProductItem'

const product = {
  id: 1,
  title: "Teste",
  image: "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  price: 20,
  quantity: 1,
  description: "Teste de produto"
}

const handleAddProduct = jest.fn();
const handleOpenDetail = jest.fn();


const renderProductItem = () => {
  return render(
    <CartProvider>
      <ProductItem product={product} handleAddProduct={handleAddProduct} handleOpenDetail={handleOpenDetail} />
    </CartProvider>
  )
}

describe('Product Item', () => {
  it('should render ProductItem', () => {
    renderProductItem()

    expect(screen.getByTestId('product-item')).toBeInTheDocument()
  })

  it('show card info', () => {
    renderProductItem()

    expect(screen.getByText(new RegExp(product.title))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(String(product.price)))).toBeInTheDocument()
    expect(screen.getByTestId('product-image')).toHaveStyle({ backgroundImage: product.image })
  })


  it('should call handleAddProduct when button gets clicked', () => {
    renderProductItem()

    const button = screen.getByTestId('add-product')

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleAddProduct).toHaveBeenCalledTimes(1)
    expect(handleAddProduct).toHaveBeenCalledWith(product);
  })

  it('should call handleOpenDetail when button gets clicked', () => {
    renderProductItem()

    const button = screen.getByTestId('detail-product')

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleOpenDetail).toHaveBeenCalledTimes(1)
    expect(handleOpenDetail).toHaveBeenCalledWith(product);
  })
})