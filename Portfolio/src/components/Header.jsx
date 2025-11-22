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

const Header = ({ heroRef, aboutMeRef, projectsRef, certificationsRef, contactMeRef }) => {

    const [lastScroll, setLastScroll] = useState(0);
    const [show, setShow] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    
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
      return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScroll]);

    const scrollToHero = () => {
        heroRef.current.scrollIntoView({ behavior: "smooth" })
    }

     const scrollToAboutMe = () => {
        aboutMeRef.current.scrollIntoView({ behavior: "smooth" })
    }

     const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({ behavior: "smooth" })
    }

     const scrollToCertifications = () => {
        certificationsRef.current.scrollIntoView({ behavior: "smooth" })
    }

     const scrollToContactMe = () => {
        contactMeRef.current.scrollIntoView({ behavior: "smooth" })
    }

    console.log(showSideBar);
    
  return (
    <>
    
      <div className='lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#2563EB] h-12 flex items-center justify-between px-4'>
        <div className='text-white font-extrabold'> </div>
        <button
          type='button'
          aria-label={showSideBar ? 'Close menu' : 'Open menu'}
          onClick={() => setShowSideBar((s) => !s)}
          className='w-10 h-10 bg-[#2563EB7] text-white rounded-md flex items-center justify-center z-50'
        >
          {showSideBar ? '✕' : '☰'}
        </button>
      </div>

    
      {showSideBar && (
        <div className='fixed inset-0 z-40 flex'>
      
          <div className='flex-1 bg-[#111827]/50' onClick={() => setShowSideBar(false)} aria-hidden />
     
          <aside className='w-64 h-full bg-[#111827] text-white p-6 flex flex-col gap-6'>
            <button type='button' aria-label='Close menu' onClick={() => setShowSideBar(false)} className='self-end text-2xl'>✕</button>
            <nav className='flex flex-col gap-4 mt-2'>
              <button type='button' onClick={() => { setShowSideBar(false); scrollToAboutMe(); }} className='text-lg text-left'>About Me</button>
              <button type='button' onClick={() => { setShowSideBar(false); scrollToProjects(); }} className='text-lg text-left'>Projects</button>
              <button type='button' onClick={() => { setShowSideBar(false); scrollToCertifications(); }} className='text-lg text-left'>Certifications</button>
              <button type='button' onClick={() => { setShowSideBar(false); scrollToContactMe(); }} className='text-lg text-left'>Contact Me</button>
            </nav>
          </aside>
        </div>
      )}

    <motion.section className='hidden lg:block md:fixed w-full h-[100px] top-0 z-50 bg-[#2563EB]'
        animate={{ y: show ? 0 : -120 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}>
         
        <div className='w-full bg-[#2563EB] h-[100px] '>
            <div className='w-full h-[100px] flex justify-between px-50 py-5'>
                <div  className='flex w-[50%] gap-8 items-center' >
          <a className='text-2xl font-extrabold text-[#F9FAFB] hover:text-[#1F1F1F] duration-100 ease-in-out cursor-pointer'
          onClick={() => scrollToAboutMe()} >
            About Me
          </a>
          <a className='text-2xl font-extrabold text-[#F9FAFB] hover:text-[#1F1F1F] duration-100 ease-in-out cursor-pointer '
          onClick={() => scrollToProjects()} >
            Projects
          </a>
          <a  className='text-2xl font-extrabold text-[#F9FAFB] hover:text-[#1F1F1F] duration-100 ease-in-out cursor-pointer'
          onClick={() => scrollToCertifications()}>
            Certifications
          </a>
        </div>
        <div className='border p-3 bg-[#1F1F1F] border-[#F9FAFB] rounded-sm header-btn-hover-contact'>
          <a className='text-2xl font-extrabold text-[#F9FAFB] cursor-pointer' 
          onClick={() => scrollToContactMe()}>
            Contact Me
          </a>
        </div>
      </div>
        </div>
        {!show &&  <HeaderTop /> }
    {!show &&
      <div className='w-full h-[100px] hidden lg:flex justify-between px-50 py-5'>
        <motion.div
          className='flex w-[50%] gap-8'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a  className='text-2xl font-extrabold text-[#1F1F1F] header-btn-hover cursor-pointer' variants={itemVariants}
          onClick={() => scrollToAboutMe()}>
            About Me
          </motion.a>
          <motion.a className='text-2xl font-extrabold text-[#1F1F1F] header-btn-hover cursor-pointer' variants={itemVariants}
          onClick={() => scrollToProjects()}>
            Projects
          </motion.a>
          <motion.a className='text-2xl font-extrabold text-[#1F1F1F] header-btn-hover cursor-pointer' variants={itemVariants}
          onClick={() => scrollToCertifications()}>
            Certifications
          </motion.a>
        </motion.div>
        <motion.div className='border p-3 bg-[#2563EB] border-[#F9FAFB] rounded-sm header-btn-hover-contact'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut"}}>
          <motion.a className='text-2xl font-extrabold text-[#F9FAFB] cursor-pointer' 
          onClick={() => scrollToContactMe()}>
            Contact Me
          </motion.a>
        </motion.div>
      </div>
}
   
     
    </motion.section>
    </>
  )
}

export default Header
