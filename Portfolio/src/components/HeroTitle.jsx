import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
const HeroTitle = () => {
  return (
    <h1 className='text-[25px] text-center  md:text-left md:text-5xl font-extrabold text-[#2563EB] cursor-default'>
        <Typewriter 
            words={["Hello, I'm Karl Bautista"]}
            loop
            cursor
          
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={3000}
       
        
        />
    </h1>
  )
}

export default HeroTitle
