import React from "react";
import TypeWriter from "typewriter-effect";
import BlurCircle from "./BlurCircle";

const Home = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 md:px-16 lg:px-36 pt-28 md:pt-36">
      <BlurCircle top="150px" left="100px" />

      <div className="lg:flex-1">
        <p className="text-4xl md:text-6xl font-medium mb-5">
          Full-Stack / Web Developer
        </p>

        <div className="min-h-[60px]">
          <TypeWriter
            options={{
              strings: [
                "<p class='font-light text-2xl md:text-3xl'>Hi, I am <span class='font-bold text-slate-700 text-2xl md:text-3xl'>Yethum Danith</span></p>",
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

        <div className="flex flex-col sm:flex-row gap-4 my-5">
          <button className="py-3 px-6 bg-slate-800 rounded-xl text-slate-200 cursor-pointer hover:scale-102 duration-200 hover:text-slate-50">
            My Projects
          </button>
          <button className="py-3 px-6 bg-slate-800 rounded-xl text-slate-200 cursor-pointer hover:scale-102 duration-200 hover:text-slate-50">
            Download CV
          </button>
        </div>
      </div>

      <div className="lg:flex-1 flex justify-center items-center">
        <img
          src="/src/assets/boy.jpeg"
          alt="boy"
          className="rounded-full w-72 h-72 md:w-80 md:h-80 object-cover shadow-lg"
        />
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import TypeWriter from "typewriter-effect";
// import BlurCircle from "./BlurCircle";

// const Home = () => {
//   return (
//     <div className="flex items-center justify-between gap-10 px-50 pt-50">
//       <BlurCircle top="150px" left="100px" />

//       <div className="flex-1">
//         <p className="text-6xl font-medium mb-5">Full-Stack / Web Developer</p>

//         <div className="min-h-[60px]">
//           <TypeWriter
//             options={{
//               strings: [
//                 "<p class='font-light text-3xl'>Hi, I am <span class='font-bold text-slate-700 text-3xl'>Yethum Danith</span></p>",
//               ],
//               autoStart: true,
//               loop: true,
//               delay: 75,
//               cursor: "",
//             }}
//           />
//         </div>

//         <p className="mt-4 text-m text-slate-800 max-w-xl">
//           A passionate Full-Stack Web Developer and lifelong learner who loves
//           building clean, user-friendly, and impactful web applications. I enjoy
//           turning ideas into reality through code and continuously exploring new
//           technologies to grow as a developer.
//         </p>

//         <div className="flex gap-4 my-5">
//           <button className="p-5 px-10 bg-slate-800 rounded-4xl text-slate-200 cursor-pointer hover:scale-102 duration-200 hover:text-slate-50">
//             My Projects
//           </button>
//           <button className="p-5 px-10 bg-slate-800 rounded-4xl text-slate-200 cursor-pointer hover:scale-102 duration-200 hover:text-slate-50">
//             Download CV
//           </button>
//         </div>
//       </div>

//       <div className="flex-1 flex justify-center">
//         <img
//           src="/src/assets/boy.jpg"
//           alt="boy"
//           className="rounded-full w-80 h-80 object-cover shadow-lg"
//         />
//       </div>
//     </div>
//   );
// };

// export default Home;
