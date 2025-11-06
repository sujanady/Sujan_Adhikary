import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-zinc-800 w-full h-[10vh] flex px-5 fixed'>
            <div className="left w-1/2 flex items-center">
                <div className="left text-2xl font-bold flex w-40  hover:bg-zinc-700 cursor-pointer rounded-xl  ">
                    <span className='text-green-600'>&lt;</span>  <span className='text-rose-800'>Dev</span> <span className='text-white'>Sujan</span> <span className='text-green-600'>/&gt;</span>
                </div>
            </div>
            <div className="flex right w-1/2 items-center">
                <ul className='flex text-white font-bold gap-20'>
                    <li className='cursor-pointer rounded-lg hover:ring-1 hover:ring-white text-center w-24 p-2 hover:bg-teal-400 hover:text-orange-500'>Home</li>
                    <li className='cursor-pointer rounded-lg hover:ring-1 hover:ring-white text-center w-24 p-2 hover:bg-teal-400 hover:text-orange-500'>About</li>
                    <li className='cursor-pointer rounded-lg hover:ring-1 hover:ring-white text-center w-24 p-2 hover:bg-teal-400 hover:text-orange-500'>Projects</li>
                    <li className='cursor-pointer rounded-lg hover:ring-1 hover:ring-white text-center w-24 p-2 hover:bg-teal-400 hover:text-orange-500'>Skills</li>
                    <li className='cursor-pointer rounded-lg hover:ring-1 hover:ring-white text-center w-20 p-2 hover:bg-teal-400 hover:text-orange-500'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
