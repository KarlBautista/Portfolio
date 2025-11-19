import React from 'react'
import HeroTitle from './HeroTitle'
import MyPicture from "../assets/mypicture.jpg"
import { easeOut, motion } from 'framer-motion'

const Hero = () => {  
    return (
    <div className='w-full min-h-[98vh] flex justify-center items-center font-extrabold'>
      <div className='w-full max-w-5xl flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8 px-4 md:px-0'>
        <motion.div className='w-full md:w-2/3 flex flex-col justify-center gap-5 text-center md:text-left'
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 , ease: "easeOut" }}>
          <HeroTitle />
          <div className='w-full'>
            <h1 className='md:text-2xl text-base text-black'>I'm an aspiring full-stack web developer with a strong focus on frontend development and a growing foundation in backend technologies.</h1>
          </div>
        </motion.div>

        <motion.div className='w-full md:w-1/3 rounded-full flex justify-center items-center  transition-colors duration-200 ease-in-out cursor-pointer mb-15'
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut"}}>
          <img src={MyPicture} alt="my picture"  className='rounded-full border-3 w-60 h-60 md:w-70 md:h-70 lg:w-85 lg:h-85 object-cover hover:border-[#2563EB] '/>
        </motion.div>
      </div>
      


    </div>
  )
}

export default Hero
