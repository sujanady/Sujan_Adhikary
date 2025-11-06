import React from 'react'

import { useState, useEffect } from 'react';


const Body = () => {

  const [text, setText] = useState('Initial Text');
  const [index, setIndex] = useState(0);
  const textArray = [' Web ', ' Front-end Development', ' Back-end Development', ' Web Designing'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=' h-[100vh] w-[100%] bg-slate-600 flex'>
      <div className="left w-1/2 h-full flex justify-center items-center ">

        <div className=" left-box w-[80%] h-[65%]">
          <div className='text-5xl my-6 text-yellow-300'>Hii there,</div>

          <p className='text-5xl text-gray-100 my-6'>I'm Sujan Adhikary</p>
          <p className='text-5xl text-yellow-300 my-6'>Working at TCS</p>

          <div className="dynemic">
            <span className='text-4xl text-blue-500'>I'm into</span>

            <span className='text-4xl text-amber-400'> {textArray[index]}</span>
          </div>

          <div className="icons flex gap-10 mt-10">
            <p className='cursor-pointer hover:bg-slate-500 hover:ring-1 hover:ring-black rounded-2xl' > <a href="https://www.google.com" target='_blank' > <lord-icon style={{ width: '65px', height: '65px' }} src="https://cdn.lordicon.com/kozzgyfy.json" trigger="hover"> </lord-icon> </a> </p>
            <p style={{ width: '65px', height: '65px' }} className='flex justify-center items-center cursor-pointer hover:bg-slate-500 hover:ring-1 hover:ring-black rounded-2xl'>
              <a href="https://your-github-link.com" target='_blank'>
                <img style={{ width: '55px', height: '55px' }} src="public\github.png" alt="GitHub Link" />
              </a>
            </p>            <p className='cursor-pointer hover:bg-te-500 hover:ring-1 hover:ring-black rounded-2xl'>
              <a href="https://your-first-link.com" target='_blank'>
                <lord-icon style={{ width: '65px', height: '65px' }} src="https://cdn.lordicon.com/xowsaqcr.json" trigger="hover"></lord-icon>
              </a>
            </p>


            <p className='cursor-pointer hover:bg-slate-500 hover:ring-1 hover:ring-black rounded-2xl'>
              <a href="https://your-second-link.com" target='_blank'>
                <lord-icon style={{ width: '65px', height: '65px' }} src="https://cdn.lordicon.com/qrsdbrog.json" trigger="hover"></lord-icon>
              </a>
            </p>
          </div>

          <div className="mx-[22%] w-32 h-12 mt-8">
            <button className='font-bold bg-sky-500 text-amber-400 w-32 h-12 rounded-lg ring-1 ring-black '>Resume</button>
          </div>
        </div>
      </div>

      <div className="right w-1/2 flex justify-center items-center">
        <img className='' src="public\developer.svg" alt="" />
      </div>

    </div>
  )
}

export default Body
