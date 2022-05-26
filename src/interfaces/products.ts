
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
  id: number
  image: string
  name: string
  price: number
  description: string
  handleAddProduct: (item: ICartItem) => void
  handleOpenDetail: (item: ICartItem) => void
}

export interface ICartItem {
  id: number
  name?: string
  quantity: number,
  price: number
  image: string
  description: string
}