import React from 'react'
import { FaShopify } from "react-icons/fa";
import { SiWix } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";
const BottomText = () => {
  return (
    <div className='md:absolute md:bottom-20 flex items-center justify-end gap-[40vw] w-auto'>
      <div className='flex flex-col md:flex-row lg:mt-20 justify-center items-center gap-1 w-[80vw] overflow-hidden'>
        <div className='flex gap-5 md:gap-2 lg:gap-5'>
          <SiMongodb className='h-[12vh] w-[10vw] -ml-10 md:ml-0 md:h-[8vh] md:w-[8vw]' />
          <SiExpress className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />
          <FaReact className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />
          <FaNode className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />  
        </div> 
        <div className='flex gap-5 md:gap-2 lg:gap-5'>
          <FaWordpress className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />
          <FaShopify className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />
          <SiWix className='h-[12vh] w-[10vw] md:h-[8vh] md:w-[8vw]' />
          <SiWoocommerce className='h-[12vh] w-[18vw] md:h-[8vh] md:w-[12vw]' />
        </div>
      </div>
    </div>
  )
}

export default BottomText
