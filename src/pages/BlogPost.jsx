import { useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'

export default function BlogPost() {
  const { slug } = useParams()
  return (
    <>
      <Seo title="Blog Post" path={`/blog/${slug}`} />
      <Section>
        <Container>
          <h1 className="font-heading text-4xl font-bold text-navy">Blog Post: {slug}</h1>
        </Container>
      </Section>
    </>
  )
}
