import React from 'react'

const about = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
     <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
         <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold'>
            <span className='inline-block border-b-4 border-pink-600'>About</span> 
            </p>
            </div> 
            <div></div> 
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi I'm Romin, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>What sets me apart is my commitment to delivering elegant and efficient solutions. I'm dedicated to producing clean, maintainable code and following best practices to create robust, scalable applications.
                         I'm a strong advocate for collaboration, and I thrive on teamwork, where I can both learn from experienced professionals and contribute my skills to bring projects to life.
                
                </p>
                </div>
             </div> 
        </div>
    </div> 
  )
}

export default about