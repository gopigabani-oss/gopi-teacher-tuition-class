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
import { boards, levels, mediums, site, whatsappLink, type Subject } from '../data/site'

const icons = { maths: CalculatorIcon, science: FlaskIcon, globe: GlobeIcon, history: HourglassIcon, civics: LandmarkIcon }

// Standards grouped by school stage, named after `levels` (Primary 1–5, Upper Primary 6–8, Secondary 9–10, Higher Secondary 11–12).
const stageRanges = [
  [1, 5],
  [6, 8],
  [9, 10],
  [11, 12],
]
const stages = levels.map((level, index) => {
  const [from, to] = stageRanges[index]
  return { name: level.name, standards: Array.from({ length: to - from + 1 }, (_, offset) => from + offset) }
})

// A colour for each subject's icon tile, so the list is easy to scan.
const subjectColours: Record<string, string> = {
  Maths: 'bg-[#e0e9ff] text-royal',
  Science: 'bg-[#dcfce7] text-[#15803d]',
  'Social Science': 'bg-[#cffafe] text-[#0e7490]',
  Geography: 'bg-[#cffafe] text-[#0e7490]',
  History: 'bg-[#ffedd5] text-[#c2410c]',
  Civics: 'bg-[#ede9fe] text-[#6d28d9]',
  English: 'bg-[#fce7f3] text-[#be185d]',
  'English Grammar': 'bg-[#fce7f3] text-[#be185d]',
  Gujarati: 'bg-[#fef3c7] text-[#b45309]',
  Hindi: 'bg-[#ffe4e6] text-[#be123c]',
  Sanskrit: 'bg-[#fff1e6] text-[#c2410c]',
}

const mediumGlyphs = ['અ', 'Aa']

function SubjectBadge({ subject }: { subject: Subject }) {
  if (subject.icon === 'language') {
    return <span className="text-lg leading-none font-extrabold">{subject.glyph}</span>
  }
  const Icon = icons[subject.icon]
  return <Icon className="h-5 w-5" />
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12l5 5L20 7" />
    </svg>
  )
}

