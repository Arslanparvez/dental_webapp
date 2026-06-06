# Digiart Centre Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, enterprise-grade Vite + React marketing website for Digiart Centre (dental CAD/CAM, trading, products) — all 9 page types, demo content, BCG-style slide-in navigation.

**Architecture:** Vite + React 18 SPA. Tailwind design system consumed by all pages. React Router for routes. Framer Motion for subtle animations. Content flows from a CMS-shaped `src/data` layer. Forms post through a single pluggable `submitForm()` adapter. Per-page SEO via react-helmet-async; prerendered for crawlers.

**Tech Stack:** Vite, React 18, React Router v6, Tailwind CSS, Framer Motion, react-helmet-async, Vitest + React Testing Library (logic tests only).

> **Verification convention:** Each task ends by running `npm run build` (must succeed) and `npm run lint` (must pass). Where a dev-server render check is noted, run `npm run dev` and confirm the route renders without console errors. Logic tasks add `npm run test`.

---

## Task 0: Scaffold project

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `.gitignore`, `.eslintrc.cjs`

- [ ] **Step 1: Scaffold Vite React app**

```bash
npm create vite@latest . -- --template react
```
If the directory is non-empty (docs/ exists), choose "Ignore files and continue".

- [ ] **Step 2: Install dependencies**

```bash
npm install react-router-dom framer-motion react-helmet-async
npm install -D tailwindcss@^3 postcss autoprefixer vitest @testing-library/react @testing-library/jest-dom jsdom eslint-plugin-jsx-a11y
npx tailwindcss init -p
```

- [ ] **Step 3: Add scripts to `package.json`**

Ensure `scripts` includes:
```json
"dev": "vite",
"build": "vite build",
"preview": "vite preview",
"lint": "eslint . --ext js,jsx",
"test": "vitest run"
```

- [ ] **Step 4: Configure Vitest in `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: { globals: true, environment: 'jsdom', setupFiles: './src/setupTests.js' },
})
```
Create `src/setupTests.js` with: `import '@testing-library/jest-dom'`

- [ ] **Step 5: Verify build & commit**

Run: `npm run build` → Expected: succeeds.
```bash
git add -A && git commit -m "chore: scaffold Vite + React project"
```

---

## Task 1: Tailwind design tokens, fonts, global styles

**Files:**
- Modify: `tailwind.config.js`
- Create: `src/styles/index.css`
- Modify: `src/main.jsx` (import css, fonts)
- Modify: `index.html` (Google Fonts preconnect/link)

- [ ] **Step 1: Configure `tailwind.config.js`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F2B46',
        teal: '#00A6A6',
        mint: '#7ED6C2',
        sky: '#DCEFFD',
        offwhite: '#FFFFFF',
        lightgray: '#F5F7FA',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      maxWidth: { container: '1280px' },
      keyframes: {
        'fade-up': { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        'gradient-shift': { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: `src/styles/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: light; }
html { scroll-behavior: smooth; }
body { @apply font-body text-navy bg-offwhite antialiased; }
h1,h2,h3,h4,h5 { @apply font-heading; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
}
```

- [ ] **Step 3: Fonts in `index.html` `<head>`**

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet">
```
Set `<title>` and a meta description; update `lang="en"`.

- [ ] **Step 4: Import css in `src/main.jsx`**

Replace default css import with `import './styles/index.css'`.

- [ ] **Step 5: Smoke test, build & commit**

Add a temporary `<h1 className="font-heading text-teal">Digiart</h1>` to App, run `npm run dev`, confirm Poppins + teal render, then revert temp markup.
```bash
git add -A && git commit -m "feat: tailwind theme, fonts, global styles"
```

---

## Task 2: Core hooks

**Files:**
- Create: `src/hooks/useReducedMotion.js`, `src/hooks/useScrollPosition.js`, `src/hooks/useLockBody.js`, `src/hooks/useDisclosure.js`
- Test: `src/hooks/useDisclosure.test.js`

- [ ] **Step 1: Write failing test for `useDisclosure`**

```js
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
```

- [ ] **Step 2: Run test, verify it fails**

Run: `npm run test -- useDisclosure` → Expected: FAIL (module not found).

- [ ] **Step 3: Implement hooks**

`src/hooks/useDisclosure.js`:
```js
import { useState, useCallback } from 'react'
export function useDisclosure(initial = false) {
  const [isOpen, setIsOpen] = useState(initial)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])
  return { isOpen, open, close, toggle }
}
```

`src/hooks/useReducedMotion.js`:
```js
import { useEffect, useState } from 'react'
export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}
```

`src/hooks/useScrollPosition.js`:
```js
import { useEffect, useState } from 'react'
export function useScrollPosition(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}
```

`src/hooks/useLockBody.js`:
```js
import { useEffect } from 'react'
export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [locked])
}
```

- [ ] **Step 4: Run test, verify it passes**

Run: `npm run test -- useDisclosure` → Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: core hooks (disclosure, reduced-motion, scroll, lock-body)"
```

