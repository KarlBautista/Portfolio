import React from 'react'
import techContainer from './techContainer'
const Skills = ({ skillsRef }) => {
  return (
        <section className='w-full h-[70vh]  flex justify-center' ref={skillsRef}> 
            <div className='w-[75%] h-full flex flex-col p-5'>
              <h1 className='text-3xl text-[#2563EB] font-extrabold'>Skills/Tech Stacks</h1>
              <div className=''>
                  <h1>Languages</h1>
                  
              </div>
            </div>
        </section>
  )
}

export default Skills
