import Container from '../components/Container'
import { PhoneIcon, StarIcon, WhatsAppIcon } from '../components/icons'
import { site } from '../data/site'

const highlights = ['Std 1 to 12', 'Gujarati & English Medium', 'GSEB · NCERT · CBSE · ICSE']

function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(234,179,8,0.35),transparent_55%)]" />
      <Container>
        <div className="relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-gold uppercase">
              <StarIcon className="h-3.5 w-3.5" />
              Estd {site.established}
            </p>
            <h1 id="hero-heading" className="mt-5 text-[2.25rem] leading-[1.1] font-extrabold md:text-[3.5rem]">
              {site.name}
            </h1>
            <p className="mt-3 text-xl font-bold text-gold md:text-2xl">{site.tagline}</p>
            <p className="mx-auto mt-5 max-w-[34rem] text-white/80 lg:mx-0">
              Tuition for every subject from Std 1 to 12, in Gujarati and English medium, for all major boards. Clear
              concepts, regular practice and personal attention for every student.
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
              {highlights.map((item) => (
                <li key={item} className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-bold text-navy transition-colors hover:bg-gold-light"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enquire on WhatsApp
              </a>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-7 py-3 font-bold transition-colors hover:bg-white hover:text-navy"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/logo.png"
              alt={`${site.name} logo — ${site.tagline}, Estd ${site.established}`}
              width="640"
              height="640"
              className="w-[16rem] drop-shadow-[0_0_45px_rgba(234,179,8,0.55)] md:w-[22rem] lg:w-[26rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
