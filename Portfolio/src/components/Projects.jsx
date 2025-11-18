import React, { useEffect } from 'react'
import RecipeFinder from "../assets/RecipeFinder2.png"
import DefineIt from "../assets/DefineIt.png"
import Lakbay from "../assets/Lakbay.png"
import { useInView } from 'react-intersection-observer'
import  { motion, useAnimation } from "framer-motion"
import ReactJS from "../assets/react.svg"

const Projects = () => {    

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.01
    })
    useEffect(() => {
        if(inView) {
            controls.start("visible")
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

  return (
    <section className='w-full h-[50vh] bg-[#F9FAFB] flex justify-center'>
        <div className='w-[70%] h-full'>
            <motion.h1 className='text-4xl p-5 font-extrabold text-[#2563EB]'
            ref={ref}
            variants={{ hidden: { opacity: 0, y: -150 }, visible: { opacity: 1, y: 0}}}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.6, ease: "easeOut"}}>Projects</motion.h1>
            
            <div className=' w-full h-full flex flex-wrap gap-5 justify-center'>
               <motion.a className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4
               transform'
               href='https://recipefinder-gamma.vercel.app/'
               target='_blank'
               ref={ref}
               variants={{
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x:-150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.6, ease: "easeOut"}}>
                
                    <div className='w-full h-[50%] rounded-xl overflow-hidden'>
                        <img src={RecipeFinder} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        RecipeFinder
                        </h1>
                        <p className='font-semibold text-center'>A web application that helps users explore and discover recipes, ingredients, and cooking ideas from around the world.</p>
                        <div className=''>
                           <p className='font-semibold'>Tech stack used: <span className='flex gap-3'>
                                <img src="https://cdn.simpleicons.org/react/61DAFB" alt="" className='w-[50px] h-[50px]' />
                                <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" class="w-[50px] h-[50px]" />
                                <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" title="Tailwind CSS" class="w-[50px] h-[50px]" />
                            </span></p>
                        </div>
                    </div>
                </motion.a>
                

            <motion.div className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'
               ref={ref}
               variants={{
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x: 150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.6, ease: "easeOut"}}>
                
                    <div className='w-full h-[50%] rounded-xl overflow-hidden'>
                        <img src={DefineIt} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        DefineIt
                        </h1>
                        <p className='font-semibold'>web application designed to help users explore and discover delicious dishes from around the 
                            world. Built with React.js and powered by the TheMealDB REST API, it provides a dynamic and user-friendly experience for browsing recipes, ingredients, and cooking ideas.</p>
                    </div>
                </motion.div>

            <motion.div className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'
               ref={ref}
               variants={{
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x:-150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.6, ease: "easeOut"}}>
                
                    <div className='w-full h-[50%] rounded-xl overflow-hidden'>
                        <img src={Lakbay} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        Recipe Finder
                        </h1>
                        <p className='font-semibold'>web application designed to help users explore and discover delicious dishes from around the 
                            world. Built with React.js and powered by the TheMealDB REST API, it provides a dynamic and user-friendly experience for browsing recipes, ingredients, and cooking ideas.</p>
                    </div>
            </motion.div>

            <motion.div className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'
               ref={ref}
               variants={{
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x: 150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.6, ease: "easeOut"}}>
                
                    <div className='w-full h-[50%] rounded-xl overflow-hidden'>
                        <img src={RecipeFinder} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        Recipe Finder
                        </h1>
                        <p className='font-semibold'>web application designed to help users explore and discover delicious dishes from around the 
                            world. Built with React.js and powered by the TheMealDB REST API, it provides a dynamic and user-friendly experience for browsing recipes, ingredients, and cooking ideas.</p>
                    </div>
            </motion.div>
                       
                        
            </div> 
        </div>
      
    </section>
  )
}

export default Projects
