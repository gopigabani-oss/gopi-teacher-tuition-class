import Container from '../components/Container'
import EnquiryForm from '../components/EnquiryForm'
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
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-18 bg-sky py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact Us"
            title="Enquire about"
            highlight="admission"
            intro="We're in Ghodasar, Ahmedabad. Send an enquiry, call or WhatsApp us."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal effect="left">
            <EnquiryForm />
          </Reveal>
          <div className="flex flex-col gap-4">
            {items.map(({ icon: Icon, label, value, href, external }, index) => (
              <Reveal key={label} effect="right" delay={index * 120}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-3xl border border-navy/10 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg md:p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-royal to-navy text-white transition-transform group-hover:rotate-6">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold tracking-[0.15em] text-[#9a7410] uppercase">{label}</span>
                    <span className="mt-0.5 block font-bold text-navy">{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal effect="zoom" delay={400} className="flex-1">
              <iframe
                title={`Map showing ${site.address}`}
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[16rem] w-full rounded-3xl border-4 border-white shadow-lg lg:h-full lg:min-h-[14rem]"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact
