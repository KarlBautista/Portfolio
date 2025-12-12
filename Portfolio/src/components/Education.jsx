import React, { useEffect } from 'react'
import TUP from '../assets/tup.png'
import { easeOut, motion } from 'framer-motion'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const Education = ({ educationRef }) => {
    const controls = useAnimation();
    const { ref: inViewRef , inView } = useInView({ 
        threshold: 0.3,
    });

    useEffect(() => {
        if (inView) { 
            controls.start("visible");
        }
    }, [inView, controls]);
  return (
    <section className='w-full h-auto mb-10  flex justify-center scroll-mt-50' ref={educationRef}>
        <div className='w-full md:w-[70%] h-full p-5'>
            <motion.h1 
            variants={{ hidden: { opacity: 0, y: -150}, visible: { opacity: 1, y: 0 }} }
            initial={"hidden"}
            animate={controls}
            transition={{ duration: 0.6, ease: easeOut }}
            ref={inViewRef}
            className='text-2xl md:text-3xl font-extrabold text-[#2563EB] md:mb-15 md:px-5'>Education</motion.h1>
            <div className='flex flex-col md:flex-row items-center w-full h-full' >
                <motion.div className='w-[40%] h-[90%] flex justify-center items-center mt-5 mb-5 md:mb-0 md:mt-0'
                variants={{hidden: { opacity: 0, x: -150 }, visible: { opacity: 1, x: 0 }}}
                animate={controls}
                initial={"hidden"}
                transition={{ duration: 0.6, ease: easeOut }}
                ref={inViewRef}>
                    <div className='h-[90%] w-[90%] md:w-[35%] md:h-[50%]'>
                        <img src={TUP} alt="tup logo" className='h-full w-full '/>
                    </div>
                </motion.div> 
                <motion.div className='w-full md:w-[60%] h-[90%] flex flex-col items-center md:items-start justify-center gap-3'
                variants={{hidden: { opacity: 0, x: 150 }, visible: { opacity: 1, x: 0 }}}
                animate={controls}
                initial={"hidden"}
                transition={{ duration: 0.6, ease: easeOut }}
                ref={inViewRef}>
                    <h1 className='text-2xl font-extrabold text-center md:text-left'>Technological University of the Philippines - Manila </h1>
                    <h1 className='font-extrabold text-center md:text-left'>Bachelor of Science in Information Technology</h1>
                    <h1 className='font-extrabold text-center md:text-left'>2022-2026</h1>
                    <h1 className='font-extrabold text-center md:text-left'>Academic Achiever for 2nd year and 3rd year</h1>
                </motion.div>
            </div>
     
        </div>
    </section>
  )
}

export default Education
