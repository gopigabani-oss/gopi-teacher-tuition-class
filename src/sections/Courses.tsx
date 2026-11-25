import { useState } from 'react'
import Container from '../components/Container'
import { CalculatorIcon, FlaskIcon, GlobeIcon, HourglassIcon, LandmarkIcon } from '../components/icons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { mediums, type Subject } from '../data/site'

const icons = { maths: CalculatorIcon, science: FlaskIcon, globe: GlobeIcon, history: HourglassIcon, civics: LandmarkIcon }

function SubjectBadge({ subject }: { subject: Subject }) {
  if (subject.icon === 'language') {
    return <span className="text-xl leading-none font-extrabold">{subject.glyph}</span>
  }
  const Icon = icons[subject.icon]
  return <Icon className="h-6 w-6" />
}

function Courses() {
  const [active, setActive] = useState(0)
  const medium = mediums[active]

  return (
    <section id="courses" aria-labelledby="courses-heading" className="scroll-mt-18 bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="courses-heading"
            eyebrow="Our Courses"
            title="Subjects we"
            highlight="teach"
            intro="Pick your medium to see the subjects we teach."
          />
        </Reveal>

        <div role="tablist" aria-label="Medium" className="mx-auto mt-10 flex w-fit rounded-full bg-sky p-1.5">
          {mediums.map((option, index) => (
            <button
              key={option.name}
              type="button"
              role="tab"
              id={`tab-${index}`}
              aria-selected={active === index}
              aria-controls="subjects-panel"
              onClick={() => setActive(index)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all md:px-8 md:text-base ${
                active === index ? 'bg-royal text-white shadow-lg shadow-royal/30' : 'text-navy hover:text-royal'
              }`}
            >
              {option.short} Medium
            </button>
          ))}
        </div>

        <div id="subjects-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-10">
          <p className="text-center text-sm font-semibold text-muted">
            {medium.name} · {medium.standards} · {medium.subjects.length} subjects
          </p>
          <ul key={medium.name} className="mt-6 flex flex-wrap justify-center gap-3 md:gap-5">
            {medium.subjects.map((subject, index) => (
              <li
                key={subject.name}
                style={{ animationDelay: `${index * 50}ms` }}
                className="group relative w-[calc((100%-0.75rem)/2)] animate-[float_0.5s_ease-out_backwards] overflow-hidden rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:bg-royal hover:shadow-xl hover:shadow-royal/25 sm:w-[calc((100%-1.5rem)/3)] md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky text-royal transition-colors group-hover:bg-gold group-hover:text-navy">
                  <SubjectBadge subject={subject} />
                </span>
                <p className="mt-4 font-bold text-navy transition-colors group-hover:text-white">{subject.name}</p>
                <span
                  aria-hidden="true"
                  className="absolute -right-6 -bottom-6 h-16 w-16 rounded-full bg-gold/10 transition-transform duration-500 group-hover:scale-[3]"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

export default Courses
