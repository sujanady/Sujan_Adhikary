import React from 'react'

import { useState, useEffect } from 'react';


const Body = () => {

  const [text, setText] = useState('Initial Text');
  const [index, setIndex] = useState(0);
  const textArray = [' Web ', ' Front-end', ' Back-end', ' Web Designing'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 flex flex-col md:flex-row items-center justify-center px-10 overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <div className="w-[85%] max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-yellow-300 mb-4">Hi there, 👋</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 mb-4">I'm Sujan Adhikary</h1>
          <h3 className="text-3xl md:text-5xl font-semibold text-yellow-300 mb-6">Working at TCS</h3>

          {/* Dynamic text */}
          <div className="flex items-center gap-3 text-3xl md:text-4xl mb-10">
            <span className="text-blue-400 font-semibold">I'm into</span>
            <span className="text-amber-400 font-bold animate-pulse">{textArray[index]}</span>
          </div>

          {/* Icons */}
          <div className="flex gap-8 mt-8">
            <a
              href="https://www.google.com"
              target="_blank"
              className="hover:scale-110 transition-transform bg-slate-700/50 p-3 rounded-2xl ring-1 ring-slate-500 hover:ring-amber-400"
            >
              <lord-icon
                src="https://cdn.lordicon.com/kozzgyfy.json"
                trigger="hover"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
            </a>

            <a
              href="https://your-github-link.com"
              target="_blank"
              className="hover:scale-110 transition-transform bg-slate-700/50 p-3 rounded-2xl ring-1 ring-slate-500 hover:ring-amber-400 flex justify-center items-center"
            >
              <img
                src="/github.png"
                alt="GitHub"
                className="w-[45px] h-[45px] invert"
              />
            </a>

            <a
              href="https://your-first-link.com"
              target="_blank"
              className="hover:scale-110 transition-transform bg-slate-700/50 p-3 rounded-2xl ring-1 ring-slate-500 hover:ring-amber-400"
            >
              <lord-icon
                src="https://cdn.lordicon.com/xowsaqcr.json"
                trigger="hover"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
            </a>

            <a
              href="https://your-second-link.com"
              target="_blank"
              className="hover:scale-110 transition-transform bg-slate-700/50 p-3 rounded-2xl ring-1 ring-slate-500 hover:ring-amber-400"
            >
              <lord-icon
                src="https://cdn.lordicon.com/qrsdbrog.json"
                trigger="hover"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-10">
            <button className="font-bold bg-gradient-to-r from-sky-500 to-blue-600 text-amber-300 px-8 py-3 rounded-lg ring-1 ring-slate-400 hover:scale-105 hover:shadow-lg transition-all">
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <img
          src="/developer.svg"
          alt="Developer illustration"
          className="w-[80%] max-w-lg drop-shadow-[0_0_40px_rgba(56,189,248,0.3)] animate-float"
        />
      </div>
    </div>
  )
}

export default Body
