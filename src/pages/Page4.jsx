import React from "react";

const Page4 = () => {
  return (
    <div id="projects">
      <h1 className="text-4xl font-[anzo] text-center mt-12">My Projects</h1>
      <div className="md:mt-8 md:p-8 w-full md:flex md:gap-5 lg:justify-around">
        <div className="lg:w-1/3 flex justify-center items-center gap-2 flex-col bg-gray-100 p-4 m-1 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mt-4 font-[anzo]">Accelerates</h2>
            <p className="mt-2 ">accelerates.online is a simple, static website built for a digital agency to establish an online presence. It showcases the agency's vision, services, and contact information with a clean layout and responsive design. The goal was to create a fast, lightweight site with just React framework — only solid fundamentals.</p>
            <div className="flex gap-2 mt-4">
              <a href="https://accelerates.online" target="blank"><button className="border px-2 rounded-xl bg-green-400 font-[anzo] py-1">View Live</button></a>
              <a href="https://github.com/shashi187/accelerates" target="blank"><button className="border px-2 rounded-xl bg-blue-400 font-[anzo] py-1">View Code</button></a>
            </div>
          </div>
        <div className="lg:w-1/3 flex justify-center items-center gap-2 flex-col bg-gray-100 p-4 m-1 mt-5 md:mt-0 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mt-4 font-[anzo]">Task Assign</h2>
            <p className="mt-2 ">Employee Admin Task App is a React-based employee task management app where an admin can assign tasks to employees. The application features a simple UI for creating, viewing, and managing tasks. All task data is stored locally in the browser (localStorage), making it a lightweight solution without the need for a backend or database.</p>
            <div className="flex gap-2 mt-4">
              <a href="https://employee-admin-task-app.vercel.app" target="blank"><button className="border px-2 rounded-xl bg-green-400 font-[anzo] py-1">View Live</button></a>
              <a href="https://github.com/shashi187/employeeadmintaskapp" target="blank"><button className="border px-2 rounded-xl bg-blue-400 font-[anzo] py-1">View Code</button></a>
            </div>
        </div>
        <div className="lg:w-1/3 flex justify-center items-center gap-2 flex-col bg-gray-100 p-4 m-1 mt-5 md:mt-0 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mt-4 font-[anzo]">LeaderBoard Web</h2>
            <p className="mt-2 ">Leaderboard Web: A Competitive Point Tracker - is a dynamic, single-page web application designed to foster friendly competition and track user performance. It allows users to be added to a system where they can claim random points to climb a real-time, global leaderboard. The goal was to build a basic full stack web app using React (VIte) and a robust express.js + node.js backend to manage user data, point randomization logic, and persistent ranking.</p>
            <div className="flex gap-2 mt-4">
              <a href="https://leaderboard-frontend-amber.vercel.app/" target="blank"><button className="border px-2 rounded-xl bg-green-400 font-[anzo] py-1">View Live</button></a>
              <a href="https://github.com/shashi187/leaderboardFrontend" target="blank"><button className="border px-2 rounded-xl bg-blue-400 font-[anzo] py-1">View Code</button></a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
