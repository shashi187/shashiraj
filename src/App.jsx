import React,{useState} from 'react'
import Header from './components/Header'
import Page2 from './pages/Page2'
import MouseFollower from './components/MouseFollower'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import { Analytics } from "@vercel/analytics/react"
import Hero from './pages/Hero'
import About from './pages/About'
import BottomLogos from './components/BottomLogos'
import ParticleBackground from './components/ParticleBackground'
const App = () => {
  return (
    <>
      <div id='main' className='bg-black text-white'>
        <MouseFollower className=''>
          <ParticleBackground/>
          <Header className='' />
          <Hero className='' />
          <Page2 />
          <About/>
          <BottomLogos />
          {/* <Page3 /> */}
          <Page4 />
          {/* <P2/> */}
          <Page5 />
        </MouseFollower>
      </div>
    </>
  )
}

export default App
