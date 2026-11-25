// Gold pill eyebrow, bold title with a highlighted word, and an optional intro line, centred above a section.
function SectionHeading({ id, eyebrow, title, highlight, intro, light = false }: {
  id: string
  eyebrow: string
  title: string
  highlight?: string
  intro?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto max-w-[42rem] text-center">
      <p
        className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-[0.18em] uppercase ${light ? 'bg-white/10 text-gold-light' : 'bg-gold/15 text-[#9a7410]'}`}
      >
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 text-[2rem] leading-[1.1] font-extrabold tracking-tight md:text-[3rem] ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}{' '}
        {highlight && (
          <span className="relative inline-block text-royal">
            <span className={light ? 'text-gold-light' : ''}>{highlight}</span>
            <svg
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute -bottom-1.5 left-0 h-3 w-full text-gold"
            >
              <path d="M2 9C50 3 150 1 198 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        )}
      </h2>
      {intro && <p className={`mt-5 text-base md:text-lg ${light ? 'text-white/75' : 'text-muted'}`}>{intro}</p>}
    </div>
  )
}

export default SectionHeading
