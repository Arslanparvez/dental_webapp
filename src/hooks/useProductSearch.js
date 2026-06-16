import { useMemo } from 'react'

/**
 * Filter a product list by category and a free-text query.
 * - `category`: skip filtering when falsy or 'all'; otherwise match `product.category`.
 * - `query`: case-insensitive substring match against name + shortDescription.
 */
export function useProductSearch(allProducts, { category, query } = {}) {
  return useMemo(() => {
    const list = allProducts || []
    const q = (query || '').trim().toLowerCase()

    return list.filter((p) => {
      if (category && category !== 'all' && p.category !== category) return false
      if (!q) return true
      const haystack = `${p.name} ${p.shortDescription || ''}`.toLowerCase()
      return haystack.includes(q)
    })
  }, [allProducts, category, query])
}
