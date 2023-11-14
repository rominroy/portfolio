import React from 'react'
import wildscape from '../assets/wildscape.png'
import laura from '../assets/laura.png'
import portfolio from '../assets/portfolio.png'
import weather from '../assets/weather.png'
const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inLine border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
                </div>
            <div
             className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/*Grid Item*/}
                <div  style={{backgroundImage: `url(${wildscape})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                Bootstrap,JS,MERN stack Application
                        </span>
                            <div className='pt-8 text-center'>
                             <a href="https://wildscape.onrender.com">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href="https://github.com/rominroy/WildScape.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                            </div>
                    </div>
                </div>
                {/*Grid Item*/}
                <div  style={{backgroundImage: `url(${laura})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                HTML,CSS3,JS Application
                        </span>
                            <div className='pt-8 text-center'>
                             <a href="https://fantastic-croquembouche-345f9d.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href="https://github.com/rominroy/LauraEcom.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                            </div>
                    </div>
                </div>
                      {/*Grid Item*/}
                      <div  style={{backgroundImage: `url(${portfolio})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJs,Tailwind Application
                        </span>
                            <div className='pt-8 text-center'>
                             <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href="https://github.com/rominroy/portfolio.git">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                            </div>
                    </div>
                </div>
                {/*Grid Item*/}
                <div  style={{backgroundImage: `url(${weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/*hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                HTML,CSS,ReactJS Application
                        </span>
                            <div className='pt-8 text-center'>
                             <a href="https://mellifluous-bublanina-c39c1c.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                             </a>
                             <a href="https://github.com/rominroy/weatherApp">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                             </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
