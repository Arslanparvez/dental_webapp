import Seo from '../components/Seo'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" />
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-metallic-red-panel text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-grid-faint bg-[size:44px_44px] opacity-[0.12]" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/4 h-72 w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent)] blur-2xl"
        />
        <Container className="relative text-center">
          <p className="font-heading text-7xl font-black tracking-tightest text-white/90 md:text-8xl">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold tracking-tight md:text-3xl">Page not found</h1>
          <p className="mx-auto mt-3 max-w-md font-body text-white/60">
            Sorry, the page you are looking for doesn&apos;t exist or has moved.
          </p>
          <Button to="/" variant="accent" size="lg" className="mt-8" withArrow>
            Back to Home
          </Button>
        </Container>
      </section>
    </>
  )
}
