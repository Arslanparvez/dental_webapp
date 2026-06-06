import { renderHook, act } from '@testing-library/react'
import { useDisclosure } from './useDisclosure'

test('toggles open state and closes', () => {
  const { result } = renderHook(() => useDisclosure())
  expect(result.current.isOpen).toBe(false)
  act(() => result.current.open())
  expect(result.current.isOpen).toBe(true)
  act(() => result.current.close())
  expect(result.current.isOpen).toBe(false)
  act(() => result.current.toggle())
  expect(result.current.isOpen).toBe(true)
})
