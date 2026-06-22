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
test('the catalog covers every material family', () => {
  expect(products.length).toBe(12)
  const families = new Set(products.map((p) => p.category))
  expect(families).toEqual(
    new Set(['white-zirconia', 'preshade-zirconia', 'multilayer-zirconia', 'pmma', 'flexible-resin', 'lithium-disilicate'])
  )
})
test('every product has an image and two card badges', () => {
  for (const p of products) {
    expect(p.image).toMatch(/^\/images\//)
    expect(Array.isArray(p.badges)).toBe(true)
    expect(p.badges.length).toBe(2)
  }
})
