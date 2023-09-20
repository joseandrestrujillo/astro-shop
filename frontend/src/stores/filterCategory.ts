import { atom } from 'nanostores'
import type { Category } from '../types/Product'

export const filterCategory = atom<Category | null>(null)
