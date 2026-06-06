import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function Contact() {
  return (
    <>
      <Seo title="Contact" path="/contact" />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">Contact</h1>
        </Container>
      </Section>
    </>
  )
}
