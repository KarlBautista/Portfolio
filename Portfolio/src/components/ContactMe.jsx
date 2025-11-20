import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
const ContactMe = ({ contactMeRef }) => {

    const controls = useAnimation();
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.3
    })
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls])

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <section className='w-full bg-[#0b0f19] border-t-5 flex justify-center py-8 px-4' ref={contactMeRef}>
                <motion.div
                    className='w-full max-w-2xl shadow-xl border-2 border-[#F9FAFB] rounded-lg bg-[#0b0f19]'
                    ref={inViewRef}
                    variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 150}}}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.3, ease: "easeOut"}}
                >
                        <div className='px-6 md:px-10 py-6'>
                            <h2 className='text-3xl font-extrabold text-[#F9FAFB]'>Contact Me</h2>
                            <p className='mt-2 text-sm text-[#E5E7EB]'>Have a project or just want to say hi? Send me a message and I&apos;ll get back to you.</p>

                            <form onSubmit={handleOnSubmit} className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <label className='flex flex-col gap-2'>
                                    <span className='text-sm font-medium text-[#F9FAFB]'>Name</span>
                                    <input type='text' name='name' required className='w-full bg-[#F9FAFB] text-black px-4 py-2 rounded-md' />
                                </label>

                                <label className='flex flex-col gap-2'>
                                    <span className='text-sm font-medium text-[#F9FAFB]'>Email</span>
                                    <input type='email' name='email' required className='w-full bg-[#F9FAFB] text-black px-4 py-2 rounded-md' />
                                </label>

                                <label className='md:col-span-2 flex flex-col gap-2'>
                                    <span className='text-sm font-medium text-[#F9FAFB]'>Message</span>
                                    <textarea name='message' id='message' rows={6} required className='w-full bg-[#F9FAFB] text-black px-4 py-3 rounded-md resize-none'></textarea>
                                </label>

                                <div className='md:col-span-2 flex flex-col md:flex-row items-center gap-4 justify-between mt-2'>
                                    <button type='submit' className='bg-[#2563EB] px-6 py-2 text-[#F9FAFB] font-semibold rounded-md w-full md:w-auto'>Send</button>
                                    <a href='mailto:your-email@example.com' className='text-sm font-semibold text-[#F9FAFB] underline'>Or send me an email</a>
                                </div>
                            </form>
                        </div>
                </motion.div>
        </section>
    )
}

export default ContactMe
