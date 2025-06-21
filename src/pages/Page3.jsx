import React from "react";

const Page3 = () => {
  return (
   <div className="p-10 w-full" id="about">
    <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white rounded-4xl ">
      <p className="font-[anzo] text-[5vw] place-self-center -mt-12 text-white ">About Me</p>
      <div className="rounded-4xl -mt-12 flex">
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
        <div className="w-4/5 mx-auto pb-5 md:w-1/2 border-slate-300 text-center pt-12 md:pt-24 md:text-start md:pb-0 ">
          <p className="text-[2vw] md:text-[3vw] lg:text-[2vw] font-[anzo]">Yo! I am Shashiraj </p>
          <p  className="text-[1.8vw] md:text-[2.5vw] lg:text-[1.8vw] font-[anzo]">I'm currently pursuing a Bachelor of Technology at Delhi Technological University (DTU), with an expected graduation in 2028. With a strong foundation in the MERN stack—MongoDB, Express.js, React, and Node.js—I am passionate about building scalable web applications and delivering clean, efficient code. I'm eager to contribute to impactful projects while continuously learning and growing in a collaborative, fast-paced environment.</p>
        </div>
      </div>
      
    </div>
   </div>
  );
};

export default Page3;