---

## Task 3: Animation + layout primitives

**Files:**
- Create: `src/lib/motion.js` (shared variants), `src/components/ui/Container.jsx`, `src/components/ui/Section.jsx`, `src/components/ui/SectionHeading.jsx`, `src/components/ui/FadeIn.jsx`, `src/components/ui/Reveal.jsx`, `src/components/ui/FloatingShapes.jsx`

- [ ] **Step 1: `src/lib/motion.js`**

```js
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
export const stagger = { show: { transition: { staggerChildren: 0.12 } } }
export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
}
```

- [ ] **Step 2: `FadeIn.jsx` and `Reveal.jsx`**

`FadeIn.jsx` wraps children in `motion.div` using `whileInView="show"`, `viewport={{ once: true, margin: '-80px' }}`, variants `fadeUp`. When `useReducedMotion()` is true, render a plain `<div>`.

`Reveal.jsx` same pattern but slide-up variant with optional `delay` prop (sets `transition.delay`). Used for card grids (combine with `stagger` on parent).

Each accepts `as`, `className`, `delay`, `...rest`.

- [ ] **Step 3: `Container.jsx`, `Section.jsx`, `SectionHeading.jsx`**

`Container`: `<div className="mx-auto w-full max-w-container px-5 sm:px-8 ...">`.
`Section`: `<section className="py-16 md:py-24 ...">` with optional `tone` prop (`'light' | 'navy' | 'white'`) mapping to bg classes (`bg-lightgray`, `bg-navy text-offwhite`, `bg-offwhite`).
`SectionHeading`: props `eyebrow`, `title`, `subtitle`, `align`; eyebrow is a teal uppercase label, title is large Poppins, subtitle muted. Wrap in `FadeIn`.

- [ ] **Step 4: `FloatingShapes.jsx`**

Absolutely-positioned decorative SVG/blurred circles (navy/teal/mint/sky) with `animate-float` (varied delays), `aria-hidden="true"`, `pointer-events-none`. Disabled when `useReducedMotion()`.

- [ ] **Step 5: Build & commit**

Run `npm run build`. 
```bash
git add -A && git commit -m "feat: animation + layout primitives"
```

---

## Task 4: UI primitives (Button, Card, Badge, AnimatedCounter, form fields)

**Files:**
- Create: `src/components/ui/Button.jsx`, `Card.jsx`, `Badge.jsx`, `AnimatedCounter.jsx`, `Input.jsx`, `Textarea.jsx`, `Select.jsx`
- Test: `src/components/ui/AnimatedCounter.test.jsx`

- [ ] **Step 1: `Button.jsx`**

Variants via prop `variant` (`'primary'|'secondary'|'outline'|'ghost'`) and `size`. Renders `<button>` or, when `to` prop given, React Router `<Link>`, or `<a>` when `href` given. Primary = teal bg, hover lift/scale (`transition hover:-translate-y-0.5 hover:shadow-lg`), outline = navy border. Always visible focus ring (`focus-visible:ring-2 ring-teal`).

- [ ] **Step 2: `Card.jsx`, `Badge.jsx`**

`Card`: rounded-2xl, white bg, subtle border + shadow, `hover:shadow-xl transition`; optional `hoverable` for `-translate-y-1`. `Badge`: small pill, `tone` prop (teal/mint/sky/navy).

- [ ] **Step 3: Failing test for `AnimatedCounter`**

```jsx
import { render, screen } from '@testing-library/react'
import { AnimatedCounter } from './AnimatedCounter'

test('renders the target value and suffix', () => {
  render(<AnimatedCounter value={500} suffix="+" immediate />)
  expect(screen.getByText(/500\+/)).toBeInTheDocument()
})
```

- [ ] **Step 4: Run test, verify it fails**

Run: `npm run test -- AnimatedCounter` → Expected: FAIL.

- [ ] **Step 5: Implement `AnimatedCounter.jsx`**

Counts from 0 to `value` over ~1.6s using `requestAnimationFrame`, triggered when in view (Framer `useInView`) or immediately when `immediate` prop set or reduced-motion is on (jump straight to `value`). Renders `prefix + formatted number + suffix`.

- [ ] **Step 6: Run test, verify passes**

Run: `npm run test -- AnimatedCounter` → Expected: PASS.

- [ ] **Step 7: Form fields**

