import { render, screen } from '@testing-library/react'
import { AnimatedCounter } from './AnimatedCounter'

test('renders the target value and suffix', () => {
  render(<AnimatedCounter value={500} suffix="+" immediate />)
  expect(screen.getByText(/500\+/)).toBeInTheDocument()
})
