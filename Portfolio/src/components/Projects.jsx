import React from 'react'
import RecipeFinder from "../assets/RecipeFinder2.png"
const Projects = () => {
  return (
    <section className='w-full h-[50vh] bg-[#F9FAFB] flex justify-center'>
        <div className='w-[70%] h-full'>
            <h1 className='text-4xl p-5 font-extrabold text-[#2563EB]'>Projects</h1>
            <div className=' w-full h-full flex flex-wrap gap-5 justify-center'>

               <div className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'>
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
                </div>
                

                  <div className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'>
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
                </div>

                  <div className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'>
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
                </div>

                  <div className='w-[45%] h-full backdrop-blur-md border-5 shadow-xl rounded-2xl p-4'>
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
                </div>
                       
                        
            </div> 
        </div>
      
    </section>
  )
}

export default Projects