// Step heading: a numbered circle that turns into a tick once the step is chosen.
function StepLabel({ step, done, children }: { step: number; done: boolean; children: string }) {
  return (
    <span className="flex items-center gap-2.5 text-base font-extrabold text-navy">
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors ${
          done ? 'bg-royal text-white' : 'bg-gold/20 text-[#9a7410]'
        }`}
      >
        {done ? <CheckIcon className="h-3.5 w-3.5" /> : step}
      </span>
      {children}
    </span>
  )
}

const pillClass = (selected: boolean) =>
  `border-2 font-bold transition-all duration-200 ${
    selected
      ? 'border-royal bg-royal text-white shadow-lg shadow-royal/30 scale-105'
      : 'border-navy/10 bg-white text-navy hover:-translate-y-0.5 hover:border-royal/50 hover:text-royal'
  }`

// Class finder: the parent picks standard, medium and board, sees the subjects, and enquires with one tap.
function Courses() {
  const [standard, setStandard] = useState<number | null>(null)
  const [mediumIndex, setMediumIndex] = useState(0)
  const [board, setBoard] = useState<string | null>(null)
  const medium = mediums[mediumIndex]
  const stage = stages.find((candidate) => standard !== null && candidate.standards.includes(standard))

  const summary = [standard && `Std ${standard}`, medium.name, board].filter(Boolean).join(' · ')
  const enquiry = whatsappLink(
    ['Hello,', `I would like to know about tuition for ${summary} at Gopi Teacher Tuition Class.`].join('\n'),
  )

  return (
    <section id="courses" aria-labelledby="courses-heading" className="relative scroll-mt-18 overflow-hidden bg-surface py-20 md:py-28">
      <div aria-hidden="true" className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-royal/[0.07] blur-3xl" />
      <div aria-hidden="true" className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
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
          <div className="relative mt-12 grid overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-2xl shadow-navy/10 lg:grid-cols-[1.05fr_1fr]">
            <div className="flex flex-col gap-8 p-5 md:p-9">
              <fieldset>
                <legend>
                  <StepLabel step={1} done={standard !== null}>
                    Choose standard
                  </StepLabel>
                </legend>
                {/* Phones: one 6-column grid of 1–12. Larger screens: a row per stage with its name. */}
                <div className="mt-4 grid grid-cols-6 gap-2 sm:flex sm:flex-col sm:gap-3">
                  {stages.map((group) => (
                    <div key={group.name} className="contents sm:flex sm:items-center sm:gap-2">
                      <span
                        className={`hidden w-36 shrink-0 text-xs font-bold sm:block tracking-[0.12em] uppercase transition-colors ${
                          stage?.name === group.name ? 'text-royal' : 'text-muted'
                        }`}
                      >
                        {group.name}
                      </span>
                      <div className="contents sm:flex sm:flex-wrap sm:gap-2">
                        {group.standards.map((value) => (
                          <button
                            key={value}
                            type="button"
                            aria-pressed={standard === value}
                            aria-label={`Std ${value}`}
                            onClick={() => setStandard(value)}
                            className={`h-11 w-full rounded-xl text-base sm:w-11 ${pillClass(standard === value)}`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend>
                  <StepLabel step={2} done>
                    Choose medium
                  </StepLabel>
                </legend>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {mediums.map((option, index) => {
                    const selected = mediumIndex === index
                    return (
                      <button
                        key={option.name}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setMediumIndex(index)}
                        className={`relative flex flex-col items-start gap-2 rounded-2xl border-2 p-3 text-left sm:flex-row sm:items-center sm:gap-3 transition-all md:p-4 ${
                          selected ? 'border-royal bg-sky shadow-lg shadow-royal/15' : 'border-navy/10 bg-white hover:border-royal/40'
                        }`}
                      >
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-extrabold transition-colors ${
                            selected ? 'bg-royal text-white' : 'bg-sky text-royal'
                          }`}
                        >
                          {mediumGlyphs[index]}
                        </span>
                        <span>
                          <span className="block text-sm leading-tight font-extrabold text-navy md:text-base">{option.name}</span>
                          <span className="block text-xs text-muted">{option.subjects.length} subjects</span>
                        </span>
                        {selected && (
                          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold text-navy shadow">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>
                        )}
                      </button>
                    )
                  })}
                </div>
              </fieldset>

              <fieldset>
                <legend>
                  <StepLabel step={3} done={board !== null}>
                    Choose board
                  </StepLabel>
                </legend>
                <div className="mt-4 grid grid-cols-4 gap-2 sm:flex sm:flex-wrap">
                  {boards.map((option) => (
                    <button
                      key={option.short}
                      type="button"
                      aria-pressed={board === option.short}
                      title={option.name}
                      onClick={() => setBoard(option.short)}
                      className={`rounded-full py-2.5 text-sm sm:px-5 ${pillClass(board === option.short)}`}
                    >
                      {option.short}
                    </button>
                  ))}
                </div>
              </fieldset>

              <p className="mt-auto flex items-center gap-3 rounded-2xl border border-dashed border-gold/60 bg-gold/[0.06] px-4 py-3 text-sm text-navy">
                <span aria-hidden="true" className="text-xl">💬</span>
                <span>
                  Not sure which to choose?{' '}
                  <a href={site.phoneHref} className="font-bold whitespace-nowrap text-royal underline-offset-2 hover:underline">
                    Call {site.phoneDisplay}
                  </a>{' '}
                  and we'll help.
                </span>
              </p>
            </div>

            <div className="relative flex flex-col overflow-hidden bg-gradient-to-br from-navy to-night p-6 text-white md:p-9">
              <div aria-hidden="true" className="dot-grid absolute inset-0" />
              <div aria-hidden="true" className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/25 blur-3xl" />

              <div className="relative flex items-center gap-4" aria-live="polite">
                <span
                  key={standard ?? 'none'}
                  className="flex h-20 w-20 shrink-0 animate-[pop_0.35s_ease-out] flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-gold-light to-gold text-navy shadow-[0_10px_30px_-8px_rgba(234,179,8,0.7)]"
                >
                  <span className="text-[0.65rem] font-bold tracking-[0.15em] uppercase">Std</span>
                  <span className="text-3xl leading-none font-extrabold">{standard ?? '?'}</span>
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">
                    {stage ? stage.name : 'Your class'}
                  </p>
                  <p className="mt-1 text-xl leading-tight font-extrabold md:text-2xl">{medium.name}</p>
                  <p className="mt-1 text-sm text-white/65">
                    {board ?? 'Any board'} · {medium.subjects.length} subjects
                  </p>
                </div>
              </div>

              <ul key={medium.name} className="relative mt-7 grid grid-cols-2 gap-2.5">
                {medium.subjects.map((subject, index) => (
                  <li
                    key={subject.name}
                    style={{ animationDelay: `${index * 40}ms` }}
                    className="flex animate-[pop_0.4s_ease-out_backwards] items-center gap-3 rounded-xl bg-white p-2.5 text-sm font-bold text-navy shadow-sm transition-transform hover:-translate-y-0.5"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${subjectColours[subject.name] ?? 'bg-sky text-royal'}`}
                    >
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
                className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light to-gold px-6 py-4 font-bold text-navy shadow-[0_10px_30px_-8px_rgba(234,179,8,0.7)] transition-transform hover:-translate-y-0.5 lg:mt-auto"
              >
                <WhatsAppIcon className="h-5 w-5" />
                {standard ? `Enquire for Std ${standard}` : 'Enquire on WhatsApp'}
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
