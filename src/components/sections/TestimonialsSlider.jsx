import { testimonials } from '../../data/testimonials'
import { SectionHeading } from '../ui/SectionHeading'
import { Carousel } from '../ui/Carousel'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { FadeIn } from '../ui/FadeIn'
import { Icon } from '../ui/Icon'

function TestimonialCard({ item }) {
  return (
    <Card className="flex h-full flex-col p-8">
      <Icon name="star" size={28} className="text-mint" />
      <blockquote className="mt-5 flex-1 font-body text-base italic leading-relaxed text-navy/80">
        “{item.quote}”
      </blockquote>
      <div className="mt-6 flex items-center gap-4">
        <img
          src={item.photo}
          alt={item.name}
          loading="lazy"
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="font-heading font-semibold text-navy">{item.name}</p>
          <p className="text-sm text-navy/60">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
    </Card>
  )
}

export function TestimonialsSlider() {
  return (
    <div>
      <SectionHeading
        eyebrow="Client Stories"
        title="Trusted by Dental Professionals"
        subtitle="Laboratories, clinics, and dentists worldwide rely on Digiart Centre every day."
      />
      <FadeIn className="mt-12">
        <Carousel
          items={testimonials}
          perView={{ base: 3 }}
          ariaLabel="Client testimonials"
          renderItem={(item) => <TestimonialCard item={item} />}
        />
      </FadeIn>
      <div className="mt-10 flex justify-center">
        <Button to="/contact" variant="primary" size="lg">
          Become a partner
        </Button>
      </div>
    </div>
  )
}
