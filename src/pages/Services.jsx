import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function Services() {
  return (
    <>
      <Seo title="Services" path="/services" />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">Services</h1>
        </Container>
      </Section>
    </>
  )
}
