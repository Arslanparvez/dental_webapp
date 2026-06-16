import { renderHook } from '@testing-library/react'
import { useProductSearch } from './useProductSearch'
import { products } from '../data/products'

test('filters by category and query', () => {
  const cat = products[0].category
  const { result } = renderHook(() => useProductSearch(products, { category: cat, query: '' }))
  expect(result.current.every((p) => p.category === cat)).toBe(true)
})
test('query matches name case-insensitively', () => {
  const term = products[0].name.slice(0, 3).toLowerCase()
  const { result } = renderHook(() => useProductSearch(products, { category: 'all', query: term }))
  expect(result.current.length).toBeGreaterThan(0)
})
