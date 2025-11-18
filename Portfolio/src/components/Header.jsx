import React, { useEffect, useState } from 'react'
import HeaderTop from './HeaderTop'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, 
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Header = () => {

    const [lastScroll, setLastScroll] = useState(0);
    const [show, setShow] = useState(false);
    
    useEffect(() => {
    const handleScroll = () => {
            const currentScroll = window.scrollY;
            if(currentScroll > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
            setLastScroll(currentScroll)
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll)
    }, [lastScroll])

  return (
    <motion.section className='w-full h-[100px] fixed top-0 z-50 bg-[#2563EB]' 
        animate={{ y: show ? 0 : -120 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}>
        <div className='w-full bg-[#2563EB] h-[100px] '>
            <div className='w-full h-[100px] flex justify-between px-50 py-5'>
                <div  className='flex w-[50%] gap-8 items-center' >
          <a href="" className='text-2xl font-extrabold text-[#F9FAFB] hover:text-[#1F1F1F] duration-100 ease-in-out' >
            About Me
          </a>
          <a href="" className='text-2xl font-extrabold text-[#F9FAFB] hover:text-[#1F1F1F] duration-100 ease-in-out ' >
            Projects
          </a>
          <a href="" className='text-2xl font-extrabold text-[#F9FAFB] hover:text-[#1F1F1F] duration-100 ease-in-out'>
            Skills/Tech Stacks
          </a>
        </div>
        <div className='border p-3 bg-[#1F1F1F] border-[#F9FAFB] rounded-sm header-btn-hover-contact'>
          <a href="" className='text-2xl font-extrabold text-[#F9FAFB]' >
            Contact Me
          </a>
        </div>
      </div>
        </div>
        {!show &&  <HeaderTop /> }
    {!show &&
      <div className='w-full h-[100px] flex justify-between px-50 py-5'>
        <motion.div
          className='flex w-[50%] gap-8'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a href="" className='text-2xl font-extrabold text-[#1F1F1F] header-btn-hover' variants={itemVariants}>
            About Me
          </motion.a>
          <motion.a href="" className='text-2xl font-extrabold text-[#1F1F1F] header-btn-hover' variants={itemVariants}>
            Projects
          </motion.a>
          <motion.a href="" className='text-2xl font-extrabold text-[#1F1F1F] header-btn-hover' variants={itemVariants}>
            Skills/Tech Stacks
          </motion.a>
        </motion.div>
        <motion.div className='border p-3 bg-[#2563EB] border-[#F9FAFB] rounded-sm header-btn-hover-contact'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut"}}>
          <motion.a href="" className='text-2xl font-extrabold text-[#F9FAFB]' >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
}
   
     
    </motion.section>
  )
}

export default Header
