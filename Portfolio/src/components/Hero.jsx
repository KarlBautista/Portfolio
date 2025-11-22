import React, { useEffect, useState } from 'react'
import HeroTitle from './HeroTitle'
import MyPicture from "../assets/mypicture.jpg"
import { easeOut, motion } from 'framer-motion'
import Google from "../assets/google.svg"
import Github from "../assets/Github.svg"
import CV from "../assets/Karl-Bautista-CV.pdf";
import Shades from "../assets/mypicture-shades.png"
import "../App.css"

const Hero = () => {  
    const [picture, setPicture] = useState(MyPicture);

    useEffect(() => {
      const rotatePicture = setInterval(() => {
        setPicture((p) => p === MyPicture ? Shades : MyPicture);
      }, 5000)
       return () => clearInterval(rotatePicture);
    }, []);

    const changePicture = () => {
      setPicture((p) => p === MyPicture ? Shades : MyPicture);
    }



    return (
    <div className='w-full min-h-[98vh] md:px-5 flex justify-center items-center font-extrabold'>
      <div className='w-full max-w-5xl flex flex-col-reverse lg:flex-row items-center gap-6 md:gap-8 px-4 md:px-0'>
        <motion.div className='w-full md:w-2/3 flex flex-col justify-center gap-5 text-center md:text-left'
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 , ease: "easeOut" }}>
          <HeroTitle />
          <div className='w-full'>
            <h1 className='md:text-2xl text-base text-black cursor-default'>{`I'm an aspiring full-stack web developer with a strong focus on frontend development and a growing foundation in backend technologies.`
              .split('').map((letter, i) => letter !== " " ? <span key={i} className='wiggle'>{letter}</span> : <span key={i}>{letter}</span> )}</h1>
          </div>
          <div className='w-full h-full flex gap-3 justify-center md:justify-start'>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=karlbautista234@gmail.com' target='_blank' className='w-8 h-8 rounded-full  p-1.5 bg-[#2563EB] cursor-pointer hover:brightness-110' title='karlbautista234@gmail.com'>
               <img src={Google} alt="" className='w-full h-full invert brightness-0 '/>
            </a>

            <a href='https://github.com/KarlBautista' target='_blank' className='w-8 h-8 rounded-full  p-1.5 bg-[#2563EB] cursor-pointer hover:brightness-110' title='https://github.com/KarlBautista'>
               <img src={Github} alt="" className='w-full h-full invert brightness-0 '/>
            </a>

            <a href={CV} download className='flex items-center w-auto h-8 rounded-full px-3 py-1 bg-[#2563EB] cursor-pointer hover:brightness-110' title='My CV'>
                <h1 className='text-[#F9FAFB] text-[12px]'>Download my CV</h1>
            </a>
             
          </div>
        </motion.div>

        <motion.div className='w-full md:w-1/3 rounded-full flex justify-center items-center  transition-colors duration-200 ease-in-out cursor-pointer mb-15'
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut"}}>
          <img src={picture} onClick={() => changePicture()} id='my-image' alt="my picture"  className='rounded-full border-3 w-60 h-60 md:w-70 md:h-70 lg:w-85 lg:h-85 object-cover hover:border-[#2563EB] '/>
        </motion.div>
      </div>
      


    </div>
  )
}

export default Hero
