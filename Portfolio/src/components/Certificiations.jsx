import React, { useEffect } from 'react'
import CertCarousel from './CertCarousel'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Certificiations = ({ certificationsRef }) => {

    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.3
    });
    
    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
    }, [inView, controls]);


  return (
    <section className='w-full h-auto  flex justify-center bg-[#111827] py-10 scroll-mt-38' ref={certificationsRef}> 
            <motion.div className='w-[75%] h-full flex flex-col p-5 items-center gap-5'
            ref={inViewRef}
            variants={{
                hidden: { opacity: 0, y: 150 },
                visible: { opacity: 1, y: 0 }
            }}
            animate={controls}
            initial="hidden"
             transition={{ duration: 0.3, ease: "easeOut" }}>
              <h1 className='text-3xl text-[#F9FAFB] font-extrabold'>Certifications</h1>
              <p className='text-2xl text-[#F9FAFB] font-extrabold text-center'>These certifications strengthen my foundation by validating my understanding of core web development concepts and practical skills in Javascript and responsive design.</p>
              <div className='w-full h-full flex justify-center items-center'>
                  <CertCarousel />
              </div>
            </motion.div>
    </section>
  )
}

export default Certificiations
