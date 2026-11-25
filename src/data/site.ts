const phone = '9510331544'
const whatsappText = 'Hello,\nI would like to know about admission at Gopi Teacher Tuition Class.'

export const site = {
  name: 'Gopi Teacher Tuition Class',
  tagline: 'Where Minds Shine',
  established: 2014,
  phone,
  phoneDisplay: '+91 95103 31544',
  phoneHref: `tel:+91${phone}`,
  whatsappHref: `https://wa.me/91${phone}?text=${encodeURIComponent(whatsappText)}`,
  address: 'B/10 Smrutibindu Park Society, Ghodasar, Ahmedabad',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=Smrutibindu+Park+Society+Ghodasar+Ahmedabad',
  mapEmbed: 'https://www.google.com/maps?q=Smrutibindu+Park+Society,+Ghodasar,+Ahmedabad&output=embed',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'Boards', href: '#boards' },
  { label: 'Why Us', href: '#why-us' },
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
