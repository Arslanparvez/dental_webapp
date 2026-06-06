import { whyChooseUs } from '../../data/whyChooseUs'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Reveal } from '../ui/Reveal'
import { Icon } from '../ui/Icon'

export function WhyChooseUs() {
  return (
    <div>
      <SectionHeading
        eyebrow="Why Digiart Centre"
        title="Built for Precision, Trusted Worldwide"
        subtitle="A digital-first partner combining technical expertise, global standards, and dependable support."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <Card className="flex h-full flex-col p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint/20 text-navy">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="mt-5 font-heading text-lg font-semibold text-navy">{item.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-navy/70">{item.text}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