`Input`, `Textarea`, `Select`: label + control + error text; accessible (`htmlFor`/`id`, `aria-invalid`, `aria-describedby`); consistent styling (rounded, border, focus ring).

- [ ] **Step 8: Build, test & commit**

Run `npm run build` and `npm run test`.
```bash
git add -A && git commit -m "feat: UI primitives (button, card, badge, counter, form fields)"
```

---

## Task 5: Reusable composite UI (Carousel, Accordion, Lightbox)

**Files:**
- Create: `src/components/ui/Carousel.jsx`, `src/components/ui/Accordion.jsx`, `src/components/ui/Lightbox.jsx`

- [ ] **Step 1: `Carousel.jsx`**

Horizontal slider: prev/next buttons + dot indicators, keyboard arrow support, `aria-roledescription="carousel"`. Props: `items`, `renderItem`, `perView` (responsive). Uses transform translate; respects reduced-motion (instant). Used for Featured Products and Testimonials.

- [ ] **Step 2: `Accordion.jsx`**

Controlled/uncontrolled accordion with `items=[{id,title,content}]`. Button uses `aria-expanded`/`aria-controls`; content region `role="region"`. Smooth height via Framer Motion. Used for FAQ-style content and mobile sub-nav.

- [ ] **Step 3: `Lightbox.jsx`**

Fullscreen overlay for gallery: open at index, prev/next, close on `Esc`/overlay/✕, focus trap, `useLockBody`, `role="dialog" aria-modal="true"`. Props: `images`, `index`, `onClose`, `onIndexChange`.

- [ ] **Step 4: Build & commit**

Run `npm run build`.
```bash
git add -A && git commit -m "feat: carousel, accordion, lightbox primitives"
```

---

## Task 6: SEO helper + form adapter

**Files:**
- Create: `src/lib/seo.js`, `src/components/Seo.jsx`, `src/lib/submitForm.js`
- Test: `src/lib/submitForm.test.js`
- Modify: `src/main.jsx` (wrap app in `HelmetProvider`)

- [ ] **Step 1: `src/lib/seo.js`**

Exports `SITE = { name: 'Digiart Centre', url, defaultDescription, ogImage }` and a `buildTitle(pageTitle)` helper → `"<page> | Digiart Centre"`.

- [ ] **Step 2: `Seo.jsx`**

Props `title`, `description`, `image`, `path`. Renders `<Helmet>` with title, meta description, canonical, Open Graph + Twitter tags using `SITE` defaults as fallback.

- [ ] **Step 3: Wrap app in `HelmetProvider`**

In `src/main.jsx`, wrap `<App/>` with `<HelmetProvider>`.

- [ ] **Step 4: Failing test for `submitForm`**

```js
import { submitForm } from './submitForm'

test('rejects when required fields missing', async () => {
  await expect(submitForm('inquiry', { email: '' })).rejects.toThrow(/required/i)
})
test('resolves with success for valid payload (mock mode)', async () => {
  const res = await submitForm('contact', { name: 'A', email: 'a@b.com', message: 'hi' })
  expect(res.ok).toBe(true)
})
```

- [ ] **Step 5: Run test, verify fails**

Run: `npm run test -- submitForm` → Expected: FAIL.

- [ ] **Step 6: Implement `submitForm.js`**

```js
// Pluggable form adapter. Set VITE_FORM_ENDPOINT to enable real POST (e.g. Formspree).
const REQUIRED = {
  contact: ['name', 'email', 'message'],
  inquiry: ['name', 'email'],
  newsletter: ['email'],
}
export async function submitForm(type, data) {
  const required = REQUIRED[type] || []
  const missing = required.filter((f) => !data?.[f]?.toString().trim())
  if (missing.length) throw new Error(`Required fields missing: ${missing.join(', ')}`)
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT
  if (!endpoint) {
    // mock mode for local/demo
    await new Promise((r) => setTimeout(r, 600))
    return { ok: true, mock: true }
  }
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ formType: type, ...data }),
  })
  if (!res.ok) throw new Error('Submission failed. Please try again.')
  return { ok: true }
}
```

- [ ] **Step 7: Run test, verify passes**

Run: `npm run test -- submitForm` → Expected: PASS.

- [ ] **Step 8: Build, test & commit**

```bash
git add -A && git commit -m "feat: SEO helper and pluggable form adapter"
```

---

## Task 7: Data layer

**Files:**
- Create: `src/data/locations.js`, `stats.js`, `services.js`, `categories.js`, `products.js`, `testimonials.js`, `team.js`, `values.js`, `timeline.js`, `posts.js`, `gallery.js`, `whyChooseUs.js`, `nav.js`
- Test: `src/data/products.test.js`

- [ ] **Step 1: `nav.js` — navigation tree (drawer + footer consume this)**

