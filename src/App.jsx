import { useState } from 'react'
import './App.css'
import Header from './Header'
import { Footer } from './Footer'
import Hero from './Hero'
import About from './About'
import Services from './Services'
import AIAdvantage from './AIAdvantage'
import HowWeWork from './HowWeWork'
import WhyChoose from './WhyChoose'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
import Team from './Team'
import Results from './Results'
import VisionXIntro from './VisionXIntro'
import Feature from './Feature'
import DemosHero from './DemosHero'
import Contact from './Contact'
import Trusted from './Trusted'
// import HeroSlider from './components/HeroSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Hero/>
      {/* <Feature/> */}
      <About/>
      <Team/>
      {/* <DemosHero/> */}
      <Results/>
      {/* <Trusted/> */}
      {/* <VisionXIntro/> */}
      {/* <Services/> */}
      
      {/* <HeroSlider/> */}
      {/* <AIAdvantage/> */}
      
      {/* <HowWeWork/> */}
      {/* <WhyChoose/> */}
      <Testimonials/>
      {/* <CallToAction/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App


