import React from 'react'

const AboutMe = () => {
  return (
    <section className='w-full h-[50vh] bg-[#111827] flex justify-center '>
        <div className='w-[70%] h-full py-10 px-5 flex flex-col gap-5 items-center justify-center' >
            <h1 className='text-4xl text-[#F9FAFB] font-extrabold'>About Me</h1>
            <div className='w-full h-50'>
                <p className='text-2xl text-[#F9FAFB] font-bold '>I'm a 4th-year Bachelor of Science in Information Technology student 
                    from TUP-Manila, consistently achieving academic excellence, with a strong interest in creating dynamic websites. 
                    I specialize in building interactive web applications using React, JavaScript, Tailwind CSS, and Express. I enjoy problem-solving, learning new technologies, and developing projects that provide real value to users.
                </p>
            </div>
        </div>

    </section>
  )
}

export default AboutMe
