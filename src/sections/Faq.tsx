import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { faqs } from '../data/site'

function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-18 bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Questions parents" highlight="ask us" />
        </Reveal>
        <div className="mx-auto mt-12 flex max-w-[48rem] flex-col gap-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} effect="left" delay={index * 90}>
              <details
                name="faq"
                open={index === 0}
                className="group rounded-2xl border border-navy/10 bg-white shadow-sm transition-colors open:border-gold"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold text-navy md:p-6 md:text-lg [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky text-royal transition-transform group-open:rotate-45 group-open:bg-gold group-open:text-navy"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="h-4 w-4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="px-5 pb-5 leading-relaxed text-muted md:px-6 md:pb-6">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Faq
