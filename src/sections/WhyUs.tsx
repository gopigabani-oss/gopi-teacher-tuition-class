import Container from '../components/Container'
import { StarIcon } from '../components/icons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { reasons, site } from '../data/site'

// Bento grid: a large "since 2014" card, then the other reasons.
function WhyUs() {
  const [first, ...rest] = reasons

  return (
    <section id="why-us" aria-labelledby="why-us-heading" className="relative scroll-mt-18 overflow-hidden bg-night py-20 md:py-28">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />
      <Container>
        <Reveal>
          <SectionHeading id="why-us-heading" eyebrow="Why Choose Us" title="Where minds" highlight="shine" light />
        </Reveal>
        <ul className="relative mt-12 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
          <li className="sm:col-span-2 lg:row-span-2">
            <Reveal className="h-full">
              <div className="relative flex h-full min-h-[16rem] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-gold-light via-gold to-[#b07f0c] p-8 text-navy">
                <img
                  src="/images/logo.webp"
                  alt=""
                  className="absolute -top-10 -right-10 w-56 rotate-12 opacity-25 md:w-72"
                />
                <p className="relative text-[4.5rem] leading-none font-extrabold md:text-[6rem]">{site.established}</p>
                <h3 className="relative mt-3 text-2xl font-extrabold">{first.title}</h3>
                <p className="relative mt-2 max-w-[26rem] font-medium text-navy/80">{first.text}</p>
              </div>
            </Reveal>
          </li>
          {rest.map((reason, index) => (
            <li key={reason.title}>
              <Reveal delay={index * 80} className="h-full">
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition-colors hover:border-gold/50 hover:bg-white/10">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-light">
                    <StarIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{reason.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default WhyUs