```js
export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', children: [
    { label: 'CAD/CAM Designing', to: '/services#cadcam' },
    { label: 'Dental Laboratory Solutions', to: '/services#lab' },
    { label: 'Digital Dentistry', to: '/services#digital' },
    { label: 'Trading Services', to: '/services#trading' },
    { label: 'Technical Support', to: '/services#support' },
  ]},
  { label: 'Products', to: '/products', children: [
    { label: 'CAD/CAM Materials', to: '/products?category=cadcam-materials' },
    { label: 'Dental Equipment', to: '/products?category=dental-equipment' },
    { label: 'Laboratory Tools', to: '/products?category=laboratory-tools' },
    { label: 'Implant Solutions', to: '/products?category=implant-solutions' },
    { label: 'Consumables', to: '/products?category=consumables' },
    { label: 'Digital Dentistry Products', to: '/products?category=digital-dentistry' },
  ]},
  { label: 'Philippines Branch', to: '/philippines' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]
```

- [ ] **Step 2: `locations.js`, `stats.js`, `values.js`, `timeline.js`, `whyChooseUs.js`**

`locations.js`: array of `{ id, name, type: 'HQ'|'Branch', address, phone, whatsapp, email, hours, mapEmbedUrl, lat, lng }` for Head Office and Philippines (realistic placeholder values).
`stats.js`: `[{ label:'Clients Served', value:500, suffix:'+' }, { label:'Projects Completed', value:12000, suffix:'+' }, { label:'Products Available', value:1000, suffix:'+' }, { label:'Countries Served', value:25, suffix:'+' }]`.
`values.js`: 4-6 core values `{ icon, title, text }`.
`timeline.js`: `[{ year, title, text }]` founding → today.
`whyChooseUs.js`: 6 items `{ icon, title, text }` — Digital Expertise, Precision Designs, Global Standards, Fast Turnaround, Quality Assurance, International Support.

- [ ] **Step 3: `categories.js` + `services.js`**

`categories.js`: the 6 product categories `{ slug, name, description, icon }` (slugs match `nav.js` query values).
`services.js`: 5 service categories `{ id, slug, title, summary, description, features:[], process:[{step,title,text}], icon }` covering CAD/CAM Designing (with crown/bridge/implant/full-arch sub-items), Dental Laboratory Solutions, Digital Dentistry, Trading Services, Technical Support.

- [ ] **Step 4: `products.js` + a generator for volume**

Define a base array of richly-described products spanning all 6 categories, plus a small helper that programmatically expands them into ~120+ entries (varying name/specs) so the grid/search/pagination are exercised at scale. Each product: `{ id, slug, name, category (slug), images:[], shortDescription, description, specs:{}, features:[], benefits:[], relatedIds:[], featured:boolean }`. Use picsum/placeholder image URLs or local `/public` images.

- [ ] **Step 5: `testimonials.js`, `team.js`, `posts.js`, `gallery.js`**

`testimonials.js`: `{ id, name, role, company, photo, quote }`.
`team.js`: `{ id, name, role, photo, bio, location }` (include Philippines members).
`posts.js`: `{ id, slug, title, category, excerpt, cover, date, author, content }` across the 4 blog categories.
`gallery.js`: `{ id, src, thumb, category: 'lab'|'products'|'cases'|'office', alt, w, h }`.

- [ ] **Step 6: Failing test for product data integrity**

```js
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
```

- [ ] **Step 7: Run test, fix data until it passes**

Run: `npm run test -- products` → Expected: PASS.

- [ ] **Step 8: Commit**

```bash
git add -A && git commit -m "feat: CMS-shaped data layer (products, services, content)"
```

---

## Task 8: Layout shell — TopBar + BCG-style SideNav drawer

**Files:**
- Create: `src/components/layout/TopBar.jsx`, `src/components/layout/SideNav.jsx`
- Create: `src/components/layout/Layout.jsx` (wraps Outlet with TopBar/Footer/WhatsApp/ScrollToTop)

- [ ] **Step 1: `SideNav.jsx` — the drawer**

Props: `isOpen`, `onClose`. Behavior:
- Renders a dark navy overlay (`motion.div`, fade) + a right-side panel (`motion.aside`, slide-in X). Desktop width ~46vw (`max-w-xl`), full-screen on mobile.
- Panel header: logo, search input, close `✕` button.
- Maps `NAV` from `src/data/nav.js`: top-level items as large Poppins links. Items with `children` open a **secondary column** (desktop) / accordion (mobile) — track `activeIndex` state for the drill-down column.
- Footer of panel: HQ + Philippines quick contacts (from `locations.js`) + social icons.
- Accessibility: `role="dialog" aria-modal="true"`, focus trap, `useLockBody(isOpen)`, close on `Esc` (keydown listener) and overlay click and on route change (`useEffect` on `useLocation()`).
- Respects reduced-motion (instant show/hide).

