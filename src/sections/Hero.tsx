import Container from '../components/Container'
import { ArrowRightIcon, PhoneIcon, SparkleIcon, WhatsAppIcon } from '../components/icons'
import { site } from '../data/site'

const stats = [
  { value: '1–12', label: 'Standards' },
  { value: '2', label: 'Mediums' },
  { value: '4', label: 'Boards' },
  { value: `${site.established}`, label: 'Since' },
]

// Subject badges that float around the logo; positions are percentages of the logo box.
const badges = [
  { text: 'π', className: 'top-[4%] left-[2%] bg-gold text-navy', delay: '0s' },
  { text: 'અ', className: 'top-[10%] right-[0%] bg-white text-royal', delay: '1.2s' },
  { text: 'H₂O', className: 'bottom-[14%] left-[-4%] bg-white text-royal text-base', delay: '2.1s' },
  { text: 'ॐ', className: 'right-[-2%] bottom-[6%] bg-gold text-navy', delay: '0.6s' },
  { text: 'ABC', className: 'top-[46%] left-[-10%] bg-royal text-white text-sm', delay: '1.7s' },
]

function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-night text-white">
      <div aria-hidden="true" className="dot-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-32 -right-24 h-[28rem] w-[28rem] animate-blob rounded-full bg-gold/30 blur-3xl" />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] animate-blob rounded-full bg-royal/60 blur-3xl [animation-delay:-7s]"
      />

      <Container>
        <div className="relative grid items-center gap-12 pt-12 pb-20 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:pt-20 lg:pb-28">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gold-light" />
              </span>
              Ghodasar, Ahmedabad · Estd {site.established}
            </p>

            <h1 id="hero-heading" className="mt-6 text-[2.75rem] leading-[1.02] font-extrabold tracking-tight md:text-[4.25rem]">
              Gopi Teacher
              <span className="block bg-gradient-to-r from-gold-light via-gold to-[#f7dd8a] bg-clip-text text-transparent">
                Tuition Class
              </span>
            </h1>
            <p className="mt-3 flex items-center justify-center gap-2 font-script text-[2rem] text-gold-light lg:justify-start">
              <SparkleIcon className="h-5 w-5" />
              {site.tagline.toLowerCase()}
            </p>
            <p className="mx-auto mt-5 max-w-[34rem] text-lg text-white/75 lg:mx-0">
              Every subject from Std 1 to 12, in Gujarati and English medium, for GSEB, NCERT, CBSE and ICSE students.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light to-gold px-7 py-4 font-bold text-navy shadow-[0_10px_30px_-8px_rgba(234,179,8,0.7)] transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enquire on WhatsApp
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 font-bold backdrop-blur transition-colors hover:bg-white hover:text-navy"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>

            <dl className="mx-auto mt-10 grid max-w-[32rem] grid-cols-4 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-4 backdrop-blur lg:mx-0">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse items-center px-2">
                  <dt className="mt-1 text-xs text-white/60">{stat.label}</dt>
                  <dd className="text-xl font-extrabold text-gold-light md:text-2xl">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-[14rem] md:w-[24rem] lg:w-[27rem]">
            <div aria-hidden="true" className="absolute -inset-6 animate-spin-slow rounded-full border-2 border-dashed border-gold/40" />
            <div aria-hidden="true" className="absolute -inset-14 hidden rounded-full border border-white/10 md:block" />
            <img
              src="/images/logo.webp"
              alt={`${site.name} logo — ${site.tagline}, Estd ${site.established}`}
              width="640"
              height="640"
              className="relative w-full animate-float drop-shadow-[0_0_60px_rgba(234,179,8,0.55)]"
            />
            {badges.map((badge) => (
              <span
                key={badge.text}
                aria-hidden="true"
                style={{ animationDelay: badge.delay }}
                className={`absolute flex h-12 w-12 animate-float items-center justify-center rounded-2xl text-xl font-extrabold shadow-xl md:h-14 md:w-14 ${badge.className}`}
              >
                {badge.text}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <svg aria-hidden="true" viewBox="0 0 1440 60" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-10 w-full text-gold md:h-14">
        <path d="M0 60V30C240 0 480 0 720 22s480 38 720 8v30z" fill="currentColor" />
      </svg>
    </section>
  )
}

export default Hero
