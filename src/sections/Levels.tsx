import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { levels } from '../data/site'

// The four school stages as a path: numbered stops joined by a dashed line on desktop.
function Levels() {
  return (
    <section aria-labelledby="levels-heading" className="relative bg-white py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="levels-heading"
            eyebrow="Every Stage"
            title="With your child from"
            highlight="Std 1 to 12"
            intro="One trusted place for every year of school."
          />
        </Reveal>
        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span
            aria-hidden="true"
            className="absolute top-8 right-[12%] left-[12%] hidden border-t-2 border-dashed border-gold/60 lg:block"
          />
          {levels.map((level, index) => (
            <li key={level.name}>
              <Reveal effect="zoom" delay={index * 150} className="h-full">
                <div className="group relative h-full text-center">
                  <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-royal to-navy text-2xl font-extrabold text-white ring-8 ring-white transition-transform group-hover:scale-110">
                    {index + 1}
                  </span>
                  <div className="mt-5 rounded-3xl border border-navy/10 bg-white p-6 shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-gold group-hover:shadow-xl">
                    <p className="inline-block rounded-full bg-gold/15 px-3 py-1 text-sm font-extrabold text-[#9a7410]">
                      {level.standards}
                    </p>
                    <h3 className="mt-3 text-xl font-extrabold text-navy">{level.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{level.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}

export default Levels
