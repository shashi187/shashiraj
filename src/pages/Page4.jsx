import React from "react";

const Page4 = () => {
  return (
    <div id="projects">
      <h1 className="text-4xl font-[anzo] text-center mt-12">My Projects</h1>
      <div className="flex flex-wrap justify-center mt-8">
        <div className="w-1/4 flex justify-center items-center gap-2 flex-col bg-gray-100 p-4 m-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mt-4 font-[anzo]">Accelerates</h2>
            <p className="mt-2 ">accelerates.online is a simple, static website built for a digital agency to establish an online presence. Developed using only HTML, CSS, and JavaScript, it showcases the agency's vision, services, and contact information with a clean layout and responsive design. The goal was to create a fast, lightweight site without any frameworks — just solid fundamentals.</p>
            <a href="https://accelerates.online" target="blank"><button className="border px-2 rounded-xl bg-blue-300 font-[anzo] py-1">Check Out</button></a>
        </div>
        <div className="w-1/4 flex justify-center items-center gap-2 flex-col bg-gray-100 p-4 m-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mt-4 font-[anzo]">Task Assign</h2>
            <p className="mt-2 ">Employee Admin Task App is a React-based employee task management app where an admin can assign tasks to employees. The application features a simple UI for creating, viewing, and managing tasks. All task data is stored locally in the browser (localStorage), making it a lightweight solution without the need for a backend or database.</p>
            <a href="https://employee-admin-task-app.vercel.app" target="blank"><button className="border px-2 rounded-xl bg-blue-300 font-[anzo] py-1">Check Out</button></a>
        </div>
        {/* <div className="w-1/4 flex justify-center items-center flex-col bg-gray-100 p-4 m-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mt-4 font-[anzo]">Accelerates</h2>
            <p className="mt-2 ">accelerates.online is a simple, static website built for a digital agency to establish an online presence. Developed using only HTML, CSS, and JavaScript, it showcases the agency's vision, services, and contact information with a clean layout and responsive design. The goal was to create a fast, lightweight site without any frameworks — just solid fundamentals.</p>
            <a href="https://accelerates.online"><button className="border px-2 rounded-xl bg-blue-300 font-[anzo] py-1">Check Out</button></a>
        </div> */}
      </div>
    </div>
  );
};

export default Page4;
