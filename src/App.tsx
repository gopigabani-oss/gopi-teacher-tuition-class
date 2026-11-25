import Footer from './components/Footer'
import Header from './components/Header'
import WhatsAppButton from './components/WhatsAppButton'
import Boards from './sections/Boards'
import Contact from './sections/Contact'
import Courses from './sections/Courses'
import Hero from './sections/Hero'
import WhyUs from './sections/WhyUs'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Boards />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
