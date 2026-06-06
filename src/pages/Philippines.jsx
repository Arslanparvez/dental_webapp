import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function Philippines() {
  return (
    <>
      <Seo title="Philippines Branch" path="/philippines" />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">Philippines Branch</h1>
        </Container>
      </Section>
    </>
  )
}
