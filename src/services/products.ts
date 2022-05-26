import api from "./api";


export async function getAllProducts() {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (error) {
    console.log('error', error)
  }
}

export async function getSingleProduct(id: number) {
  try {
    const response = await api.get(`/products/${id}`)
    return response.data
  } catch (error) {
    console.log('error', error)
  }
}