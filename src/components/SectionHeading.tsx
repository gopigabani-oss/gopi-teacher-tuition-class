// Gold eyebrow, blue title and an optional intro line, centred above a section.
function SectionHeading({ id, eyebrow, title, intro, light = false }: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto max-w-[40rem] text-center">
      <p className="text-sm font-bold tracking-[0.18em] text-gold uppercase">{eyebrow}</p>
      <h2 id={id} className={`mt-2 text-[1.75rem] leading-tight font-extrabold md:text-[2.5rem] ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-gold" />
      {intro && <p className={`mt-4 ${light ? 'text-white/80' : 'text-muted'}`}>{intro}</p>}
    </div>
  )
}

export default SectionHeading
