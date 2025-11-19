import React from 'react'

const ContactMe = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <section className='w-full h-[70vh] bg-[#F9FAFB] flex justify-center py-10'>
        <div className='w-[50%] h-full shadow-xl'>
            <h1 className='text-3xl text-black font-extrabold p-10'>Contact Me</h1>
            <form onSubmit={handleOnSubmit} className='px-10'>
                <div className='flex gap-5'>
                    <div className='w-[50%] h-[45%] flex  flex-col'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className='border w-full h-full' />
                    </div>

                    <div className='w-[50%] h-[45%] flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className='border w-full h-full' />
                    </div>
                </div>
               <div className='w-full h-[45%] flex flex-col'>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols={90} rows={7} className='border'></textarea>
               </div>
               <div className='w-full h-[10%] border flex gap-10 items-center'>
                    <button className='bg-[#2563EB] px-10 py-2 text-[#F9FAFB] font-semibold rounded-sm cursor-pointer'>Send</button>
                    <p className='font-semibold cursor-pointer'>or send me through gmail</p>
               </div>

            </form>
        </div>
    </section>
  )
}

export default ContactMe
