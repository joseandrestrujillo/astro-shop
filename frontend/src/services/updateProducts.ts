import { products } from '../stores/products'
import { searchQuery } from '../stores/search'
import { fetchProducts } from './fetchProducts'

export async function updateProducts (): Promise<void> {
  let cachedProducts = products.get()

  if (cachedProducts === null) {
    cachedProducts = await fetchProducts()
  }

  const query = searchQuery.get()
  if (query != null) {
    cachedProducts = cachedProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
  }
  products.set(cachedProducts)
}
