import { useState } from 'react'
import Container from '../components/Container'
import {
  ArrowRightIcon,
  CalculatorIcon,
  FlaskIcon,
  GlobeIcon,
  HourglassIcon,
  LandmarkIcon,
  WhatsAppIcon,
} from '../components/icons'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { boards, mediums, site, whatsappLink, type Subject } from '../data/site'

const icons = { maths: CalculatorIcon, science: FlaskIcon, globe: GlobeIcon, history: HourglassIcon, civics: LandmarkIcon }
const standards = Array.from({ length: 12 }, (_, index) => index + 1)

function SubjectBadge({ subject }: { subject: Subject }) {
  if (subject.icon === 'language') {
    return <span className="text-lg leading-none font-extrabold">{subject.glyph}</span>
  }
  const Icon = icons[subject.icon]
  return <Icon className="h-5 w-5" />
}

function ChoiceLabel({ step, children }: { step: number; children: string }) {
  return (
    <p className="flex items-center gap-2 text-sm font-bold text-navy">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-xs text-navy">{step}</span>
      {children}
    </p>
  )
}

const chipClass = (selected: boolean) =>
  `rounded-xl border-2 font-bold transition-all ${
    selected
      ? 'border-royal bg-royal text-white shadow-lg shadow-royal/25'
      : 'border-navy/10 bg-white text-navy hover:border-royal/40 hover:text-royal'
  }`

// Class finder: the parent picks standard, medium and board, sees the subjects, and enquires with one tap.
function Courses() {
  const [standard, setStandard] = useState<number | null>(null)
  const [mediumIndex, setMediumIndex] = useState(0)
  const [board, setBoard] = useState<string | null>(null)
  const medium = mediums[mediumIndex]

  const summary = [standard && `Std ${standard}`, medium.name, board].filter(Boolean).join(' · ')
  const enquiry = whatsappLink(
    ['Hello,', `I would like to know about tuition for ${summary} at Gopi Teacher Tuition Class.`].join('\n'),
  )

  return (
    <section id="courses" aria-labelledby="courses-heading" className="scroll-mt-18 bg-surface py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            id="courses-heading"
            eyebrow="Find Your Class"
            title="Subjects we"
            highlight="teach"
            intro="Choose your child's standard, medium and board to see the subjects and enquire in one tap."
          />
        </Reveal>

        <Reveal>
          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-xl shadow-navy/5 lg:grid-cols-[1fr_1.1fr]">
            <div className="flex flex-col gap-7 p-6 md:p-8">
              <fieldset>
                <legend>
                  <ChoiceLabel step={1}>Standard</ChoiceLabel>
                </legend>
                <div className="mt-3 grid grid-cols-6 gap-2">
                  {standards.map((value) => (
                    <button
                      key={value}
                      type="button"
                      aria-pressed={standard === value}
                      aria-label={`Std ${value}`}
                      onClick={() => setStandard(value)}
                      className={`h-11 ${chipClass(standard === value)}`}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend>
                  <ChoiceLabel step={2}>Medium</ChoiceLabel>
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {mediums.map((option, index) => (
                    <button
                      key={option.name}
                      type="button"
                      aria-pressed={mediumIndex === index}
                      onClick={() => setMediumIndex(index)}
                      className={`h-12 ${chipClass(mediumIndex === index)}`}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend>
                  <ChoiceLabel step={3}>Board</ChoiceLabel>
                </legend>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {boards.map((option) => (
                    <button
                      key={option.short}
                      type="button"
                      aria-pressed={board === option.short}
                      title={option.name}
                      onClick={() => setBoard(option.short)}
                      className={`h-11 text-sm ${chipClass(board === option.short)}`}
                    >
                      {option.short}
                    </button>
                  ))}
                </div>
              </fieldset>

              <p className="mt-auto rounded-2xl bg-sky px-4 py-3 text-sm text-navy">
                Not sure which to choose?{' '}
                <a href={site.phoneHref} className="font-bold text-royal underline-offset-2 hover:underline">
                  Call {site.phoneDisplay}
                </a>{' '}
                and we'll help.
              </p>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-night p-6 text-white md:p-8">
              <div aria-hidden="true" className="dot-grid absolute inset-0" />
              <div aria-hidden="true" className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold/25 blur-3xl" />
              <div className="relative" aria-live="polite">
                <p className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">Your class</p>
                <p className="mt-2 text-2xl font-extrabold md:text-[1.75rem]">{summary}</p>
                <p className="mt-1 text-sm text-white/60">{medium.subjects.length} subjects</p>
              </div>
              <ul key={medium.name} className="relative mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {medium.subjects.map((subject, index) => (
                  <li
                    key={subject.name}
                    style={{ animationDelay: `${index * 40}ms` }}
                    className="flex animate-[pop_0.4s_ease-out_backwards] items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.07] px-3 py-3 text-sm font-semibold"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold text-navy">
                      <SubjectBadge subject={subject} />
                    </span>
                    {subject.name}
                  </li>
                ))}
              </ul>
              <a
                href={enquiry}
                target="_blank"
                rel="noreferrer"
                className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light to-gold px-6 py-4 font-bold text-navy transition-transform hover:-translate-y-0.5 lg:mt-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Enquire for {standard ? `Std ${standard}` : 'this class'}
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Courses
