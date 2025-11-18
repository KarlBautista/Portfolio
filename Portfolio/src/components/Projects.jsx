import React from 'react'
import RecipeFinder from "../assets/RecipeFinder.png"
const Projects = () => {
  return (
    <section className='w-full h-[50vh] bg-[#F9FAFB] flex justify-center'>
        <div className='w-[70%] h-full'>
            <h1 className='text-4xl p-5 font-extrabold '>Projects</h1>
            <div className=' w-full h-full flex flex-wrap gap-5 justify-center'>

                <div className='w-[45%] h-full shadow-lg rounded-md border-[] p-5'>
                    <div className='w-full h-[50%]'>
                        <img src={RecipeFinder} alt="" className='w-full h-full object-cover border'/>
                    </div>
                    <div></div>
                </div>
                    <div className='w-[45%]  h-full border'></div>
                        <div className='w-[45%]  h-full border'></div>
                       
                        
            </div> 
        </div>
      
    </section>
  )
}

export default Projects
