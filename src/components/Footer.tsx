import { boards, mediums, navLinks, site } from '../data/site'
import Container from './Container'
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from './icons'

const year = new Date().getFullYear()

function FooterHeading({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-2 font-extrabold text-white">
      <span aria-hidden="true" className="h-4 w-1 rounded-full bg-gold" />
      {children}
    </h2>
  )
}

const iconBoxClass =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-gold-light transition-colors group-hover:bg-gold group-hover:text-navy'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white/75">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-24 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-royal/40 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

      <Container>
        <div className="relative grid gap-10 pt-14 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo-sm.webp"
                alt=""
                width="72"
                height="72"
                className="h-18 w-18 drop-shadow-[0_0_20px_rgba(234,179,8,0.35)]"
              />
              <div>
                <p className="text-lg leading-tight font-extrabold text-white">{site.name}</p>
                <p className="mt-1 font-script text-xl text-gold-light">{site.tagline.toLowerCase()}</p>
              </div>
            </div>
            <p className="mt-5 max-w-[24rem] text-sm leading-relaxed">
              Tuition for Std 1 to 12 in Gujarati and English medium, for GSEB, NCERT, CBSE and ICSE students. Teaching
              since {site.established}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-navy"
              >
                <PhoneIcon className="h-4 w-4" />
                Call
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group inline-flex items-center gap-2 transition-colors hover:text-gold-light">
                    <span
                      aria-hidden="true"
                      className="h-px w-3 bg-white/30 transition-all group-hover:w-5 group-hover:bg-gold-light"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Courses</FooterHeading>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {mediums.map((medium) => (
                <li key={medium.name}>
                  <a href="#courses" className="transition-colors hover:text-gold-light">
                    {medium.name}
                    <span className="block text-xs text-white/50">{medium.standards}</span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {boards.map((board) => (
                <li
                  key={board.short}
                  title={board.name}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-white/85"
                >
                  {board.short}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Contact</FooterHeading>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li>
                <a href={site.mapHref} target="_blank" rel="noreferrer" className="group flex gap-3 hover:text-white">
                  <span className={iconBoxClass}>
                    <MapPinIcon className="h-4 w-4" />
                  </span>
                  <span className="leading-relaxed">{site.address}</span>
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="group flex items-center gap-3 hover:text-white">
                  <span className={iconBoxClass}>
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 hover:text-white"
                >
                  <span className={iconBoxClass}>
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  WhatsApp {site.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-2 border-t border-white/10 py-6 text-center text-xs text-white/55 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Ghodasar, Ahmedabad · Estd {site.established}</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
