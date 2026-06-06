import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function Gallery() {
  return (
    <>
      <Seo title="Gallery" path="/gallery" />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">Gallery</h1>
        </Container>
      </Section>
    </>
  )
}
