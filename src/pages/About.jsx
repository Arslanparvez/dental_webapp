import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function About() {
  return (
    <>
      <Seo title="About Us" path="/about" />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">About Us</h1>
        </Container>
      </Section>
    </>
  )
}
