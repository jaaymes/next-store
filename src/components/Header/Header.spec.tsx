import { CartProvider } from "@contexts/CartContext";
import { render, screen, fireEvent } from "@testing-library/react"
import { Header } from "."

const handleOpenOrCloseCart = jest.fn();


const renderHeader = () => {
  return render(
    <CartProvider>
      <Header setCartOpen={handleOpenOrCloseCart} />
    </CartProvider>
  )
}

describe('Header', () => {
  it('should render Header', () => {
    renderHeader()

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('when clicked on the button if the cart opens', () => {
    renderHeader()

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleOpenOrCloseCart).toHaveBeenCalledTimes(1)
  })

})
