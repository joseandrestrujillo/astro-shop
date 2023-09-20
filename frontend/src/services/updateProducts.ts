import { filterCategory } from '../stores/filterCategory'
import { filterStars } from '../stores/filterStars'
import { filterPrice } from '../stores/price'
import { allProducts, products } from '../stores/products'
import { searchQuery } from '../stores/search'
import { fetchProducts } from './fetchProducts'

export async function updateProducts (): Promise<void> {
  let cachedProducts = allProducts.get()

  if (cachedProducts === null) {
    cachedProducts = await fetchProducts()
  }

  const query = searchQuery.get()
  if (query != null) {
    cachedProducts = cachedProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
  }

  const price = filterPrice.get()
  if (price != null) {
    cachedProducts = cachedProducts.filter(product => product.price >= price[0] && product.price <= price[1])
  }

  const category = filterCategory.get()
  if (category != null) {
    cachedProducts = cachedProducts.filter(product => product.category === category)
  }

  const stars = filterStars.get()
  if (stars != null) {
    cachedProducts = cachedProducts.filter(product => product.stars >= stars)
  }

  products.set(cachedProducts)
}
