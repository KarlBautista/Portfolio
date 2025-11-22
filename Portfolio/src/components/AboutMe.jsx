import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const AboutMe = ({ aboutMeRef }) => {

    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.3,
    })

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } 
    }, [inView, controls])


    return (
        <section className='w-full  min-h-[65vh] py-10 md:min-h-[70vh] bg-[#111827] flex justify-center scroll-mt-60 cursor-default' ref={aboutMeRef}>
                <motion.div className='w-full md:w-[60%] h-full md:py-16 p-6 md:px-0 flex flex-col gap-6 items-center justify-center' 
         ref={inViewRef}
        variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}>
            <h1 className='text-2xl md:text-4xl text-[#F9FAFB] font-extrabold'>About Me</h1>
            <div className='w-full h-auto'>
                <p className='text-[14px] md:text-2xl text-[#F9FAFB] font-medium text-center '>
                I’m a 4th-year Bachelor of Science in Information Technology student at TUP-Manila, consistently striving for academic excellence. I have a strong passion for creating dynamic and interactive web applications that provide real value to users. I specialize in building websites using React, JavaScript, Tailwind CSS, and Express, and I enjoy tackling complex problems, learning new technologies, and turning ideas into functional projects. Throughout my studies, I’ve focused on honing both my technical skills and my ability to think critically to deliver high-quality solutions.
                </p>
                <br />
                <p className='text-[14px] md:text-2xl text-[#F9FAFB] font-medium text-center'>
                       Beyond coding, I enjoy exploring tech trends, experimenting with personal projects, and expanding my knowledge of web development. I also like playing guitar and reading, which help me stay creative and inspired. I thrive in collaborative environments and value teamwork, as I believe great projects are built when diverse ideas come together. My goal is to continue learning, growing as a developer, and creating applications that make a meaningful impact.
                </p>
            </div>
        </motion.div>

    </section>
  )
}

export default AboutMe
