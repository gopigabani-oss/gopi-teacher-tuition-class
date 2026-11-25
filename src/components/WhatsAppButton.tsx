import { site } from '../data/site'
import { WhatsAppIcon } from './icons'

// Floating WhatsApp button, bottom-right on every screen.
function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105 md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  )
}

export default WhatsAppButton
