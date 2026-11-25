import Container from '../components/Container'
import { BookIcon } from '../components/icons'
import SectionHeading from '../components/SectionHeading'
import { mediums } from '../data/site'

function Courses() {
  return (
    <section id="courses" aria-labelledby="courses-heading" className="scroll-mt-18 bg-surface py-16 md:py-20">
      <Container>
        <SectionHeading
          id="courses-heading"
          eyebrow="Our Courses"
          title="Classes for Std 1 to 12"
          intro="Choose your medium. We teach every main school subject."
        />
        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          {mediums.map((medium) => (
            <article key={medium.name} className="overflow-hidden rounded-2xl border border-gold/40 bg-white shadow-sm">
              <div className="flex items-center justify-between gap-3 bg-royal px-6 py-5 text-white">
                <h3 className="text-xl font-extrabold">{medium.name}</h3>
                <span className="rounded-full bg-gold px-3 py-1 text-sm font-bold text-navy">{medium.standards}</span>
              </div>
              <ul className="grid grid-cols-2 gap-2 p-4 sm:gap-3 sm:p-6">
                {medium.subjects.map((subject) => (
                  <li key={subject} className="flex items-center gap-2 rounded-lg bg-sky px-3 py-3 text-sm font-semibold text-navy sm:gap-3 sm:px-4 sm:text-base">
                    <BookIcon className="h-5 w-5 shrink-0 text-gold" />
                    {subject}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Courses
