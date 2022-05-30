import Tooltip from '../ToolTip';
import { render } from '@testing-library/react';
import { ProductItem } from './ProductItem'

const product = {
  id: 1,
  title: "Teste",
  image: "https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  price: 20,
  description: "Teste de produto"
}

const handleAddProduct = jest.fn();
const handleOpenDetail = jest.fn();


test('add product cart', async () => {
  const { debug } = render(
    <Tooltip text='Adicionar'>
      <button onClick={handleAddProduct(product)} className="p-2 rounded-full bg-blue-600 text-white mx-2 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      </button>
    </Tooltip>
  )
  debug()
})

test('detail product cart', async () => {
  const { debug } = render(
    <Tooltip text='Detalhe'>
      <button onClick={handleOpenDetail} className="p-2 rounded-full bg-blue-600 text-white mx-2 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
      </button>
    </Tooltip>
  )
  debug()
})