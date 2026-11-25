import Container from '../components/Container'
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from '../components/icons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'

function Contact() {
  const items = [
    { icon: MapPinIcon, label: 'Address', value: site.address, href: site.mapHref, external: true },
    { icon: PhoneIcon, label: 'Phone', value: site.phoneDisplay, href: site.phoneHref, external: false },
    { icon: WhatsAppIcon, label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsappHref, external: true },
  ]

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-18 bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact Us"
            title="Visit or call for"
            highlight="admission"
            intro="We're in Ghodasar, Ahmedabad. Call or WhatsApp us any time."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          <ul className="flex flex-col gap-4">
            {items.map(({ icon: Icon, label, value, href, external }, index) => (
              <li key={label}>
                <Reveal delay={index * 100}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-3xl border border-navy/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-navy text-white transition-transform group-hover:rotate-6">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold tracking-[0.15em] text-[#9a7410] uppercase">{label}</span>
                      <span className="mt-1 block font-bold text-navy">{value}</span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={150} className="h-full">
            <iframe
              title={`Map showing ${site.address}`}
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[20rem] w-full rounded-3xl border-4 border-white shadow-xl lg:h-full lg:min-h-[22rem]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default Contact
