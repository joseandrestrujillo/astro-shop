export interface Product {
  id: number
  price: number
  image: string
  title: string
  category: Category
  stars: number
}

export enum Category {
  Electronics = 'electronics',
  Jewelery = 'jewelery',
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}