- [ ] **Step 2: `TopBar.jsx`**

- Fixed top bar. Uses `useScrollPosition()` → transparent when at top (over hero), solid navy + shadow when scrolled.
- Left: logo (Link to `/`). Right: search icon button, "Request a Quote" `Button` (to `/contact`), and a `Menu` label + hamburger button that calls `open()`.
- Owns the drawer via `useDisclosure()`; renders `<SideNav isOpen onClose />`.

- [ ] **Step 3: `Layout.jsx`**

```jsx
// renders <TopBar/>, <main><Outlet/></main>, <Footer/>, <WhatsAppButton/>, <ScrollToTop/>
```
(Footer/WhatsApp/ScrollToTop created in Task 9 — import them now; they may be stubs until then.)

- [ ] **Step 4: Manual verification**

Run `npm run dev`. Confirm: hamburger opens drawer, overlay+slide animate, Esc/overlay/link close it, body scroll locks, Services/Products show drill-down sub-links, top bar turns solid on scroll. Build must pass.

- [ ] **Step 5: Commit**

```bash
git add -A && git commit -m "feat: top bar + BCG-style slide-in side navigation"
```

---

## Task 9: Footer, WhatsApp button, ScrollToTop, loader

**Files:**
- Create: `src/components/layout/Footer.jsx`, `WhatsAppButton.jsx`, `ScrollToTop.jsx`, `src/components/ui/Loader.jsx`, `src/components/ScrollRestoration.jsx`

- [ ] **Step 1: `Footer.jsx`**

Navy mega-footer: company blurb + logo, quick links (from `NAV`), services list, newsletter form (uses `submitForm('newsletter', …)` with inline success/error state), social icons, HQ + Philippines contact blocks (from `locations.js`), bottom legal row with year.

- [ ] **Step 2: `WhatsAppButton.jsx`**

Fixed bottom-right floating button linking to `https://wa.me/<number>` (number from `locations.js` HQ whatsapp), `aria-label`, subtle pulse (reduced-motion safe).

- [ ] **Step 3: `ScrollToTop.jsx` + `ScrollRestoration.jsx`**

`ScrollToTop`: appears after scrolling down, scrolls to top on click. `ScrollRestoration`: on route change, `window.scrollTo(0,0)` (listens to `useLocation`). Add `ScrollRestoration` inside Router.

- [ ] **Step 4: `Loader.jsx`**

Modern branded loading animation (animated logo/spinner with brand colors) used as Suspense fallback for lazy routes.

- [ ] **Step 5: Build, verify, commit**

Run `npm run dev` + `npm run build`.
```bash
git add -A && git commit -m "feat: footer, WhatsApp button, scroll-to-top, loader"
```

---

## Task 10: Router + page transitions + App wiring

**Files:**
- Create: `src/router.jsx`
- Modify: `src/App.jsx`
- Create stub pages: `src/pages/{Home,About,Services,Products,ProductDetail,Philippines,Gallery,Blog,BlogPost,Contact,NotFound}.jsx`

- [ ] **Step 1: Stub each page**

Each stub: `export default function Home(){ return <Seo title="..."/> + <h1>` placeholder. This lets routing work before content.

- [ ] **Step 2: `src/router.jsx`**

`createBrowserRouter` with `Layout` as root element and children for all routes (table in spec §7). Lazy-load page modules via `React.lazy` + `Suspense` fallback `<Loader/>`. Include `*` → `NotFound`.

- [ ] **Step 3: Page transitions**

Wrap page content with `AnimatePresence` + `motion.div` using `pageTransition` variants (keyed by pathname). Respect reduced-motion.

- [ ] **Step 4: `App.jsx`**

```jsx
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
export default function App() { return <RouterProvider router={router} /> }
```

- [ ] **Step 5: Verify all routes render & commit**

Run `npm run dev`, click through every nav link → each stub renders, drawer closes on navigation, transitions animate. Build passes.
```bash
git add -A && git commit -m "feat: router, lazy routes, page transitions, page stubs"
```

---

## Task 11: Shared page sections

**Files:**
- Create: `src/components/sections/Hero.jsx`, `StatsBand.jsx`, `ServicesGrid.jsx`, `FeaturedProducts.jsx`, `WhyChooseUs.jsx`, `GlobalPresence.jsx`, `TestimonialsSlider.jsx`, `CtaBand.jsx`, `ProductCard.jsx`, `ServiceCard.jsx`, `PageHeader.jsx`

