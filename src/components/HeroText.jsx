import React from 'react'
import TypewriterText from './TypeWriterText'
import { FiDownload } from "react-icons/fi";
import resume from '../assets/ShashirajWD.pdf'
const HeroText = () => {
  return (
    <div className='overflow-hidden' >
      <h1 className='text-[4vw] md:text-[2vw] xl:leading-[3vw] leading-[10vw] font-[syne]'> FULL STACK DEVELOPER <span className=''><br /></span><span><TypewriterText words={['MongoDB','Express.js','React','NodeJS','TypeScript', 'NextJS','NodeJS','NestJS','WordPress','Shopify']} /></span></h1>
      <h2 className='text-[1.4vw] md:text-[1.4vw] my-8 text-gray-400 font-[syne]'>Crafting seamless digital experiences with code and creativity.</h2>
      <a href={resume} download className='font-semibold my-6 px-4 rounded-lg hover:text-gray-200'>
        <FiDownload className='inline mr-2' />
        Resume
      </a>
    </div>
  )
}

export default HeroText
