import { products } from './products'
import { categories } from './categories'

test('every product has required fields and a valid category', () => {
  const slugs = new Set(categories.map((c) => c.slug))
  for (const p of products) {
    expect(p.id).toBeTruthy()
    expect(p.slug).toBeTruthy()
    expect(p.name).toBeTruthy()
    expect(slugs.has(p.category)).toBe(true)
  }
})
test('product slugs are unique', () => {
  const s = products.map((p) => p.slug)
  expect(new Set(s).size).toBe(s.length)
})
test('there are at least 120 products', () => {
  expect(products.length).toBeGreaterThanOrEqual(120)
})
