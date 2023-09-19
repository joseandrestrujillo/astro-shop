import { atom } from 'nanostores'
import type { Product } from '../types/Product'

export const products = atom<Product[] | null>(null)
