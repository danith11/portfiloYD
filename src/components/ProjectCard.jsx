import React from "react";

const ProjectCard = () => {
  const Projects = [
    {
      name: "Edwin Platform",
      description:
        "Developed an e-tutoring platform that connects students with tutors for live interactive learning sessions. Designed a database schema to support user roles like students, tutors, and admins. Integrated Zoom API for seamless online classes and AWS S3 for secure file storage, ensuring a smooth and reliable experience.",
      tech: ["NextJS", "Express JS","Tailwind CSS","Clerk Auth","MySQL","Sequilize","Zoom API"], 
    },
  ];

  return (
    <div>
      {Projects.map((project, index) => (
        <div
          key={index}
          className="justify-center items-center text-center flex flex-col gap-4 hover:shadow-2xl rounded-2xl p-10 duration-200"
        >
          <p className="text-2xl font-bold">{project.name}</p>
          <p className="max-w-xl mx-auto text-lg font-extralight">{project.description}</p>
          <ul className="list-none flex gap-2 justify-center items-center">
            {project.tech.map((item, i) => (
              <li
                key={i}
                className="border-2 p-2 border-slate-200 hover:shadow-2xl rounded-md"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;

