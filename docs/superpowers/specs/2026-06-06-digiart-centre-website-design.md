# Digiart Centre — Website Design Spec

**Date:** 2026-06-06
**Status:** Approved (pending spec review)

## 1. Overview

A modern, premium, enterprise-grade marketing website for **Digiart Centre**, a
dental technology company specializing in:

- Dental CAD/CAM Designing
- Dental Trading
- Dental Products & Solutions

The site must establish credibility, showcase services and products, generate
leads, and highlight international presence (Head Office + Philippines branch).
Target impression: a world-class dental technology company, not a simple catalog.

Reference inspiration: honchon.com for quality bar; BCG.com for the navigation
pattern. Goal is a cleaner, more modern, internationally branded experience.

## 2. Decisions (locked)

| Decision | Choice |
| --- | --- |
| Framework | **Vite + React 18 (SPA)** |
| Scope | **Full site — all 9 page types** |
| Content | **Demo/placeholder content** (realistic copy, sample products, stock-style imagery), wired to a swappable data layer |
| Backend | **Frontend-only** — products/data from local `src/data/*` files (CMS-shaped); forms post through a single pluggable `submitForm()` adapter |
| Navigation | **BCG-style** slim top bar + full-height slide-in side drawer with multi-level drill-down |

## 3. Tech Stack

- **Vite + React 18** (JavaScript)
- **React Router** — client routing for all pages
- **Tailwind CSS** — custom theme encoding the brand palette + typography
- **Framer Motion** — subtle premium animations
- **react-helmet-async** — per-page SEO meta/title/OG tags
- Prerender hook (e.g. `react-snap` / `vite-plugin-prerender`) so crawlers
  receive real HTML content despite SPA architecture
- Lazy-loaded routes + images for fast loading

No backend server. Forms validate client-side and submit via one adapter the
client points at Formspree / email later.

## 4. Design System

Built **first**; every page consumes it.

### Color tokens
- Primary navy: `#0F2B46`
- Dental teal: `#00A6A6`
- Mint green (accent): `#7ED6C2`
- Sky blue (accent): `#DCEFFD`
- Soft white: `#FFFFFF`
- Light gray: `#F5F7FA`

### Typography
- Headings: **Poppins**
- Body: **Inter**
- Generous whitespace, strong hierarchical type scale

### UI primitives (`src/components/ui`)
`Button`, `Card`, `Section`, `Container`, `SectionHeading`, `Badge`,
`AnimatedCounter`, `FadeIn`, `Reveal` (slide-up), `FloatingShapes`
(geometric dental accents), `Lightbox`, `Carousel`/slider, `Accordion`,
`Input`/`Textarea`/`Select` form fields.

### Animations (subtle / premium only)
- Smooth page transitions (route-level)
- Fade-in on scroll
- Product/feature cards slide-up on reveal
- Button hover effects
- Animated counters (stats)
- Floating geometric dental elements (hero + section accents)
- Smooth image zoom on hover
- Modern loading animation
- **All animations respect `prefers-reduced-motion`** (disabled when set)

## 5. Layout Shell

- **Top bar:** transparent over hero → solid navy on scroll. Logo (left);
  right side has search icon, "Request a Quote" CTA, and a `Menu` label +
  hamburger toggle.
- **Side navigation drawer (BCG-style):**
  - Slides in from the right over a dark navy overlay (slide + fade)
  - Desktop: covers ~40–50% width; mobile: full-screen
  - Header: logo + close (`✕`) + search field
  - Primary items (Poppins, large): Home, About, Services, Products,
    Philippines Branch, Gallery, Blog, Contact
  - Items with children (Services, Products) use **multi-level drill-down**:
    secondary column of sub-links (column-style desktop, accordion mobile)
  - Footer: contact info, social icons, HQ + Philippines quick links
  - Closes on `Esc`, overlay click, or route change; traps focus while open
- **Footer (mega):** company blurb, quick links, services, newsletter signup,
  social icons, HQ + Philippines branch contacts, legal row
- **Floating WhatsApp button** (persistent)
- **Scroll-to-top button**

## 6. Data Layer (`src/data`)

CMS-shaped JS objects, designed to be swapped for a real CMS/API later:

- `products.js` — array shaped for hundreds of products: `id`, `slug`,
  `name`, `category`, `images[]`, `shortDescription`, `description`,
  `specs{}`, `features[]`, `benefits[]`, `relatedIds[]`
