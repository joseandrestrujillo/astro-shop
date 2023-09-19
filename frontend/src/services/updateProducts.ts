import { products } from '../stores/products'
import { fetchProducts } from './fetchProducts'

export async function updateProducts (): Promise<void> {
  const cachedProducts = products.get()
  if (cachedProducts === null) {
    products.set(await fetchProducts())
  }
}
