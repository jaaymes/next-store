import { ProductProvider } from "@contexts/ProductContext";
import { useProduct } from "@hooks/useProduct";
import { render, screen, fireEvent, renderHook, waitFor } from "@testing-library/react"
import { ModalProduct } from "."

const handleAddProduct = jest.fn();



const setOpen = jest.fn()

const closeModal = jest.fn(() => {
  setOpen
})

const product = {
  id: 1,
  title: "Teste",
  image: "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  price: 20,
  quantity: 1,
  description: "Teste de produto"
}

jest.mock('@hooks/useProduct', () => {
  return {
    useProduct() {
      return {
        product: product
      }
    }
  }
})


const renderModal = () => {
  return render(
    <ProductProvider>
      <ModalProduct open={true} handleAddProduct={handleAddProduct} setOpen={setOpen} />
    </ProductProvider>
  )
}

describe('Modal', () => {
  it('should render Modal', () => {
    renderModal()

    expect(screen.queryByTestId("modal")).toBeInTheDocument()
  })


  it('show product info in Modal', async () => {
    renderModal()

    const image = document.querySelector('img') as HTMLImageElement

    expect(screen.getByText(product.title)).toBeInTheDocument()
    expect(screen.getByText(product.description)).toBeInTheDocument()

    expect(image.src).toContain(product.image)
    expect(image.alt).toContain(product.title);
  })

  it('should call handleAddAndClose when button gets clicked', () => {
    renderModal()

    const button = screen.getByTestId('AddAndClose')

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
    expect(handleAddProduct).toHaveBeenCalledTimes(1)
    expect(handleAddProduct).toHaveBeenCalledWith(product);
  })

  it('should call close when button gets clicked', () => {
    renderModal()

    const button = screen.getByTestId('close')

    fireEvent.click(button)

    expect(button).toBeInTheDocument()
  })

})
