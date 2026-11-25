import Container from '../components/Container'
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from '../components/icons'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

function CallToAction() {
  return (
    <section aria-labelledby="cta-heading" className="bg-surface pt-20 md:pt-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-royal to-night px-6 py-12 text-center text-white md:px-12 md:py-16">
            <div aria-hidden="true" className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/40 blur-3xl" />
            <div aria-hidden="true" className="dot-grid absolute inset-0" />
            <p className="relative font-script text-[1.75rem] text-gold-light">let your child shine</p>
            <h2 id="cta-heading" className="relative mt-1 text-[2rem] leading-tight font-extrabold md:text-[2.75rem]">
              Ready to start? Talk to us today.
            </h2>
            <p className="relative mx-auto mt-4 max-w-[34rem] text-white/75">
              Ask about batches, timings and fees for your child's standard and medium.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light to-gold px-7 py-4 font-bold text-navy transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Us
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-bold transition-colors hover:bg-white hover:text-navy"
              >
                <PhoneIcon className="h-5 w-5" />
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default CallToAction
