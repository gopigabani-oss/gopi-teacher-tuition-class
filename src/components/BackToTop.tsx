import { useEffect, useState } from 'react'

// Round "back to top" button that appears once the reader is a screen or more down the page.
function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const update = () => setShow(window.scrollY > window.innerHeight)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed right-4 bottom-20 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-all duration-300 hover:bg-royal md:right-7 md:bottom-24 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

export default BackToTop
