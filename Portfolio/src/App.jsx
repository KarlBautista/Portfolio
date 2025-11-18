import React, { useRef } from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import CursorFollower from './components/CursorFollower'
const App = () => {
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  return (
    <div className='h-auto w-full bg-[#F9FAFB] scroll-smooth'>
        <CursorFollower />
        <Header heroRef={heroRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef} />
        <Hero heroRef={heroRef} />
        <AboutMe aboutMeRef={aboutMeRef}/>
        <Projects projectsRef={projectsRef} />
    </div>
  )
}

export default App
