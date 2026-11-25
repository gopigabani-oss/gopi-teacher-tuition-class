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
import { boards, mediums, whatsappLink, type Subject } from '../data/site'

const icons = { maths: CalculatorIcon, science: FlaskIcon, globe: GlobeIcon, history: HourglassIcon, civics: LandmarkIcon }

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

// Look of each medium's card header: big letter in the corner and the banner colours.
const mediumStyles = [
  { glyph: 'અ', banner: 'from-royal to-navy' },
  { glyph: 'Aa', banner: 'from-navy to-night' },
]

function SubjectBadge({ subject }: { subject: Subject }) {
  if (subject.icon === 'language') {
    return <span className="text-lg leading-none font-extrabold">{subject.glyph}</span>
  }
  const Icon = icons[subject.icon]
  return <Icon className="h-5 w-5" />
}

// Both mediums side by side, each with all its subjects, and the boards we cover underneath.
function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-heading" className="relative scroll-mt-18 overflow-hidden bg-surface py-20 md:py-28">
      <div aria-hidden="true" className="absolute top-40 -left-40 h-96 w-96 rounded-full bg-royal/[0.07] blur-3xl" />
      <div aria-hidden="true" className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <Container>
        <Reveal>
          <SectionHeading
            id="courses-heading"
            eyebrow="Our Courses"
            title="Subjects we"
            highlight="teach"
            intro="Std 1 to 12, in Gujarati and English medium."
          />
        </Reveal>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {mediums.map((medium, index) => {
            const style = mediumStyles[index]
            return (
              <Reveal key={medium.name} delay={index * 120} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-navy/10 bg-white shadow-xl shadow-navy/5 transition-shadow hover:shadow-2xl hover:shadow-navy/10">
                  <header className={`relative overflow-hidden bg-gradient-to-br ${style.banner} px-6 py-7 text-white md:px-8`}>
                    <div aria-hidden="true" className="dot-grid absolute inset-0" />
                    <span
                      aria-hidden="true"
                      className="absolute -right-2 -bottom-8 text-[8rem] leading-none font-extrabold text-white/10 transition-transform duration-500 group-hover:scale-110 md:text-[9rem]"
                    >
                      {style.glyph}
                    </span>
                    <p className="relative inline-block rounded-full bg-gold px-3 py-1 text-xs font-extrabold tracking-[0.12em] text-navy uppercase">
                      {medium.standards}
                    </p>
                    <h3 className="relative mt-3 text-[1.75rem] leading-tight font-extrabold md:text-[2rem]">{medium.name}</h3>
                    <p className="relative mt-1 text-white/70">{medium.subjects.length} subjects</p>
                  </header>

                  <ul className="grid grid-cols-2 gap-3 p-5 md:p-7">
                    {medium.subjects.map((subject) => (
                      <li
                        key={subject.name}
                        className="flex items-center gap-3 rounded-2xl border border-navy/[0.08] bg-surface p-3 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-white hover:shadow-md md:text-base"
                      >
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${subjectColours[subject.name] ?? 'bg-sky text-royal'}`}
                        >
                          <SubjectBadge subject={subject} />
                        </span>
                        {subject.name}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(
                      ['Hello,', `I would like to know about ${medium.name} tuition at Gopi Teacher Tuition Class.`].join('\n'),
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link mx-5 mt-auto mb-5 inline-flex items-center justify-center gap-2 rounded-full bg-sky px-6 py-3.5 font-bold text-royal transition-colors hover:bg-royal hover:text-white md:mx-7 md:mb-7"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Enquire on WhatsApp
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <div className="relative mt-8 flex flex-col items-center gap-4 rounded-3xl border border-dashed border-gold/60 bg-gold/[0.06] p-5 sm:flex-row sm:justify-center md:p-6">
            <p className="font-extrabold text-navy">Boards we cover</p>
            <ul className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:justify-center">
              {boards.map((board) => (
                <li
                  key={board.short}
                  title={board.name}
                  className="rounded-full border-2 border-royal/15 bg-white px-3 py-2 text-center text-sm font-extrabold text-royal sm:px-5"
                >
                  {board.short}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Courses
