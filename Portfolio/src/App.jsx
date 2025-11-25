import React, { useRef } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import CursorFollower from './components/CursorFollower'
import Skills from './components/Skills'
import Certificiations from './components/Certificiations'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
const App = () => {
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactMeRef = useRef(null);

  return (
    <div className='h-auto min-w-[200px] w-full bg-[#F9FAFB] scroll-smooth overflow-x-hidden'>
        {window.innerWidth >= 768 && <CursorFollower />}
        <Header heroRef={heroRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} certificationsRef={certificationsRef} contactMeRef={contactMeRef}/>
        <Hero heroRef={heroRef} />
        <AboutMe aboutMeRef={aboutMeRef}/>
        <Projects projectsRef={projectsRef} />
        <Certificiations certificationsRef={certificationsRef}/>
        <ContactMe contactMeRef={contactMeRef}/>
        <Footer />
    </div>
  )
}

export default App
