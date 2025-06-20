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
    <div className='absolute bottom-20 flex items-center justify-end gap-[40vw] w-auto'>
      <div className='flex justify-between items-center gap-10 w-[80vw] overflow-hidden'>
        <SiMongodb className='h-[8vh] w-[8vw]' />
        <SiExpress className='h-[8vh] w-[8vw]' />
        <FaReact className='h-[8vh] w-[8vw]' />
        <FaNode className='h-[8vh] w-[8vw]' /> 
        <FaWordpress className='h-[8vh] w-[8vw]' />
        <FaShopify className='h-[8vh] w-[8vw]' />
        <SiWix className='h-[8vh] w-[8vw]' />
        <SiWoocommerce className='h-[12vh] w-[12vw]' />
      </div>
    </div>
  )
}

export default BottomText
