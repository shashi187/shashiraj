import React, { useRef, useState } from 'react'
import TiltText from '../components/TiltText'
import BottomText from '../components/BottomText'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Page1 = () => {
  const tiltref = useRef(null);
  const [xVal,setXVal] = useState(0);
  const [yVal,setYVal] = useState(0);
  const mouseMoving = (e)=> {
    
    setXVal((e.clientX - tiltref.current.getBoundingClientRect().x - tiltref.current.getBoundingClientRect().width / 2 + 150)/20);
    setYVal(-(e.clientY - tiltref.current.getBoundingClientRect().y - tiltref.current.getBoundingClientRect().width / 2 + 300)/10);
    
  }
  useGSAP(function(){
    gsap.to(tiltref.current,{
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: 'power4.out',
    })
  },[xVal, yVal])
  return (
    <div onMouseMove={(e)=>{mouseMoving(e)}} className='md:h-screen p-5 bg-white overflow-hidden' id='home' >
        <div className='bg-cover p-8 shadow-xl flex rounded-4xl shadow-gray-400 h-full w-full bg-[url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80)]'>
          <div>
            <TiltText />
            <BottomText />
          </div>
          <div ref={tiltref} id='tilt' className='hidden md:block'>
            <img className='relative md:h-[50vh] md:w-[30vw] md:top-28 lg:top-36' src="/person.webp" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Page1
