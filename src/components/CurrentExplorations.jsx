import React from "react";
import { FaDatabase } from "react-icons/fa";
import { DiCodeBadge } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";

const CurrentExplorations = () => {
  const explorations = [
    {
      explore: "Full Stack Development",
      image: DiCodeBadge,
      description:
        "Building responsive and scalable web applications using modern frameworks and technologies, focusing on both frontend aesthetics and backend performance.",
    },
    {
      explore: "Databases",
      image: FaDatabase,
      description:
        "Working with SQL and NoSQL databases, data modeling, and optimization techniques to create efficient data storage solutions.",
    },
    {
      explore: "AI/ML",
      image: GiArtificialIntelligence,
      description:
        "Diving into machine learning algorithms, neural networks, and data analysis to create intelligent applications that solve real-world problems",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 mt-8">
      {explorations.map((item, index) => {
        const Icon = item.image;

        return (
          <div
            key={index}
            className="text-center items-center border border-slate-300 rounded-lg p-4 hover:shadow-2xl transition-all duration-500"
          >
            <Icon size={50} className="mx-auto my-3" />
            <p className="text-lg font-medium">{item.explore}</p>
            <p className="font-light mt-2">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CurrentExplorations;
