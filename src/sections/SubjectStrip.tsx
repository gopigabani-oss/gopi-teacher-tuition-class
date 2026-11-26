import { SparkleIcon } from '../components/icons'
import { allSubjects } from '../data/site'

// Gold band under the hero with every subject scrolling past. The list is drawn twice so the loop is seamless.
function SubjectStrip() {
  return (
    <div className="relative -mt-px overflow-hidden bg-gold py-4" aria-label={`Subjects: ${allSubjects.join(', ')}`}>
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {allSubjects.map((subject) => (
              <li key={subject} className="flex items-center gap-6 px-3 text-lg font-extrabold whitespace-nowrap text-navy md:text-xl">
                {subject}
                <SparkleIcon className="h-4 w-4 text-white" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default SubjectStrip
