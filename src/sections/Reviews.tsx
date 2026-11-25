import { useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { ArrowRightIcon } from '../components/icons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { reviews } from '../data/site'

const AUTOPLAY_MS = 5000

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

// Swipeable row of review cards with arrows and dots; it moves on by itself until the reader hovers, focuses or touches it.
function Reviews() {
  const track = useRef<HTMLUListElement>(null)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const cardStep = () => {
    const first = track.current?.firstElementChild as HTMLElement | null
    return first ? first.offsetWidth + parseFloat(getComputedStyle(track.current!).columnGap || '0') : 1
  }

  const goTo = (index: number) => {
    const element = track.current
    if (!element) return
    const atEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth - 4
    const target = index >= reviews.length || (index > current && atEnd) ? 0 : Math.max(0, index)
    element.scrollTo({ left: target * cardStep(), behavior: 'smooth' })
  }

  useEffect(() => {
    const element = track.current
    if (!element) return
    const onScroll = () => setCurrent(Math.round(element.scrollLeft / cardStep()))
    element.addEventListener('scroll', onScroll, { passive: true })
    return () => element.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setTimeout(() => goTo(current + 1), AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  })

  const arrowClass =
    'flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-sm transition-colors hover:border-royal hover:bg-royal hover:text-white'

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-18 bg-sky py-20 md:py-28">
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

        <div
          className="mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <ul
            ref={track}
            aria-label="Parent reviews"
            className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth scroll-px-4 px-4 pb-4 md:scroll-px-0 md:mx-0 md:px-0"
          >
            {reviews.map((review) => (
              <li
                key={review.name}
                className="flex w-[85%] shrink-0 snap-start sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
              >
                <figure className="flex w-full flex-col rounded-3xl border border-navy/10 bg-white p-6 shadow-sm md:p-7">
                  <div className="flex items-start justify-between">
                    <QuoteIcon className="h-9 w-9 text-gold" />
                  </div>
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

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={current === index ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all ${current === index ? 'w-8 bg-royal' : 'w-2.5 bg-navy/20 hover:bg-navy/40'}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => goTo(current - 1)} aria-label="Previous review" className={arrowClass}>
                <ArrowRightIcon className="h-5 w-5 rotate-180" />
              </button>
              <button type="button" onClick={() => goTo(current + 1)} aria-label="Next review" className={arrowClass}>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Reviews
