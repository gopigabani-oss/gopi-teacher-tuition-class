import Container from '../components/Container'
import { StarIcon } from '../components/icons'
import SectionHeading from '../components/SectionHeading'
import { reasons } from '../data/site'

function WhyUs() {
  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="scroll-mt-18 bg-navy py-16 md:py-20">
      <Container>
        <SectionHeading id="why-us-heading" eyebrow="Why Choose Us" title="Where minds shine" light />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title} className="rounded-2xl border border-gold/30 bg-white/5 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy">
                <StarIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{reason.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default WhyUs
