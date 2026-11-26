import { navLinks, site } from '../data/site'
import Container from './Container'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white/80">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-royal/40 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

      <Container>
        <div className="relative grid gap-10 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src="/images/logo-sm.webp" alt="" width="56" height="56" className="h-14 w-14" />
              <div>
                <p className="font-extrabold text-white">{site.name}</p>
                <p className="text-xs font-semibold tracking-[0.15em] text-gold uppercase">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              Tuition for Std 1 to 12, Gujarati and English medium, for GSEB, NCERT, CBSE and ICSE students. Estd{' '}
              {site.established}.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-gold">Quick Links</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-gold">Contact</h2>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>{site.address}</li>
              <li>
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-white">
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="relative border-t border-white/15 py-5 text-center text-xs">
          © {year} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