- [ ] **Step 1: `PageHeader.jsx`**

Reusable interior-page banner: navy gradient bg + `FloatingShapes`, breadcrumb, title, subtitle. Props `title`, `subtitle`, `breadcrumb`.

- [ ] **Step 2: `Hero.jsx` (home)**

Full-width hero: animated gradient bg (`bg-[linear-gradient(...)] bg-[length:200%_200%] animate-gradient-shift` in navy/teal), subtle floating particles (`FloatingShapes`), headline "Transforming Digital Dentistry Through Precision & Innovation", subheadline, two CTAs (Request a Quote → `/contact`, Explore Products → `/products`), hero imagery (placeholder lab/CAD image with `object-cover`). Reduced-motion safe.

- [ ] **Step 3: `StatsBand.jsx`**

Maps `stats.js` into `AnimatedCounter` cards in a `FadeIn` grid.

- [ ] **Step 4: `ServiceCard.jsx` + `ServicesGrid.jsx`**

`ServiceCard`: icon, title, summary, hover lift, link to service anchor. `ServicesGrid`: maps `services.js` into staggered `Reveal` cards.

- [ ] **Step 5: `ProductCard.jsx` + `FeaturedProducts.jsx`**

`ProductCard`: image with smooth zoom-on-hover (`overflow-hidden` + `group-hover:scale-105 transition`), category `Badge`, name, short description, link to `/products/:slug`. `FeaturedProducts`: filters `products.featured` into `Carousel`.

- [ ] **Step 6: `WhyChooseUs.jsx`, `GlobalPresence.jsx`, `TestimonialsSlider.jsx`, `CtaBand.jsx`**

`WhyChooseUs`: 6 `whyChooseUs.js` cards in staggered reveal. `GlobalPresence`: interactive map area (styled world-map SVG or map image) with selectable HQ / Philippines markers showing the location's office info panel (from `locations.js`). `TestimonialsSlider`: `Carousel` of `testimonials.js` with photo/company/quote + a contact CTA. `CtaBand`: navy band "Let's Build Better Smiles Together" + Contact Us / Request Consultation buttons.

- [ ] **Step 7: Build & commit**

```bash
git add -A && git commit -m "feat: shared page sections (hero, stats, services, products, presence, testimonials, CTA)"
```

---

## Task 12: Home page

**Files:**
- Modify: `src/pages/Home.jsx`

- [ ] **Step 1: Compose Home**

Order: `<Seo>` → `Hero` → About snapshot (intro + highlights, link to /about) → `StatsBand` → `ServicesGrid` (in a `Section`) → `FeaturedProducts` → `WhyChooseUs` → `GlobalPresence` → `TestimonialsSlider` → `CtaBand`. Alternate `Section` tones for rhythm.

- [ ] **Step 2: Verify & commit**

Run `npm run dev`, confirm Home renders all sections, animations fire on scroll, no console errors. Build passes.
```bash
git add -A && git commit -m "feat: home page"
```

---

## Task 13: About page

**Files:**
- Modify: `src/pages/About.jsx`
- Create: `src/components/sections/Timeline.jsx`

- [ ] **Step 1: `Timeline.jsx`**

Vertical timeline from `timeline.js`, entries reveal on scroll (alternating sides on desktop), connecting line, year badges. Reduced-motion safe.

- [ ] **Step 2: Compose About**

`PageHeader` → Company Story → Mission → Vision → Core Values (`values.js` grid) → Team (`team.js` grid with hover) → Technology & Infrastructure → `Timeline` → `GlobalPresence`. Add `<Seo>`.

- [ ] **Step 3: Verify & commit**

```bash
git add -A && git commit -m "feat: about page with growth timeline"
```

---

## Task 14: Services page

**Files:**
- Modify: `src/pages/Services.jsx`
- Create: `src/components/sections/ProcessFlow.jsx`

- [ ] **Step 1: `ProcessFlow.jsx`**

Horizontal numbered step diagram from a service's `process[]` (connector arrows, step cards), wraps on mobile. Reduced-motion safe.

- [ ] **Step 2: Compose Services**

`PageHeader` → for each of the 5 `services.js` entries render a `Section` with `id` (matches `nav.js` anchors: `cadcam`, `lab`, `digital`, `trading`, `support`): title, description, feature list, `ProcessFlow`, supporting image; alternate tone. End with `CtaBand`. Add `<Seo>`. Handle hash-scroll to anchor on load.

- [ ] **Step 3: Verify & commit**

Run dev, click Services sub-links in drawer → scrolls to correct section.
```bash
git add -A && git commit -m "feat: services page with process-flow diagrams"
```

---

## Task 15: Products listing — search, filter, pagination

