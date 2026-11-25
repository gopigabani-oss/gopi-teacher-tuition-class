import Container from '../components/Container'
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from '../components/icons'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'

function Contact() {
  const items = [
    { icon: MapPinIcon, label: 'Address', value: site.address, href: site.mapHref, external: true },
    { icon: PhoneIcon, label: 'Phone', value: site.phoneDisplay, href: site.phoneHref, external: false },
    { icon: WhatsAppIcon, label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsappHref, external: true },
  ]

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-18 bg-surface py-16 md:py-20">
      <Container>
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact Us"
          title="Visit or call for admission"
          intro="Call or WhatsApp us to ask about batches, timings and fees."
        />
        <div className="mt-10 grid gap-6 md:mt-12 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          <ul className="flex flex-col gap-4">
            {items.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="flex items-start gap-4 rounded-2xl border border-gold/40 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-royal text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold tracking-wide text-gold uppercase">{label}</span>
                    <span className="mt-1 block font-semibold text-navy">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <iframe
            title={`Map showing ${site.address}`}
            src={site.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[20rem] w-full rounded-2xl border border-gold/40 lg:h-full lg:min-h-[22rem]"
          />
        </div>
      </Container>
    </section>
  )
}

export default Contact
