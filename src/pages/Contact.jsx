import { useState } from 'react'
import Seo from '../components/Seo'
import { Section } from '../components/ui/Section'
import { Container } from '../components/ui/Container'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/Textarea'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { FadeIn } from '../components/ui/FadeIn'
import { PageHeader } from '../components/sections/PageHeader'
import { getLocation } from '../data/locations'
import { submitForm } from '../lib/submitForm'

const emptyForm = { name: '', email: '', phone: '', message: '' }

export default function Contact() {
  const hq = getLocation('HQ')
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      await submitForm('contact', form)
      setStatus('success')
      setForm(emptyForm)
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  const details = [
    { icon: 'pin', label: 'Address', value: hq.address },
    { icon: 'phone', label: 'Phone', value: hq.phone, href: `tel:${hq.phone.replace(/\s+/g, '')}` },
    { icon: 'mail', label: 'Email', value: hq.email, href: `mailto:${hq.email}` },
    { icon: 'clock', label: 'Hours', value: hq.hours },
  ]

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Digiart Design Services in Bur Dubai — request a quote, send your case, or ask about our dental CAD/CAM design and zirconia materials."
        path="/contact"
      />

      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your next case"
        subtitle="Send us your case or a question — our design team in Bur Dubai will get back to you shortly."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <Section tone="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Details */}
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-ink">Get in touch</h2>
              <p className="mt-2 font-body text-zinc-500">
                We respond to every inquiry quickly — usually within one business day.
              </p>
              <ul className="mt-8 space-y-5">
                {details.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-teal">
                      <Icon name={item.icon} size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-body text-ink transition-colors hover:text-teal">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-body text-ink">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 shadow-soft">
                <iframe
                  title={`Map showing ${hq.name}`}
                  src={hq.mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-60 w-full border-0"
                />
              </div>
            </div>

            {/* Form */}
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-soft">
                {status === 'success' ? (
                  <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                      <Icon name="check" size={28} />
                    </span>
                    <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-ink">Message sent</h3>
                    <p className="mt-2 max-w-sm font-body text-zinc-500">
                      Thanks for reaching out. Our team will get back to you shortly.
                    </p>
                    <Button type="button" variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input label="Name" name="name" value={form.name} onChange={update('name')} required />
                      <Input label="Email" name="email" type="email" value={form.email} onChange={update('email')} required />
                    </div>
                    <Input label="Phone" name="phone" type="tel" value={form.phone} onChange={update('phone')} />
                    <Textarea label="Message" name="message" rows={5} value={form.message} onChange={update('message')} required />

                    {status === 'error' && (
                      <p role="alert" className="text-sm text-red-600">
                        {error}
                      </p>
                    )}

                    <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full">
                      {status === 'loading' ? 'Sending…' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  )
}
