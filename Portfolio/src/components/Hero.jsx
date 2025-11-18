import React from 'react'
import HeroTitle from './HeroTitle'
import MyPicture from "../assets/mypicture.jpg"
import { easeOut, motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] flex justify-center items-center font-extrabold'>
        <div className='w-[60%] h-[50%] flex p-5 justify-center gap-4'>
            <motion.div className='w-[60%] h-full flex flex-col justify-center gap-5 '
                        initial={{ opacity: 0, x: -150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 , ease: "easeOut" }}>
                <HeroTitle />
                <div className='w-full'>
                    <h1 className='text-2xl text-black'>I'm an aspiring full-stack web developer with a strong focus on frontend development and a 
                        growing foundation in backend technologies.</h1>
                </div>
            </motion.div>

            <motion.div className='w-[40%] h-full rounded-full flex justify-center items-center border-5 border-black
            hover:border-[#2563EB] transition-colors duration-200 ease-in-out cursor-pointer'
                        initial={{ opacity: 0, x: 150 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut"}}>
                       
                <img src={MyPicture} alt="my picture"  className='rounded-full w-full h-full object-cover'/>
            </motion.div>
        </div>
      


    </div>
  )
}

export default Hero
