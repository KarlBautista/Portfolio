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
import Education from './components/Education'
const App = () => {
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactMeRef = useRef(null);
  const educationRef = useRef(null);

  return (
    <div className='h-auto min-w-[360px] w-full bg-[#F9FAFB] scroll-smooth overflow-x-hidden'>
        {window.innerWidth >= 768 && <CursorFollower />}
        <Header heroRef={heroRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} certificationsRef={certificationsRef} contactMeRef={contactMeRef} educationRef={educationRef}/>
        <Hero heroRef={heroRef} />
        <AboutMe aboutMeRef={aboutMeRef}/>
        <Projects projectsRef={projectsRef} />
        <Education educationRef={educationRef} />
        <Certificiations certificationsRef={certificationsRef}/>
        <ContactMe contactMeRef={contactMeRef}/>
        <Footer />
    </div>
  )
}

export default App
