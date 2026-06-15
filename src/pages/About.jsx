import React from 'react'
import { motion } from "motion/react"
const About = () => {
  const glows = [
    "-top-10 -left-10 w-[260px] h-[360px] blur-[120px] opacity-30",
    "bottom-10 right-10 w-[420px] h-[420px] blur-[140px] opacity-25 delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] blur-[100px] opacity-30"
  ]
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-content" id="about">
      <div className="absolute pointer-events-none inset-0">
        {glows.map((glow, index) => (
          <div key={index} className={`absolute ${glow} bg-gradient-to-r from-[#302b63] via-[#d46cdb] to-[#59053a] rounded-full `} />
        ))}
      </div>
        <div className="relative h-full z-10 px-5 lg:px-60 pt-12 lg:pt-20 flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* <motion.div className="relative w-100 h-50"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            >
              <img className="absolute inset-0" src="/profilePic.jpeg" alt="About" />
            </motion.div> */}
            <div className="flex flex-col gap-2">
              <h1 className='text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-900 font-bold tracking-tight'>Shashiraj</h1>
              <h2 className='text-2xl text-gray-300'>Full Stack Developer</h2>
              <p className='text-xl text-gray-400'>I love building modern web experiences. From crafting clean UIs with React to engineering robust backends with Node and MongoDB, I turn ideas into impactful solutions. I'm always exploring new technologies and pushing the boundaries of what the web can do.</p>
              <div className='grid max-w-xl grid-cols-2 sm:grid-cols-3 gap-4 mt-4'>
                <div className='flex flex-col px-8 py-1 gap-2 border border-slate-500 rounded-lg'>
                  <p className='text-sm font-medium text-center text-gray-500'>Experience</p>
                  <p className='text-lg text-center font-semibold'>1+ Year</p>
                </div>
                <div className='flex flex-col gap-2 px-8 py-1 border border-slate-500 rounded-lg'>
                  <p className='text-sm font-medium text-center text-gray-500'>Speciality</p>
                  <p className='text-lg text-center font-semibold'>Full Stack</p>
                </div>
                <div className='flex flex-col gap-2 px-8 py-1 border border-slate-500 rounded-lg'>
                  <p className='text-sm font-medium text-center text-gray-500'>Focus</p>
                  <p className='text-lg text-center font-semibold'>Performance & UX</p>
                </div>
              </div>
              <div className='flex gap-4 mt-6'>
                <a href="#projects" className='inline-flex bg-white text-black px-5 py-3 rounded-lg font-semibold transition hover:bg-gray-200'>
                  View Projects
                </a>
                <a href="#contact" className='inline-flex bg-black text-white border border-slate-500 transition px-5 py-3 rounded-lg font-semibold hover:bg-purple-600'>
                  Get in Touch
                </a>
              </div>
              <div className='flex flex-col'>
                <h1 className='text-4xl font-bold py-2 text-gray-300 text-start' >About Me</h1>
                <p className='text-lg text-gray-400 py-3'>I'm a third-year B.Tech student at DTU, passionate about full-stack development and modern web technologies. I love building real-world projects that solve meaningful problems. From sleek frontends to powerful backends, I enjoy every layer of the stack. Always learning, always building, and always hungry for the next challenge.</p>
              </div>
            </div>
          </div>

        </div>
    </section>
  )
}

export default About