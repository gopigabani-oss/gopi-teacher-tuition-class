import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { boards } from '../data/site'

function Boards() {
  return (
    <section id="boards" aria-labelledby="boards-heading" className="relative scroll-mt-18 overflow-hidden bg-sky py-20 md:py-28">
      <div aria-hidden="true" className="absolute top-10 -left-20 h-72 w-72 rounded-full bg-royal/10 blur-3xl" />
      <Container>
        <Reveal>
          <SectionHeading
            id="boards-heading"
            eyebrow="All Boards"
            title="Whichever board"
            highlight="you study"
            intro="Lessons follow your school's syllabus and textbooks."
          />
        </Reveal>
        <ul className="relative mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {boards.map((board, index) => (
            <li key={board.short}>
              <Reveal delay={index * 100} className="h-full">
                <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8">
                  <span
                    aria-hidden="true"
                    className="absolute top-3 right-4 text-[3rem] leading-none font-extrabold text-royal/10 transition-colors group-hover:text-gold/40 md:text-[3.5rem]"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="relative text-3xl font-extrabold text-royal md:text-4xl">{board.short}</p>
                  <span className="relative mt-3 block h-1 w-10 rounded-full bg-gold transition-all group-hover:w-20" />
                  <p className="relative mt-3 text-xs leading-snug text-muted md:text-sm">{board.name}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Boards
