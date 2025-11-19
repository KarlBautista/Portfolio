import React from 'react'

const techContainer = ({ img, name }) => {
  return (
    <div className='w-[100px] h-[50px] flex items-center p-3' >
        <div className='w-[50%] h-full '>
            <img src={img} alt="image" className='w-full h-full object-cover' />
        </div>
        <div className='w-[50%] h-full'>
            <h1>{name}</h1>
        </div>
    </div>
  )
}

export default techContainer
