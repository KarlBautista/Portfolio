import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
const App = () => {
  return (
    <div className='h-auto w-full bg-[#F9FAFB]'>
        <Header />
        <Hero />
        <AboutMe />
    </div>
  )
}

export default App
