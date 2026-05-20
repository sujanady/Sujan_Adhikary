import React from 'react'

function Project({ link, title, des }) {
  return (
    <div className="bg-black p-6 sm:p-8 flex flex-col h-full rounded-lg hover:ring-4 hover:ring-slate-500 transition-all duration-300">
      <div className="flex justify-center items-center gap-6 mb-8 mt-2">
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-400 font-semibold text-gray-900 h-12 w-28 rounded-md hover:ring-4 hover:ring-blue-300 transition-all cursor-pointer">
              Visit
            </button>
          </a>
        )}
        <img
          className="w-12 h-12 rounded-full bg-white ring-2 ring-white hover:opacity-80 transition-opacity cursor-pointer"
          src="/github.png"
          alt="github"
        />
      </div>

      <div className="flex flex-col flex-grow text-center justify-end">
        <p className="text-xl sm:text-2xl text-gray-200 font-bold mb-3">{title}</p>
        <p className="text-base sm:text-lg text-yellow-400">{des}</p>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="w-full min-h-screen py-16 bg-slate-600">
      <p className="text-3xl sm:text-4xl text-blue-400 text-center font-bold mb-12">
        My Work and Projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-[90%] max-w-7xl mx-auto">
        <Project 
          link="https://bookmark-page-tau.vercel.app/" 
          title="Bookmark Page | React, Tailwind" 
          des="To save all your favorite websites Link." 
        />
        <Project 
          link="https://to-do-list-rho-jet-67.vercel.app/" 
          title="To Do List | React, CSS" 
          des="Manage Your All To Do List." 
        />
        <Project 
          link="https://practice3-rouge.vercel.app/" 
          title="Password Manager | React, Tailwind CSS" 
          des="Manage Your favorite site's Username and password." 
        />
      </div>
    </div>
  )
}

export default Projects