import { products } from '../stores/products'
import { searchQuery } from '../stores/search'
import { fetchProducts } from './fetchProducts'

export async function updateProducts (): Promise<void> {
  let cachedProducts = products.get()

  if (cachedProducts === null) {
    cachedProducts = await fetchProducts()
  }

  const query = searchQuery.get()
  let filteredProducts = cachedProducts
  if (query != null) {
    filteredProducts = []
    cachedProducts.forEach(product => {
      if (product.title.toLowerCase().includes(query.toLowerCase())) {
        filteredProducts.push(product)
      }
    })
  }
  products.set(filteredProducts)
}
