import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function Blog() {
  return (
    <>
      <Seo title="Blog" path="/blog" />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">Blog</h1>
        </Container>
      </Section>
    </>
  )
}
