import React, { useEffect } from 'react'
import RecipeFinder from "../assets/RecipeFinder2.png"
import DefineIt from "../assets/DefineIt.png"
import Lakbay from "../assets/Lakbay.png"
import JAMarket from "../assets/JAMarket.png"
import { useInView } from 'react-intersection-observer'
import  { motion, useAnimation } from "framer-motion"
import ReactJS from "../assets/react.svg"

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
        <section id="projects" className='w-full h-auto bg-[#F9FAFB] flex justify-center scroll-mt-24' ref={projectsRef}>
        <div className='w-[70%] h-full'>
            <motion.h1 className='text-4xl p-5 font-extrabold text-[#2563EB]'
            variants={{ hidden: { opacity: 0, y: -150 }, visible: { opacity: 1, y: 0}}}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.6, ease: "easeOut"}}>Projects</motion.h1>
            
            <div className=' w-full h-full flex flex-wrap gap-5 justify-center' ref={inViewRef}>
               <motion.a className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4
               transform'
               href='https://recipefinder-gamma.vercel.app/'
               target='_blank'
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
                           <p className='font-semibold'>Tech stack used: <span className='flex gap-3 items-center'>
                            <img src="https://cdn.simpleicons.org/react/61DAFB" alt="" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" title="Tailwind CSS" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/express/000000" alt="Express" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/supabase/3ECF8E" alt="Supabase" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" className="w-[30px] h-[30px]" />
                            </span></p>
                        </div>
                    </div>
                </motion.a>
                

            <motion.a className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'
               href='https://defineit-nu.vercel.app/'
               target='_blank'
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
                    <div className='flex flex-col gap-5 items-center'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        DefineIt
                        </h1>
                        <p className='font-semibold'>DefineIt is an open-source web app that helps users look up word meanings, synonyms, and antonyms.</p>
                        <div className=''>
                           <p className='font-semibold'>Tech stack used: <span className='flex gap-3 items-center'>
                                   <img src="https://cdn.simpleicons.org/react/61DAFB" alt="" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" title="Tailwind CSS" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/express/000000" alt="Express" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/supabase/3ECF8E" alt="Supabase" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" className="w-[30px] h-[30px]" />


                            </span></p>
                        </div>
                    </div>
                </motion.a>

            <motion.a className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'
                href='https://lakbayph.vercel.app/'
                target='_blank'
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
                    <div className='flex flex-col gap-5 items-center'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        LakbayPH
                        </h1>
                        <p className='font-semibold'>LakbayPH is an open-source web app with an interactive map for exploring travel destinations across the Philippines.</p>
                        <div className=''>
                           <p className='font-semibold'>Tech stack used: <span className='flex gap-3 items-center'>
                                 <img src="https://cdn.simpleicons.org/react/61DAFB" alt="" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" title="Tailwind CSS" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/express/000000" alt="Express" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/supabase/3ECF8E" alt="Supabase" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" className="w-[30px] h-[30px]" />

                            </span></p>
                        </div>
                    </div>
            </motion.a>

            <motion.a className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4 cursor-pointer'
               variants={{
                    visible:  { opacity: 1, x:0 },
                    hidden: { opacity: 0, x: 150 }
               }}
               animate={controls}
               initial="hidden"
               transition={{ duration: 0.6, ease: "easeOut"}}>
                
                    <div className='w-full h-[50%] rounded-xl overflow-hidden'>
                        <img src={JAMarket} alt="" className='w-full h-full object-cover' />
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                        <h1 className='text-3xl font-extrabold text-center mt-5 text-[#111827]'>
                        JAMarket
                        </h1>
                        <p className='font-semibold'>JAMarket is an e-commerce platform for buying and selling musical instruments, allowing authorized users to register as sellers and manage listings.</p>
                        <div className=''>
                           <p className='font-semibold'>Tech stack used: <span className='flex gap-3 items-center'>
                                 <img src="https://cdn.simpleicons.org/react/61DAFB" alt="" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" title="JavaScript" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" title="Tailwind CSS" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/css3/1572B6" alt="CSS3" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/html5/E34F26" alt="HTML5" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/node.js/339933" alt="Node.js" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/express/000000" alt="Express" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/supabase/3ECF8E" alt="Supabase" className="w-[30px] h-[30px]" />
                            <img src="https://cdn.simpleicons.org/vite/646CFF" alt="Vite" className="w-[30px] h-[30px]" />

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
