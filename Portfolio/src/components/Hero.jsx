import React from 'react'
import HeroTitle from './HeroTitle'
const Hero = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className='w-[50%] h-[50%] bg-white flex flex-col p-5 '>
            <HeroTitle />
            <div className=''>
                <h1>I'm an aspiring full-stack web developer with a strong focus on frontend development and a 
                    growing foundation in backend technologies.</h1>
            </div>
        </div>

    </div>
  )
}

export default Hero