**Files:**
- Modify: `src/pages/Products.jsx`
- Create: `src/components/products/ProductFilters.jsx`, `src/components/products/ProductGrid.jsx`
- Create: `src/hooks/useProductSearch.js`
- Test: `src/hooks/useProductSearch.test.js`

- [ ] **Step 1: Failing test for `useProductSearch`**

```js
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
```

- [ ] **Step 2: Run test, verify fails**

Run: `npm run test -- useProductSearch` → Expected: FAIL.

- [ ] **Step 3: Implement `useProductSearch.js`**

Returns memoized filtered list: filter by `category` (skip when `'all'`), then by `query` against name + shortDescription (case-insensitive). 

- [ ] **Step 4: Run test, verify passes**

Run: `npm run test -- useProductSearch` → Expected: PASS.

- [ ] **Step 5: `ProductFilters.jsx` + `ProductGrid.jsx`**

`ProductFilters`: search `Input` + category chips/`Select` (from `categories.js` + "All"). `ProductGrid`: responsive grid of `ProductCard` in staggered `Reveal`, with pagination ("Load more" or numbered pages) capping ~12/page.

- [ ] **Step 6: Compose Products page**

`PageHeader` → filters + grid. Sync `category` and `query` to URL search params (`useSearchParams`) so drawer category links (`?category=...`) preselect. Empty-state message when no matches. Add `<Seo>`.

- [ ] **Step 7: Verify & commit**

Run dev: search narrows results, category chips filter, drawer category links land pre-filtered, pagination works.
```bash
git add -A && git commit -m "feat: products listing with search, filters, pagination"
```

---

## Task 16: Product detail page

**Files:**
- Modify: `src/pages/ProductDetail.jsx`
- Create: `src/components/products/ProductGallery.jsx`, `src/components/products/InquiryForm.jsx`

- [ ] **Step 1: `ProductGallery.jsx`**

Main image + thumbnail strip, smooth zoom on hover, opens `Lightbox` on click. Keyboard accessible.

- [ ] **Step 2: `InquiryForm.jsx`**

Fields: name, email, phone, quantity, message (prefilled "Inquiry about <product>"). Validates + calls `submitForm('inquiry', …)`; shows loading + success/error states. Reusable (also used on Products/Contact where noted).

- [ ] **Step 3: Compose ProductDetail**

Read `:slug` via `useParams`, look up in `products.js` (404 redirect if missing). Layout: `ProductGallery` + info (name, category `Badge`, description, specs table, features list, benefits) + `InquiryForm`. Related products (`relatedIds`) as `ProductCard` row. Add dynamic `<Seo>` (product name/description/image).

- [ ] **Step 4: Verify & commit**

Run dev: click a product card → detail renders, gallery + lightbox work, inquiry form submits (mock), related products link correctly.
```bash
git add -A && git commit -m "feat: product detail page with gallery and inquiry form"
```

---

## Task 17: Philippines Branch page

**Files:**
- Modify: `src/pages/Philippines.jsx`

- [ ] **Step 1: Compose page**

`PageHeader` → office details (address/phone/email/hours from `locations.js` Philippines entry) → team (filter `team.js` by `location === 'Philippines'`) → services available (subset of `services.js`) → contact block (phone/email/WhatsApp) → embedded Google Map (`<iframe>` from location `mapEmbedUrl`, lazy, titled). Add `<Seo>`.

- [ ] **Step 2: Verify & commit**

```bash
git add -A && git commit -m "feat: Philippines branch page"
```

---

## Task 18: Gallery page

**Files:**
- Modify: `src/pages/Gallery.jsx`

- [ ] **Step 1: Compose Gallery**

`PageHeader` → category filter chips (lab/products/cases/office/all) → CSS masonry grid (`columns-1 sm:columns-2 lg:columns-3`) of images with smooth hover zoom; click opens shared `Lightbox` with prev/next across the filtered set. Lazy-load images. Add `<Seo>`.

- [ ] **Step 2: Verify & commit**

Run dev: filtering works, lightbox opens/navigates/closes, focus trapped.
```bash
git add -A && git commit -m "feat: gallery page with masonry grid and lightbox"
```

---

## Task 19: Blog list + post pages

**Files:**
- Modify: `src/pages/Blog.jsx`, `src/pages/BlogPost.jsx`
- Create: `src/components/blog/PostCard.jsx`

- [ ] **Step 1: `PostCard.jsx`**

Cover image (hover zoom), category `Badge`, title, excerpt, date/author, link to `/blog/:slug`.

- [ ] **Step 2: Compose Blog list**

`PageHeader` → category filter (4 categories + all) → grid of `PostCard` in staggered reveal. Add `<Seo>`.

