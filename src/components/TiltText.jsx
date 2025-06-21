import React from 'react'
import TypewriterText from './TypeWriterText'

const TiltText = () => {
  return (
    <div className='w-[80vw] md:w-[63vw] mt-32 overflow-hidden' >
    <h1 className='text-[9vw] md:text-[7vw] xl:leading-[7vw] leading-[10vw] font-[anzo]'>I AM <br/> <span className='text-blue-400'><TypewriterText words={['MERN STACK', 'WORDPRESS', 'SHOPIFY', 'WIXSTUDIO','WOOCOMMERCE']} /></span></h1>
      <h1 className='text-[9vw] md:text-[7vw] xl:leading-[7vw] font-[anzo] leading-[10vw]'>WEB DEVELOPER</h1>
    </div>
  )
}

export default TiltText
