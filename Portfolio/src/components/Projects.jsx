import React, { useEffect } from 'react'
import RecipeFinder from "../assets/RecipeFinder2.png"
import DefineIt from "../assets/DefineIt.png"
import Lakbay from "../assets/Lakbay.png"
import JAMarket from "../assets/JAMarket.png"
import { useInView } from 'react-intersection-observer'
import  { motion, useAnimation } from "framer-motion"
const Projects = ({ projectsRef }) => {    

    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView({
            threshold: 0.3
    })
    useEffect(() => {
        if(inView) {
            controls.start("visible")
        } 
    }, [inView, controls]);

  return (
        <section id="projects" className='w-full h-auto min-h-[60vh] bg-[#F9FAFB] flex justify-center scroll-mt-24 py-5 ' ref={projectsRef}>
        <div className='w-full md:w-[70%] h-full'>
            <motion.h1 className='text-2xl text-start p-5  md:text-3xl font-extrabold text-[#2563EB]'
            variants={{ hidden: { opacity: 0, y: -150 }, visible: { opacity: 1, y: 0}}}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.6, ease: "easeOut"}}>Projects</motion.h1>
                        <motion.p
                            className='italic text-[12px] text-gray-500 px-5'
                            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                            animate={controls}
                            initial="hidden"
                            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                        >(LakbayPH and JAMarket include a 30-second cooldown due to backend hosting on Render’s free tier.)</motion.p>
            
            <div className=' w-full h-full flex flex-wrap gap-5 justify-center p-3' ref={inViewRef}>
               <motion.a className='w-full lg:w-[45%] h-auto md:h-[520px] min-h-[480px] flex flex-col justify-between backdrop-blur-md border-5 border-[#111827] hover:border-[#2563EB] shadow-xl rounded-2xl p-4 transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group
               
               '
               href='https://recipefinder-gamma.vercel.app/'
               target='_blank' rel='noreferrer'
               variants={{  
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x:-150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.2, ease: "easeOut"}}>
                
                    <div className='w-full rounded-xl overflow-hidden h-1/2 md:h-[52%]'>
                        <img src={RecipeFinder} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        RecipeFinder
                        </h1>
                        <p className='font-semibold text-center'>A web application that helps users explore and discover recipes, ingredients, and cooking ideas from around the world.</p>
                        <div className=''>
                           <p className='font-semibold'>Tech stack used: <span className='flex gap-3 items-center'>
                         
                            </span></p>
                        </div>
                    </div>
                </motion.a>
                

                <motion.a className='w-full lg:w-[45%]  h-auto md:h-[520px] min-h-[480px] flex flex-col justify-between backdrop-blur-md border-5 border-[#111827] hover:border-[#2563EB]  shadow-xl rounded-2xl p-4 transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group'
                    href='https://defineit-nu.vercel.app/'
                    target='_blank' rel='noreferrer'
               variants={{
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x: 150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.2, ease: "easeOut"}}>
                
                    <div className='w-full rounded-xl overflow-hidden h-1/2 md:h-[52%]'>
                        <img src={DefineIt} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        DefineIt
                        </h1>
                        <p className='font-semibold text-center'>DefineIt is an open-source web app that helps users look up word meanings, synonyms, and antonyms.</p>
                        <div className=''>
                           <p className='font-semibold text-center'>Tech stack used: <span className='flex gap-3 items-center'>
                          
                        


                            </span></p>
                        </div>
                    </div>
                </motion.a>

            <motion.a className='w-full lg:w-[45%]  h-auto md:h-[520px] min-h-[480px] flex flex-col justify-between backdrop-blur-md border-5 border-[#111827] hover:border-[#2563EB]  shadow-xl rounded-2xl p-4 transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group'
                href='https://lakbayph.vercel.app/'
                target='_blank' rel='noreferrer'
               variants={{
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x:-150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.2, ease: "easeOut"}}>
                
                    <div className='w-full rounded-xl overflow-hidden h-1/2 md:h-[52%]'>
                        <img src={Lakbay} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        LakbayPH
                        </h1>
                        <p className='font-semibold text-center'>LakbayPH is an open-source web app with an interactive map for exploring travel destinations across the Philippines.</p>
                        <div className=''>
                           <p className='font-semibold text-center'>Tech stack used: <span className='flex gap-3 items-center'>
                             
                          

                            </span></p>
                        </div>
                    </div>
            </motion.a>

                <motion.a className='w-full lg:w-[45%]  h-auto md:h-[520px] min-h-[480px] flex flex-col justify-between backdrop-blur-md border-5 border-[#111827] hover:border-[#2563EB]  shadow-xl rounded-2xl p-4 cursor-pointer transform transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl group'
                    variants={{
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x: 150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.2, ease: "easeOut"}}
               href='https://jamarket.vercel.app/' 
               target='_blank'
               rel='noreferrer'>
                
                    <div className='w-full rounded-xl overflow-hidden h-1/2 md:h-[52%]'>
                        <img src={JAMarket} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        JAMarket
                        </h1>
                        <p className='font-semibold text-center'>JAMarket is an e-commerce platform for buying and selling musical instruments, allowing authorized users to register as sellers and manage listings.</p>
                        <div className=''>
                           <p className='font-semibold text-center'>Tech stack used: <span className='flex gap-3 items-center'>
                             

                            </span></p>
                        </div>
                    </div>
            </motion.a>
                       
                        
            </div> 
        </div>
      
    </section>
  )
}

export default Projects