- [ ] **Step 3: Compose BlogPost**

Read `:slug`, look up in `posts.js` (404 if missing). Render cover, title, meta, content (paragraphs), related posts by category. Dynamic `<Seo>`.

- [ ] **Step 4: Verify & commit**

```bash
git add -A && git commit -m "feat: blog list and post pages"
```

---

## Task 20: Contact page + 404

**Files:**
- Modify: `src/pages/Contact.jsx`, `src/pages/NotFound.jsx`
- Create: `src/components/sections/ContactForm.jsx`

- [ ] **Step 1: `ContactForm.jsx`**

Fields name/email/phone/subject/message; validates + `submitForm('contact', …)`; loading + success/error states; accessible labels/errors.

- [ ] **Step 2: Compose Contact**

`PageHeader` → two-column: `ContactForm` + contact details (phone, email, WhatsApp link, both branch addresses from `locations.js`) → embedded Google Map. Add `<Seo>`.

- [ ] **Step 3: `NotFound.jsx`**

Friendly 404 with brand styling + button back to Home. `<Seo title="Page Not Found">`.

- [ ] **Step 4: Verify & commit**

Run dev: form submits (mock) with success message; unknown URL shows 404.
```bash
git add -A && git commit -m "feat: contact page and 404"
```

---

## Task 21: Accessibility + responsive QA pass

**Files:**
- Modify: any components needing fixes
- Modify: `.eslintrc.cjs` (add `plugin:jsx-a11y/recommended`)

- [ ] **Step 1: Enable jsx-a11y lint**

Add `'plugin:jsx-a11y/recommended'` to ESLint extends. Run `npm run lint`, fix all a11y violations (alt text, labels, button vs link, heading order).

- [ ] **Step 2: Keyboard + reduced-motion audit**

Tab through every page: focus visible everywhere, drawer/lightbox trap focus and restore on close, Esc closes overlays. Toggle OS reduced-motion → confirm animations disabled.

- [ ] **Step 3: Responsive audit**

Check 360px / 768px / 1280px on every page: no overflow, drawer full-screen on mobile with accordion sub-nav, grids reflow, images scale. Fix issues.

- [ ] **Step 4: Commit**

```bash
git add -A && git commit -m "fix: accessibility and responsive QA pass"
```

---

## Task 22: SEO, performance, prerender, README

**Files:**
- Create: `public/robots.txt`, `public/sitemap.xml`, `README.md`, `.env.example`
- Modify: `package.json` (prerender), `index.html`

- [ ] **Step 1: Per-page SEO check**

Confirm every page renders a unique `<Seo>` title/description. Add `robots.txt` (allow all + sitemap ref) and a `sitemap.xml` listing all static routes.

- [ ] **Step 2: Performance**

Confirm routes are lazy (Task 10) and images use `loading="lazy"` + width/height. Run `npm run build`, review bundle output; code-split heavy sections if any chunk is large.

- [ ] **Step 3: Prerender for crawlers**

Add `react-snap` (or `vite-plugin-prerender`): add `"postbuild": "react-snap"` and `reactSnap` config listing routes; switch `main.jsx` to `hydrateRoot` when `#root` has children. Run build+postbuild, confirm `dist` route HTML contains real content.

- [ ] **Step 4: `.env.example` + README**

`.env.example`: `VITE_FORM_ENDPOINT=` with comment. `README.md`: project overview, setup (`npm install`, `npm run dev`), how to wire forms (set `VITE_FORM_ENDPOINT`), how to swap data layer for a CMS, build/deploy steps.

- [ ] **Step 5: Final full verification**

Run `npm run lint`, `npm run test`, `npm run build` → all pass. Click through entire site in `npm run preview`.
```bash
git add -A && git commit -m "chore: SEO, performance, prerender, docs"
```

---

## Self-Review Notes

- **Spec coverage:** All 9 page types (Tasks 12–20), design system (1–5), BCG-style nav (8), data layer incl. hundreds of products (7), search/filter/pagination (15), product detail + inquiry (16), animations (3,11), SEO/a11y/perf/responsive (21–22), WhatsApp/newsletter/social/maps (9,17,20). Covered.
- **Type consistency:** `submitForm(type, data)` types (`contact`/`inquiry`/`newsletter`) used consistently in Tasks 6,9,16,20. `NAV` tree (Task 7) consumed by SideNav/Footer (Tasks 8,9). Category slugs in `categories.js`/`nav.js`/`products.js` aligned (Task 7) and consumed by `useProductSearch` (Task 15). `useDisclosure` (Task 2) used by TopBar (Task 8).
- **No placeholders:** Logic-bearing files include full code; visual sections specify files, props, data source, and verification.
