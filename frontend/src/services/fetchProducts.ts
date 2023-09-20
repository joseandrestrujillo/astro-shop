import { allProducts } from '../stores/products'
import type { Product } from '../types/Product'
import type { ProductDTO } from '../types/ProductDTO'

export async function fetchProducts (): Promise<Product[]> {
  const response: ProductDTO[] = await fetch('https://fakestoreapi.com/products/')
    .then(async res => await res.json())

  const products: Product[] = []
  response.forEach(productDto => {
    products.push({
      id: productDto.id,
      image: productDto.image,
      title: productDto.title,
      price: productDto.price,
      category: productDto.category,
      stars: productDto.rating.rate
    })
  })
  allProducts.set(products)
  return products
}
