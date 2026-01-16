import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Standard Imports
import Loading from './Component/loading'
import NavCol from './Component/NavBar/NavCol'
import Hero from './Component/Hero/Hero'
import About from './Component/About'
import Skills from './Component/Skills'
import Expriance from './Component/expriance'
import Services from './Component/Service'
import Projects from './Component/Projects'
import Contact from './Component/contact'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      delay: 200,
      once: true,
    })

    // Vite uses import.meta.env.MODE instead of process.env.NODE_ENV
    const isDev = import.meta.env.MODE === 'development'
    
    if (isDev) {
      setLoading(false)
    } else {
      const timeout = setTimeout(() => setLoading(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [])

  // If loading is true, we show the loader
  if (loading) return <Loading />

  return (
    <main className="overflow-x-hidden bg-[#030712] w-full">
      <NavCol />
      <Hero />
      <About />
      <Skills />
      <Expriance />
      <Services />
      <Projects />
      <Contact /> 
    </main>
  )
}