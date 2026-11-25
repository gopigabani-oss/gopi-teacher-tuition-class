import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Container from '../components/Container'
import { reviews } from '../data/site'

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13 8H7a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h3v2a3 3 0 0 1-3 3v2a6 6 0 0 0 6-6zm16 0h-6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h3v2a3 3 0 0 1-3 3v2a6 6 0 0 0 6-6z" />
    </svg>
  )
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <figure className="flex w-[18rem] shrink-0 flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-sm md:w-[22rem] md:p-7">
      <QuoteIcon className="h-8 w-8 text-gold" />
      <blockquote className="mt-4 flex-1 leading-relaxed text-ink/85">{review.text}</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-navy/10 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy text-sm font-bold text-white">
          {review.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </span>
        <span>
          <span className="block font-bold text-navy">{review.name}</span>
          <span className="block text-xs text-muted">Parent</span>
        </span>
      </figcaption>
    </figure>
  )
}

// Reviews slide past in a loop and pause on hover. The second copy is only there to make the loop seamless.
function Reviews() {
  return (
    <section aria-labelledby="reviews-heading" className="overflow-hidden bg-sky py-20 md:py-28">
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
      <div className="group relative mt-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-sky md:w-32" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-sky md:w-32" />
        <div className="flex w-max animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-stretch gap-5 pr-5">
              {reviews.map((review) => (
                <li key={review.name} className="flex">
                  <ReviewCard review={review} />
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
