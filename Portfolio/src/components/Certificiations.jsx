import React from 'react'
import CertCarousel from './CertCarousel'
const Certificiations = ({ certificationsRef }) => {
  return (
       <section className='w-full h-auto  flex justify-center bg-[#111827] py-10' ref={certificationsRef}> 
            <div className='w-[75%] h-full flex flex-col p-5 items-center gap-5'>
              <h1 className='text-3xl text-[#F9FAFB] font-extrabold'>Certifications</h1>
              <p className='text-2xl text-[#F9FAFB] font-extrabold text-center'>These certifications strengthen my foundation by validating my understanding of core web development concepts and practical skills in Javascript and responsive design.</p>
              <div className='w-full h-full flex justify-center items-center'>
                  <CertCarousel />
              </div>
            </div>
    </section>
  )
}

export default Certificiations
