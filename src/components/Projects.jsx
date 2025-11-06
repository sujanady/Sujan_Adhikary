import React from 'react'
import { LinkPreview } from '@dhaiwat10/react-link-preview';


function Project({link, title, des}) {
  return (
    <>
      <div className="bg-black h-[40vh] p-5 hover:ring-8 hover:ring-slate-500">
        <div className="buttons flex justify-center items-center gap-10">
         <a href={link} ><button className='bg-blue-400 h-14 w-32 rounded-lg hover:ring-8 hover:ring-gray-900 cursor-pointer' >Visit</button></a> 
          <img className='w-16 rounded-full bg-white ring-4 ring-white hover:bg-gray-800 cursor-pointer' src="public\github.png" alt="github" />
        </div>

        <div className="content">
          <p className='text-2xl text-gray-200 font-bold mt-10'>{title}</p>
          <p className='text-xl text-yellow-400'>{des}</p>
        </div>

      </div>
    </>
  )
}

const Projects = () => {
  return (
    <div className=' h-[60vh] w-[100%] mx-auto bg-slate-600'>
      <p className='text-3xl text-blue-400 h-[8vh] text-center font-bold'>My Work and Projects</p>
      <div className="grid grid-cols-3 gap-12 w-[90%] mx-auto">
        <div > <a href='https://bookmark-page-tau.vercel.app/'>< Project title="Bookmark Page | React, Tailwind" des='To save all your favorite websites Link.'  /></a> </div>
        <div><a href='https://to-do-list-rho-jet-67.vercel.app/'><Project title="To Do List | React, CSS" des="Manage Your All To Do List." /></a></div>
        <div><Project title="Password Manager | React, Tailwind CSS" link='https://practice3-rouge.vercel.app/' des="Manage Your fovorite site's Username and password." /></div>
      </div>


    </div>
  )
}

export default Projects
