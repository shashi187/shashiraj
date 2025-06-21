import React,{useState} from 'react'
import Page1 from './pages/Page1'
import Header from './components/Header'
import Page2 from './pages/Page2'
import MouseFollower from './components/MouseFollower'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <>
      <div id='main' className=''>
        <MouseFollower>
          <Header />
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
        </MouseFollower>
      </div>
    </>
  )
}

export default App
