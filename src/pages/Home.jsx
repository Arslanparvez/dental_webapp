import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function Home() {
  return (
    <>
      <Seo title="Home" path="/" />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">Home</h1>
        </Container>
      </Section>
    </>
  )
}
