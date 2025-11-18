import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const HeroTitle = () => {
  return (
    <h1 className='text-5xl font-bold'>
        <Typewriter 
            words={["Hello, I'm Karl Bautista"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1200}
        
        />
    </h1>
  )
}

export default HeroTitle
