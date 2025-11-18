import React from 'react'
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
  return (
    <section className='w-full h-[100px] '>
      <HeaderTop />
      <div className='w-full h-[100px] flex justify-between px-50 py-5'>
        <motion.div
          className='flex w-[50%] gap-8'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a href="" className='text-2xl font-extrabold text-[#1F1F1F]' variants={itemVariants}>
            About Me
          </motion.a>
          <motion.a href="" className='text-2xl font-extrabold text-[#1F1F1F]' variants={itemVariants}>
            Projects
          </motion.a>
          <motion.a href="" className='text-2xl font-extrabold text-[#1F1F1F]' variants={itemVariants}>
            Skills/Tech Stacks
          </motion.a>
        </motion.div>
        <motion.div className='border p-3 bg-[#2563EB] border-[#F9FAFB] rounded-sm'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: "easeOut"}}>
          <motion.a href="" className='text-2xl font-extrabold text-[#F9FAFB]' >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Header
