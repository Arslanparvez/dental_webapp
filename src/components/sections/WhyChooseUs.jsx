import { whyChooseUs } from '../../data/whyChooseUs'
import { SectionHeading } from '../ui/SectionHeading'
import { FeatureCard } from '../ui/FeatureCard'
import { Reveal } from '../ui/Reveal'

export function WhyChooseUs() {
  return (
    <div>
      <SectionHeading
        eyebrow="Why Digiart"
        title="Built for precision, trusted worldwide"
        subtitle="A digital design partner combining technical expertise, global standards, and dependable turnaround."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.06}>
            <FeatureCard icon={item.icon} title={item.title} text={item.text} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
