import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
const App = () => {
  return (
    <div className='h-auto w-full bg-[#F9FAFB]'>
        <Header />
        <Hero />
        <AboutMe />
        <Projects />
    </div>
  )
}

export default App
