import React from 'react'

const ContactMe = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <section className='w-full h-auto bg-[#0b0f19] border-t-5 flex justify-center py-5'>
        <div className='w-[50%] h-full shadow-xl border-5 border-[#F9FAFB] rounded-lg py-5'>
            <h1 className='text-3xl font-extrabold px-10 py-5 text-[#F9FAFB]'>Contact Me</h1>
            <form onSubmit={handleOnSubmit} className='px-10'>
                <div className='flex gap-5'>
                    <div className='w-[50%] h-[45%] flex  flex-col'>
                        <label htmlFor="name" className='font-semibold text-[#F9FAFB]'>Name</label>
                        <input type="text" name="name" className='bg-[#F9FAFB] w-full h-full px-6 py-2 rounded-sm' />
                    </div>

                    <div className='w-[50%] h-[45%] flex flex-col'>
                        <label htmlFor="email" className='text-[#F9FAFB] font-semibold'>Email</label>
                        <input type="email" name="email" className='bg-[#F9FAFB] w-full h-full px-6 py-2 rounded-sm' />
                    </div>
                </div>
               <div className='w-full h-[45%] flex flex-col'>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols={90} rows={7} className='border bg-[#F9FAFB] rounded-sm'></textarea>
               </div>
               <div className='w-full h-[10%] border flex gap-10 items-center mt-5'>
                    <button className='bg-[#2563EB] px-10 py-2 text-[#F9FAFB] font-semibold rounded-sm cursor-pointer'>Send</button>
                    <p className='font-semibold cursor-pointer text-[#F9FAFB]'>or send me through gmail</p>
               </div>

            </form>
        </div>
    </section>
  )
}

export default ContactMe
