import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className='w-full fixed z-100 px-28 pt-10 pb-14 flex justify-center items-center'>
      <div className='flex gap-6 text-gray-500 text-[4.2vw] md:text-[1.2vw] lg:text-[1.2vw] font-[anzo] bg-gray-300 px-3 py-1 md:px-2 md:py-1 rounded-xl'>
        <a href="#home" className='hover:text-purple-400'>Home</a>
        <a href="#about" className='hover:text-purple-400'>About</a>
        <a href="#projects" className='hover:text-purple-400'>Projects</a>
        <a href="#contact" className='hover:text-purple-400'>Contact</a>
      </div>
      <div className='fixed bottom-5 md:block md:top-6 md:left-240 flex w-full justify-between px-6 '>
        <a href="https://github.com/shashi187" target="_blank" rel="noopener noreferrer">
          <i className="ri-github-fill text-gray-500 hover:text-purple-400 text-[10vw] md:text-[3vw]"></i>
        </a>
        <a href="https://linkedin.com/in/shashi187" target="_blank" rel="noopener noreferrer">
          <i className="ri-linkedin-box-fill text-gray-500 hover:text-purple-400 ml-5 text-[10vw] md:text-[3vw]"></i>
        </a>
      </div>
    </div>
  )
}

export default Header
