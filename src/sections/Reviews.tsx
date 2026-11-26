import { useEffect, useRef } from 'react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { reviews } from '../data/site'

const PIXELS_PER_SECOND = 40

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 8H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h3v2a3 3 0 0 1-3 3v2a6 6 0 0 0 6-6zm16 0h-6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h3v2a3 3 0 0 1-3 3v2a6 6 0 0 0 6-6z" />
    </svg>
  )
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')

// Review cards that glide past without stopping. The list is drawn twice and the row jumps back by one copy's
// width when the first copy has scrolled out, so the loop has no visible seam. Driven from JavaScript rather than
// a CSS animation so it keeps moving for everyone.
function Reviews() {
  const row = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = row.current
    if (!element) return
    let offset = 0
    let last = performance.now()
    let frame = requestAnimationFrame(function step(now) {
      const copyWidth = (element.firstElementChild as HTMLElement).offsetWidth
      offset = (offset + ((now - last) / 1000) * PIXELS_PER_SECOND) % copyWidth
      last = now
      element.style.transform = `translateX(${-offset}px)`
      frame = requestAnimationFrame(step)
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-18 overflow-hidden bg-sky py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="reviews-heading"
            eyebrow="Parent Reviews"
            title="What parents"
            highlight="say"
            intro="Kind words from the families we teach."
          />
        </Reveal>
      </Container>

      <div className="relative mt-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-sky md:w-24" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-sky md:w-24" />
        <div ref={row} className="flex w-max will-change-transform">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-label={copy === 0 ? 'Parent reviews' : undefined}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-stretch gap-5 pr-5"
            >
              {reviews.map((review) => (
                <li key={review.name} className="flex w-[17rem] shrink-0 md:w-[22rem]">
                  <figure className="flex w-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-sm md:p-7">
                    <QuoteIcon className="h-9 w-9 text-gold" />
                    <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-ink/85">{review.text}</blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-5">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy text-sm font-bold text-white">
                        {initials(review.name)}
                      </span>
                      <span>
                        <span className="block font-bold text-navy">{review.name}</span>
                        <span className="block text-xs text-muted">Parent</span>
                      </span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
