import { useState } from 'react'
import { navLinks, site } from '../data/site'
import Container from './Container'
import { CloseIcon, MenuIcon, PhoneIcon } from './icons'

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-navy/5 bg-white/80 shadow-sm backdrop-blur-lg">
      <Container>
        <div className="flex h-18 items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="" width="52" height="52" className="h-13 w-13 transition-transform duration-500 hover:rotate-[360deg]" />
            <span className="leading-tight">
              <span className="block text-base font-extrabold text-navy md:text-lg">{site.name}</span>
              <span className="block text-xs font-semibold tracking-[0.15em] text-gold uppercase">{site.tagline}</span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="relative text-sm font-semibold text-ink after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gold after:transition-all hover:text-royal hover:after:w-full">
                {link.label}
              </a>
            ))}
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-royal to-navy px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-royal/25 transition-transform hover:-translate-y-0.5"
            >
              <PhoneIcon className="h-4 w-4" />
              Call Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-navy lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-gold/30 bg-white lg:hidden">
          <Container>
            <div className="flex flex-col py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 font-semibold text-ink hover:text-royal"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.phoneHref}
                className="mt-2 mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-royal px-5 py-3 font-bold text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {site.phoneDisplay}
              </a>
            </div>
          </Container>
        </nav>
      )}
    </header>
  )
}

export default Header
