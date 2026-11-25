import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { boards } from '../data/site'

function Boards() {
  return (
    <section id="boards" aria-labelledby="boards-heading" className="scroll-mt-18 bg-sky py-16 md:py-20">
      <Container>
        <SectionHeading
          id="boards-heading"
          eyebrow="All Boards"
          title="Whichever board your child studies"
          intro="Lessons follow your school's syllabus and textbooks."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 md:mt-12 md:gap-6 lg:grid-cols-4">
          {boards.map((board) => (
            <li key={board.short} className="rounded-2xl border-b-4 border-gold bg-white p-5 text-center shadow-sm md:p-6">
              <p className="text-2xl font-extrabold text-royal md:text-3xl">{board.short}</p>
              <p className="mt-2 text-xs leading-snug text-muted md:text-sm">{board.name}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default Boards
