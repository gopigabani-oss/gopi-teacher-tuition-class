import Footer from './components/Footer'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Boards from './sections/Boards'
import Contact from './sections/Contact'
import Courses from './sections/Courses'
import Faq from './sections/Faq'
import Hero from './sections/Hero'
import HowToJoin from './sections/HowToJoin'
import Levels from './sections/Levels'
import Reviews from './sections/Reviews'
import SubjectStrip from './sections/SubjectStrip'
import WhyUs from './sections/WhyUs'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SubjectStrip />
        <Levels />
        <Courses />
        <Boards />
        <WhyUs />
        <Reviews />
        <HowToJoin />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
