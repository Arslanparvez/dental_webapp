import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function Products() {
  return (
    <>
      <Seo title="Products" path="/products" />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">Products</h1>
        </Container>
      </Section>
    </>
  )
}
