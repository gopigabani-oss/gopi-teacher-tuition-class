import { useEffect, useRef, type ReactNode } from 'react'

type Effect = 'up' | 'left' | 'right' | 'zoom' | 'flip'

// Animates its children in the first time they scroll into view: rising up, sliding in from a side, zooming or
// flipping up (see `.reveal-*` in index.css). `delay` staggers items in a grid.
function Reveal({
  children,
  effect = 'up',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  effect?: Effect
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal reveal-${effect} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

export default Reveal
