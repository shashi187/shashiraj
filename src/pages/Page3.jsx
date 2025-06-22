import React from "react";

const Page3 = () => {
  return (
   <div className="md:p-10 w-full h-auto" id="about">
    <div className="bg-blue-400 h-full text-white ">
      <p className="font-[anzo] text-[7vw] text-center -mt-12 p-6 text-white ">About Me</p>
      <div className="rounded-4xl h-full flex">
        <svg className="hidden md:block w-[40%] lg:h-[80%]" width="700" height="700" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
          {/* <!-- Central pad: large rounded oval --> */}
          <image
            xlinkHref="/person.webp"
            x="72" y="90" width="120" height="120"
            clipPath="url(#pawClip)"
            preserveAspectRatio="xMidYMid slice"
          />
          <ellipse cx="120" cy="150" rx="60" ry="60" fill="none" stroke="pink" strokeWidth="5" />

          {/* <-- Toe beans: evenly spaced, with small gaps between each --> */}
          <circle cx="60" cy="85" r="18" fill="none" stroke="pink" strokeWidth="3" />
          <circle cx="95" cy="60" r="18" fill="transparent" stroke="pink" strokeWidth="3" />
          <circle cx="145" cy="60" r="18" fill="transparent" stroke="pink" strokeWidth="3" />
          <circle cx="180" cy="85" r="18" fill="transparent" stroke="pink" strokeWidth="3" />
        </svg>
        <div className="w-4/5 h-full mx-auto pb-5 md:w-1/2 border-slate-300 text-start text-gray-700 pt-2 md:pt-24 md:text-start md:pb-0 ">
          <p className="text-[5vw] md:text-[3vw] lg:text-[2vw] font-[anzo]">Yo! I am Shashiraj </p>
          <p  className="text-[4.5vw] md:text-[2.5vw] md:pb-5 lg:text-[1.8vw] font-[anzo]">
I'm passionate about building dynamic web applications with a strong backend and an intuitive frontend. I specialize in the MERN stack—MongoDB, Express.js, React, and Node.js—to craft scalable, efficient, and user-focused solutions.

I'm currently pursuing a Bachelor of Technology in Computer Science at Delhi Technological University (DTU), with an expected graduation in 2028. I'm always looking for ways to improve, explore new technologies, and take on exciting challenges.

<br/> <span className="font-bold text-black">Have an idea or project in mind? Let’s build something great together.</span></p>
        </div>
      </div>
      
    </div>
   </div>
  );
};

export default Page3;
