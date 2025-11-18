import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import ts from "../assets/typescript.png";
import mongo from "../assets/mongodb.png";

const TechStack = () => {
  const images = [
    html,
    css,
    js,
    reactLogo,
    nextjs,
    node,
    python,
    tailwind,
    ts,
    mongo,
  ];

  return (
    <div className="px-20 mt-30 mb-20">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-4xl">Tech Stack</p>
        <div className="flex flex-wrap gap-10 mt-10">
          {images.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`tech-${index}`}
              className="w-16 h-16 rounded-full hover:scale-105 transition duration-200 hover:shadow-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

// import React from "react";

// const TechStack = () => {
//   const images = [
//     "/src/assets/html.png",
//     "/src/assets/css.png",
//     "/src/assets/javascript.png",
//     "/src/assets/react.png",
//     "/src/assets/nextjs.png",
//     "/src/assets/node.png",
//     "/src/assets/python.png",
//     "/src/assets/tailwind.png",
//     "/src/assets/typescript.png",
//     "/src/assets/mongodb.png",
//   ];

//   return (
//     <div className="px-50 mt-30">
//       <div className="flex flex-col justify-center items-center">
//         <p className="font-bold text-4xl ">Tech Stack</p>
//         <div className="flex flex-wrap  gap-10 mt-10">
//           {images.map((item, index) => (
//             <img
//               key={index}
//               src={item}
//               alt={`tech-${index}`}
//               className="w-16 h-16 rounded-full hover:scale-105 transition duration-200 hover:shadow-2xl"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;
