import React from "react";
import TypeWriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="flex items-center justify-between gap-10 p-50">
      <div className="flex-1">
        <p className="text-6xl font-medium mb-5">Full-Stack / Web Developer</p>

        <div className="min-h-[60px]">
          <TypeWriter
            options={{
              strings: [
                "<p class='font-light text-3xl'>Hi, I am <span class='font-bold text-slate-700 text-3xl'>Yethum Danith</span></p>",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              cursor: "", 
            }}
          />
        </div>

        <p className="mt-4 text-m text-slate-800 max-w-xl">
          A passionate Full-Stack Web Developer and lifelong learner who loves
          building clean, user-friendly, and impactful web applications. I enjoy
          turning ideas into reality through code and continuously exploring new
          technologies to grow as a developer.
        </p>

        <div className="flex gap-4 my-5">
          <button className="p-5 px-10 bg-slate-800 rounded-4xl text-slate-200 cursor-pointer hover:scale-102 duration-200 hover:text-slate-50">My Projects</button>
          <button className="p-5 px-10 bg-slate-800 rounded-4xl text-slate-200 cursor-pointer hover:scale-102 duration-200 hover:text-slate-50">Download CV</button>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src="/src/assets/boy.jpg"
          alt="boy"
          className="rounded-full w-80 h-80 object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;
