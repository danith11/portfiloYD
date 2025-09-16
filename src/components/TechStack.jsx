import React from "react";

const TechStack = () => {
  const images = [
    "/src/assets/html.png",
    "/src/assets/css.png",
    "/src/assets/javascript.png",
    "/src/assets/react.png",
    "/src/assets/nextjs.png",
    "/src/assets/node.png",
    "/src/assets/python.png",
    "/src/assets/tailwind.png",
    "/src/assets/typescript.png",
    "/src/assets/mongodb.png",
  ];

  return (
    <div className="px-50 mt-30">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-4xl ">Tech Stack</p>
        <div className="flex gap-10 mt-10">
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
