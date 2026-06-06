import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" />
      <Section>
        <Container className="text-center">
          <p className="font-heading text-6xl font-bold text-teal">404</p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-navy">Page Not Found</h1>
          <p className="mt-3 font-body text-navy/70">
            Sorry, the page you are looking for does not exist.
          </p>
          <Button to="/" variant="primary" size="md" className="mt-8">
            Back to Home
          </Button>
        </Container>
      </Section>
    </>
  )
}
