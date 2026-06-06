import { submitForm } from './submitForm'

test('rejects when required fields missing', async () => {
  await expect(submitForm('inquiry', { email: '' })).rejects.toThrow(/required/i)
})
test('resolves with success for valid payload (mock mode)', async () => {
  const res = await submitForm('contact', { name: 'A', email: 'a@b.com', message: 'hi' })
  expect(res.ok).toBe(true)
})
