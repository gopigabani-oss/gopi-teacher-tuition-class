import { site } from '../data/site'
import { PhoneIcon, WhatsAppIcon } from './icons'

// Phones get a Call / WhatsApp bar fixed to the bottom of the screen; larger screens get a round WhatsApp button.
function WhatsAppButton() {
  return (
    <>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-6 bottom-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-transform hover:scale-105 md:flex"
      >
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-navy/10 bg-white/95 p-2 backdrop-blur md:hidden">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 rounded-xl bg-royal py-3 font-bold text-white"
        >
          <PhoneIcon className="h-5 w-5" />
          Call
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366] py-3 font-bold text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </>
  )
}

export default WhatsAppButton
