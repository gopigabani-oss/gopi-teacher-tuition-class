import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'
import Container from './Container'
import { CloseIcon, MenuIcon, PhoneIcon, WhatsAppIcon } from './icons'

// Which nav section is on screen now, so its link can be highlighted.
function useActiveSection() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => section !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

// How far down the page the reader is, from 0 to 1, and whether they have scrolled at all.
function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? window.scrollY / max : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return progress
}

function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const progress = useScrollProgress()
  const scrolled = progress > 0.005

  // While the phone menu is open: no page scrolling behind it, and Escape closes it.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <a
        href="#home"
        className="sr-only z-[60] rounded-full bg-royal px-5 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-40 border-b transition-all duration-300 ${
          scrolled ? 'border-navy/10 bg-white/85 shadow-lg shadow-navy/5 backdrop-blur-xl' : 'border-transparent bg-white'
        }`}
      >
        <Container>
          <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? 'h-16' : 'h-18'}`}>
            <a href="#home" className="flex items-center gap-3">
              <img
                src="/images/logo-sm.webp"
                alt=""
                width="52"
                height="52"
                className={`transition-all duration-500 hover:rotate-[360deg] ${scrolled ? 'h-11 w-11' : 'h-13 w-13'}`}
              />
              <span className="leading-tight">
                <span className="block text-base font-extrabold text-navy md:text-lg">{site.name}</span>
                <span className="block text-xs font-semibold tracking-[0.15em] text-[#9a7410] uppercase">{site.tagline}</span>
              </span>
            </a>

            <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active === link.href ? 'true' : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    active === link.href ? 'bg-sky text-royal' : 'text-ink hover:text-royal'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.phoneHref}
                className="ml-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal to-navy px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-royal/25 transition-transform hover:-translate-y-0.5"
              >
                <PhoneIcon className="h-4 w-4" />
                Call Now
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-sky text-navy lg:hidden"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </Container>
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gold to-gold-light"
          style={{ width: `${progress * 100}%` }}
        />
      </header>

      {/* Phone menu: slides in from the right over a dimmed page. */}
      <div className={`fixed inset-0 z-[55] lg:hidden ${open ? '' : 'pointer-events-none'}`}>
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-night/60 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <nav
          id="mobile-menu"
          aria-label="Main"
          inert={!open}
          className={`absolute inset-y-0 right-0 flex w-[min(20rem,85vw)] flex-col bg-white p-6 transition-transform duration-300 ${
            open ? 'translate-x-0 shadow-2xl' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <img src="/images/logo-sm.webp" alt="" width="48" height="48" className="h-12 w-12" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-sky text-navy"
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
          <ul className="mt-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-lg font-bold ${
                    active === link.href ? 'bg-sky text-royal' : 'text-navy'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-royal px-5 py-3.5 font-bold text-white"
            >
              <PhoneIcon className="h-5 w-5" />
              Call {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3.5 font-bold text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header
