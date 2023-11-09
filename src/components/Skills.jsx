import React from 'react'

import bootstrap from '../assets/bootstrap.png';
import git from '../assets/git.png';
import css from '../assets/css.png';
import mysql from '../assets/mysql.png';
import node from '../assets/node.png';
import html from '../assets/html.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import mongo from '../assets/mongo.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png'
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inLine border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={html} alt ="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={css} alt ="CSS icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={javascript} alt ="JAVASCRIPT icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={react} alt ="REACT icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mongo} alt ="MONGO icon" />
                <p className='my-4'>mongoDB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={node} alt ="NODE icon" />
                <p className='my-4'>nodeJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={java} alt ="JAVA icon" />
                <p className='my-4'>JAVA</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={mysql} alt ="MYSQL icon" />
                <p className='my-4'>MySQL</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={bootstrap} alt ="BOOTSTRAP icon" />
                <p className='my-4'>BOOTSTRAP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={tailwind} alt ="TAILWIND icon" />
                <p className='my-4'>TAILWIND</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={git} alt ="GIT icon" />
                <p className='my-4'>GIT</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills