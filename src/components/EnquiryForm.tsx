import { useState, type FormEvent, type ReactNode } from 'react'
import { boards, mediums, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './icons'

const standards = Array.from({ length: 12 }, (_, index) => `Std ${index + 1}`)

// Inputs and dropdowns share one height and look, so every field lines up on every phone.
const fieldClass =
  'mt-1.5 block h-12 w-full rounded-xl border border-navy/15 bg-white px-4 text-base text-ink outline-none transition-colors focus:border-royal focus:ring-4 focus:ring-royal/15'

// Dropdown without the phone's own grey styling, with a chevron drawn on the right instead.
function Select({ name, children }: { name: string; children: ReactNode }) {
  return (
    <span className="relative block">
      <select name={name} required defaultValue="" className={`${fieldClass} appearance-none pr-10`}>
        <option value="" disabled>
          Choose
        </option>
        {children}
      </select>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 mt-[3px] h-4 w-4 -translate-y-1/2 text-royal"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  )
}

// Admission enquiry that opens WhatsApp with the details already typed, so there is no server to run.
function EnquiryForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const lines = [
      'Hello,',
      'I would like to enquire about admission at Gopi Teacher Tuition Class.',
      `Student: ${data.get('student')}`,
      `Standard: ${data.get('standard')}`,
      `Medium: ${data.get('medium')}`,
      `Board: ${data.get('board')}`,
    ]
    const phone = String(data.get('phone') ?? '').trim()
    if (phone) lines.push(`Parent's phone: ${phone}`)
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-navy/10 bg-white p-6 shadow-xl shadow-navy/5 md:p-8">
      <h3 className="text-2xl font-extrabold text-navy">Admission enquiry</h3>
      <p className="mt-1 text-sm text-muted">Fill this in and send it to us on WhatsApp.</p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm font-semibold text-navy">
          Student's name
          <input name="student" required autoComplete="off" className={fieldClass} />
        </label>
        <label className="text-sm font-semibold text-navy">
          Standard
          <Select name="standard">
            {standards.map((standard) => (
              <option key={standard}>{standard}</option>
            ))}
          </Select>
        </label>
        <label className="text-sm font-semibold text-navy">
          Medium
          <Select name="medium">
            {mediums.map((medium) => (
              <option key={medium.name}>{medium.name}</option>
            ))}
          </Select>
        </label>
        <label className="text-sm font-semibold text-navy">
          Board
          <Select name="board">
            {boards.map((board) => (
              <option key={board.short}>{board.short}</option>
            ))}
          </Select>
        </label>
        <label className="text-sm font-semibold text-navy">
          Parent's phone <span className="font-normal text-muted">(optional)</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" className={fieldClass} />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-7 py-4 font-bold text-white shadow-lg shadow-[#25d366]/30 transition-transform hover:-translate-y-0.5"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send on WhatsApp
      </button>
      {sent && (
        <p role="status" className="mt-3 text-center text-sm text-muted">
          WhatsApp opened in a new tab. Press send there to reach us.
        </p>
      )}
    </form>
  )
}

export default EnquiryForm
