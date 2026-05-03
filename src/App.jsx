import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CustomCursor from './components/UI/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const appRef = useRef(null)

  useEffect(() => {
    // Init Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.1,           // Lower = smoother, less laggy feel
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    })

    // Wire Lenis into GSAP ticker so ScrollTrigger stays in sync
    const onTick = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    // Keep ScrollTrigger in sync with Lenis scroll position
    lenis.on('scroll', () => ScrollTrigger.update())

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])

  return (
    <div ref={appRef} className="app">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
