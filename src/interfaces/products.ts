
export interface IProducts {
  category: string
  description: string
  id: number
  image: string
  price: number
  rating: {
    count: number
    rate: number
  }
  title: string
}

export interface IProductItem {
  product: {
    id: number
    image: string
    title: string
    price: number
    description: string
  }
  handleAddProduct: (item: ICartItem) => void
  handleOpenDetail: (item: ICartItem) => void
}

export interface ICartItem {
  id: number
  title?: string
  quantity: number,
  price: number
  image: string
  description: string
}