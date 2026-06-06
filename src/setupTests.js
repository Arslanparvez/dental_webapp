import '@testing-library/jest-dom'

// jsdom does not implement IntersectionObserver; framer-motion's useInView needs it.
if (!('IntersectionObserver' in window)) {
  class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return []
    }
  }
  window.IntersectionObserver = IntersectionObserver
  globalThis.IntersectionObserver = IntersectionObserver
}

// jsdom does not implement matchMedia; provide a no-op stub for hooks that use it.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  })
}
