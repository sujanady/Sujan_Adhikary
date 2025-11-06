import { useState } from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Projects from './components/Projects'
import About from './About'
import Skills from './components/Skills'

function App() {

  return (
    <>
      < Navbar />
      <Body />
      <About />
      <Projects />
      <Skills/>

    </>
  )
}

export default App
