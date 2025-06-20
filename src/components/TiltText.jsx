import React from 'react'
import TypewriterText from './TypeWriterText'

const TiltText = () => {
  return (
    <div className='mt-40 w-[50vw]' >
    <h1 className='text-[4.5vw] leading-[3vw] font-[anzo]'>I AM <span className='text-blue-400'><TypewriterText words={['MERN STACK', 'WORDPRESS', 'SHOPIFY', 'WIXSTUDIO','WOOCOMMERCE']} /></span></h1>
      <h1 className='text-[5.3vw] font-[anzo] leading-[7vw]'>WEB DEVELOPER</h1>
    </div>
  )
}

export default TiltText
