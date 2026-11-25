import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
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
        <WhyUs />
        <Reviews />
        <HowToJoin />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  )
}

export default App