- `categories.js` — the 6 product categories
- `services.js` — service categories + sub-services + process steps
- `testimonials.js`, `team.js`, `posts.js` (blog), `gallery.js`,
  `locations.js` (HQ + Philippines), `stats.js`, `values.js`, `timeline.js`

### Product categories
CAD/CAM Materials · Dental Equipment · Laboratory Tools · Implant Solutions ·
Consumables · Digital Dentistry Products

## 7. Pages & Routes

| Route | Page | Key sections |
| --- | --- | --- |
| `/` | Home | Animated-gradient hero w/ floating particles + dual CTA; About snapshot w/ animated stats (Clients, Projects, Products, Countries); Services cards; Featured Products carousel; Why Choose Us (6 cards); Global Presence interactive map (HQ + Philippines); Testimonials slider; "Let's Build Better Smiles Together" CTA band |
| `/about` | About | Story, Mission, Vision, Core Values, Team grid, Technology & Infrastructure, animated growth Timeline, Global Presence |
| `/services` | Services | 5 detailed categories (CAD/CAM Designing, Dental Lab Solutions, Digital Dentistry, Trading Services, Technical Support) with process-flow diagrams |
| `/products` | Products | Search bar + category filters + responsive grid (paginated, hundreds-ready), inquiry CTA |
| `/products/:slug` | Product Detail | Image gallery, specs, features, benefits, related products, inquiry form |
| `/philippines` | Philippines Branch | Office details, team, services available, contact, embedded map |
| `/gallery` | Gallery | Filterable masonry grid + lightbox (lab, products, design cases, office) |
| `/blog` | Blog | Category-filtered post grid (Digital Dentistry, CAD/CAM Tech, Industry News, Product Updates) |
| `/blog/:slug` | Blog Post | Article detail |
| `/contact` | Contact | Contact form, Google Map embed, phone/email/WhatsApp, branch contacts |
| `*` | 404 | Not-found fallback |

### Services detail content
- CAD/CAM Designing → Crown, Bridge, Implant, Full-Arch design
- Dental Trading → Equipment Supply, Material Distribution
- Laboratory Solutions
- Consultation & Support → Technical Assistance, Training, Product Guidance

### Why Choose Us (6 cards)
Digital Expertise · Precision Designs · Global Standards · Fast Turnaround ·
Quality Assurance · International Support

## 8. Cross-Cutting Requirements

- **Responsive:** mobile-first, all breakpoints
- **Accessible:** semantic landmarks, keyboard nav, visible focus states,
  focus trapping in drawer/lightbox, `prefers-reduced-motion`, alt text
- **SEO:** per-page title/meta/OG via Helmet, semantic headings, sitemap-ready,
  prerendered HTML
- **Performance:** lazy routes + images, optimized assets, minimal bundle
- **Integrations:** WhatsApp, newsletter signup, social links, Google Map embeds
- **CMS-ready:** all content flows from the data layer

## 9. Folder Structure

```
public/                     # static assets, images, favicon
src/
  components/
    ui/                     # design-system primitives
    layout/                 # TopBar, SideNav drawer, Footer, WhatsApp btn, ScrollToTop
    sections/               # reusable page sections (Hero, Stats, ServicesGrid, ...)
  pages/                    # one folder/file per route
  data/                     # CMS-shaped content
  hooks/                    # useScrollPosition, useReducedMotion, useLockBody, ...
  lib/                      # submitForm adapter, helpers, SEO config
  styles/                   # Tailwind entry, global css, fonts
  App.jsx, main.jsx, router.jsx
```

## 10. Build Sequence

1. **Scaffold + design system** — Vite project, Tailwind theme, fonts, UI primitives
2. **Layout shell** — top bar, BCG-style side-nav drawer, footer, WhatsApp, scroll-to-top, router
3. **Data layer** — seed all `src/data` files with realistic demo content
4. **Home page** — all sections
5. **Remaining pages** — About, Services, Products + Detail, Philippines, Gallery, Blog + Post, Contact, 404
6. **Polish** — SEO meta, accessibility pass, responsive QA, performance (lazy load, prerender), final review

Commit at each milestone.

## 11. Out of Scope (YAGNI)

- Real backend / database / auth
- Real CMS integration (architecture is ready; integration deferred)
- E-commerce checkout / payments
- Real third-party form-service credentials (adapter stub provided)
