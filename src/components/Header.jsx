import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { FaWhatsapp } from "react-icons/fa";
const Header = () => {
  return (
    <div className='w-full fixed z-10 px-28 py-14 flex justify-center items-center'>
      <div className='flex gap-6 text-gray-500 text-[4.2vw] md:text-[1.2vw] lg:text-[1.2vw] font-[anzo] bg-gray-300 px-3 py-1 md:px-2 md:py-1 rounded-xl'>
        <a href="#home" className='hover:text-black'>Home</a>
        <a href="#about" className='hover:text-black'>About</a>
        <a href="#projects" className='hover:text-black'>Projects</a>
        <a href="#contact" className='hover:text-black'>Contact</a>
      </div>
      <div className='fixed bottom-5 md:block md:top-10 md:left-240 flex w-full justify-between px-6 '>
        <a href="https://github.com/shashi187" target="_blank" rel="noopener noreferrer">
          <i className="ri-github-fill text-gray-500 hover:text-black text-[10vw] md:text-[3vw]"></i>
        </a>
        <a href="https://wa.me/918851470477" target="_blank" rel="noopener noreferrer">
        <i className="ri-whatsapp-line text-gray-500 hover:text-black ml-5 text-[10vw] md:text-[3vw]"></i>
        </a>
      </div>
    </div>
  )
}

export default Header
