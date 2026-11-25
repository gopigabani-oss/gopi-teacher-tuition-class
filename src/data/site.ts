const phone = '9510331544'
const whatsappText = 'Hello,\nI would like to know about admission at Gopi Teacher Tuition Class.'

// wa.me link that opens a chat with the class, with `text` already typed in.
export const whatsappLink = (text: string) => `https://wa.me/91${phone}?text=${encodeURIComponent(text)}`

export const site = {
  name: 'Gopi Teacher Tuition Class',
  tagline: 'Where Minds Shine',
  established: 2014,
  phone,
  phoneDisplay: '+91 95103 31544',
  phoneHref: `tel:+91${phone}`,
  whatsappHref: whatsappLink(whatsappText),
  address: 'B/10 Smrutibindu Park Society, Ghodasar, Ahmedabad',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=Smrutibindu+Park+Society+Ghodasar+Ahmedabad',
  mapEmbed: 'https://www.google.com/maps?q=Smrutibindu+Park+Society,+Ghodasar,+Ahmedabad&output=embed',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Boards', href: '#boards' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export type SubjectIcon = 'maths' | 'science' | 'globe' | 'history' | 'civics' | 'language'
export type Subject = { name: string; icon: SubjectIcon; glyph?: string }
export type Medium = { name: string; short: string; standards: string; subjects: Subject[] }

const maths: Subject = { name: 'Maths', icon: 'maths' }
const science: Subject = { name: 'Science', icon: 'science' }
const english: Subject = { name: 'English', icon: 'language', glyph: 'Aa' }
const gujarati: Subject = { name: 'Gujarati', icon: 'language', glyph: 'અ' }
const hindi: Subject = { name: 'Hindi', icon: 'language', glyph: 'अ' }
const sanskrit: Subject = { name: 'Sanskrit', icon: 'language', glyph: 'ॐ' }

export const mediums: Medium[] = [
  {
    name: 'Gujarati Medium',
    short: 'Gujarati',
    standards: 'Std 1 to 12',
    subjects: [maths, science, { name: 'Social Science', icon: 'globe' }, english, gujarati, hindi, sanskrit],
  },
  {
    name: 'English Medium',
    short: 'English',
    standards: 'Std 1 to 12',
    subjects: [
      maths,
      science,
      { name: 'Geography', icon: 'globe' },
      { name: 'History', icon: 'history' },
      { name: 'Civics', icon: 'civics' },
      english,
      { name: 'English Grammar', icon: 'language', glyph: 'Ab' },
      gujarati,
      hindi,
      sanskrit,
    ],
  },
]

// Every subject name once, for the scrolling strip under the hero.
export const allSubjects = [...new Set(mediums.flatMap((medium) => medium.subjects.map((subject) => subject.name)))]

export const boards = [
  { short: 'GSEB', name: 'Gujarat Secondary & Higher Secondary Education Board' },
  { short: 'NCERT', name: 'National Council of Educational Research and Training' },
  { short: 'CBSE', name: 'Central Board of Secondary Education' },
  { short: 'ICSE', name: 'Indian Certificate of Secondary Education' },
]

export const reasons = [
  { title: 'Teaching since 2014', text: 'More than ten years of helping students understand their subjects and do well.' },
  { title: 'Std 1 to 12', text: 'One place for your child from primary school all the way to the board exams.' },
  { title: 'Gujarati & English Medium', text: 'Lessons in the medium your child studies in at school.' },
  { title: 'Concepts First', text: 'We explain the why behind every topic, not just answers to memorise.' },
  { title: 'Regular Practice & Tests', text: 'Homework, revision and tests that keep students exam-ready.' },
]

export const levels = [
  { name: 'Primary', standards: 'Std 1–5', text: 'Reading, writing and number skills built step by step.' },
  { name: 'Upper Primary', standards: 'Std 6–8', text: 'Stronger concepts in every subject before high school.' },
  { name: 'Secondary', standards: 'Std 9–10', text: 'Full syllabus coverage and preparation for the Std 10 board exam.' },
  { name: 'Higher Secondary', standards: 'Std 11–12', text: 'Focused support for Std 11 and the Std 12 board exam.' },
]

export const joinSteps = [
  { title: 'Call or WhatsApp', text: "Tell us your child's standard, medium and board." },
  { title: 'Visit the class', text: 'Come to Ghodasar, meet the teacher and see the classroom.' },
  { title: 'Start learning', text: 'Your child joins the batch that suits them best.' },
]

export const faqs = [
  { question: 'Which standards do you teach?', answer: 'We teach Std 1 to 12.' },
  {
    question: 'Do you teach both Gujarati and English medium?',
    answer:
      'Yes. Gujarati medium: Maths, Science, Social Science, English, Gujarati, Hindi and Sanskrit. English medium: Maths, Science, Geography, History, Civics, English, English Grammar, Gujarati, Hindi and Sanskrit.',
  },
  { question: 'Which boards do you cover?', answer: 'GSEB, NCERT, CBSE and ICSE.' },
  { question: 'Where is the class?', answer: `${site.address}.` },
  {
    question: 'What are the timings and fees?',
    answer: `They depend on the standard and batch. Call or WhatsApp us on ${site.phoneDisplay} and we will share the details.`,
  },
  {
    question: 'How do I take admission?',
    answer: 'Send us a message using the enquiry form below, or call or WhatsApp us. We will guide you through the rest.',
  },
]
