import EdwinImg from "../assets/Edwin2Img.png";
import ForeverImg from "../assets/foreverImg2.png";
import QuickShowImg from "../assets/quickShowImg2.png";
import BloomWiseImg from "../assets/BloomWiseImg.png";

const ProjectCard = ({ limit }) => {
  const Projects = [
    {
      name: "Edwin Platform",
      description:
        "Developed an e-tutoring platform that connects students with tutors for live interactive learning sessions. Designed a database schema to support user roles like students, tutors, and admins. Integrated Zoom API for seamless online classes and AWS S3 for secure file storage, ensuring a smooth and reliable experience.",
      tech: [
        "NextJS",
        "Express JS",
        "Tailwind CSS",
        "Clerk Auth",
        "MySQL",
        "Sequilize",
        "Zoom API",
      ],
      link: "https://github.com/danith11/EDWin-web",
      image: EdwinImg,
    },
    {
      name: "Forever E-commerce",
      description:
        "An E commerce web site is an online platform that facilates the buying and selling of products or services over internet.It serves as a virtual market place for those individuals",
      tech: ["ReactJS", "ExpressJS", "Tailwind CSS", "MongoDB", "JWT"],
      link: "https://github.com/danith11/forever-ECommerce",
      image: ForeverImg,
    },
    {
      name: "QuickShow",
      description:
        "A user-friendly web application for booking movie tickets online. Browse movies, select showtimes, choose seats, and make secure payments with ease. Built with modern web technologies, this app offers a seamless experience for movie enthusiasts to plan their cinema visits effortlessly",
      tech: [
        "ReactJS",
        "ExpressJS",
        "Tailwind CSS",
        "TMDB API",
        "Clerk Auth",
        "MongoDB",
      ],
      link: "https://github.com/danith11/QuickShow",
      image: QuickShowImg,
    },
    {
      name: "BloomWise",
      description:
        "Developed an Android app connecting flower sellers and buyers. And the app is included with caring tips for flowers and plants. Users can search nearby flower nurseries",
      tech: ["Android SDK", "Android Studio", "Firebase", "Google Maps API"],
      link: "https://github.com/danith11/FlowerSellingAndCaringApp",
      image: BloomWiseImg,
    },
  ];

  const visibleProjects = limit ? Projects.slice(0, limit) : Projects;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      {visibleProjects.map((project, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
        >
          <div>
            <h3 className="text-2xl font-bold text-black mb-3">
              {project.name}
            </h3>
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
            />
          </div>

          <div className="absolute inset-0 bg-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
            <h3 className="text-2xl font-bold text-white mb-3">
              {project.name}
            </h3>

            <p className="text-sm text-gray-200 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-white underline hover:text-gray-300"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;

// import React from "react";

// const ProjectCard = ({ limit }) => {
// const Projects = [
//   {
//     name: "Edwin Platform",
//     description:
//       "Developed an e-tutoring platform that connects students with tutors for live interactive learning sessions. Designed a database schema to support user roles like students, tutors, and admins. Integrated Zoom API for seamless online classes and AWS S3 for secure file storage, ensuring a smooth and reliable experience.",
//     tech: [
//       "NextJS",
//       "Express JS",
//       "Tailwind CSS",
//       "Clerk Auth",
//       "MySQL",
//       "Sequilize",
//       "Zoom API",
//     ],
//     link: "https://github.com/danith11/EDWin-web",
//     image: "../assets/photography.jpg",
//   },
//   {
//     name: "Forever E-commerce",
//     description:
//       "An E commerce web site is an online platform that facilates the buying and selling of products or services over internet.It serves as a virtual market place for those individuals",
//     tech: ["ReactJS", "ExpressJS", "Tailwind CSS", "MongoDB", "JWT"],
//     link: "https://github.com/danith11/forever-ECommerce",
//     image: "../assets/photography.jpg",
//   },
//   {
//     name: "QuickShow",
//     description:
//       "A user-friendly web application for booking movie tickets online. Browse movies, select showtimes, choose seats, and make secure payments with ease. Built with modern web technologies, this app offers a seamless experience for movie enthusiasts to plan their cinema visits effortlessly",
//     tech: [
//       "ReactJS",
//       "ExpressJS",
//       "Tailwind CSS",
//       "TMDB API",
//       "Clerk Auth",
//       "MongoDB",
//     ],
//     link: "https://github.com/danith11/QuickShow",
//     image: "../assets/photography.jpg",
//   },
//   {
//     name: "BloomWise",
//     description:
//       "Developed an Android app connecting flower sellers and buyers. And the app is included with caring tips for flowers and plants. Users can search nearby flower nurseries",
//     tech: ["Android SDK", "Android Studio", "Firebase", "Google Maps API"],
//     link: "https://github.com/danith11/FlowerSellingAndCaringApp",
//     image: "../assets/photography.jpg",
//   },
// ];

//   const visibleProjects = limit ? Projects.slice(0, limit) : Projects;

//   return (
//     <div>
//       <div></div>
//       {visibleProjects.map((project, index) => (
//         <div
//           key={index}
//           className="justify-center items-center text-center flex flex-col gap-4 hover:shadow-2xl rounded-2xl p-10 duration-500 my-10 border-2 border-slate-300 hover:border-none"
//         >
//           <img
//             src={project.image}
//             alt={project.name}
//             className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//           />

//           <p className="text-2xl font-bold">{project.name}</p>
//           <p className="max-w-xl mx-auto text-lg font-extralight">
//             {project.description}
//           </p>
//           <ul className="list-none flex flex-wrap gap-2 justify-center items-center">
//             {project.tech.map((item, i) => (
//               <li
//                 key={i}
//                 className="border-2 p-2 border-slate-200 hover:shadow-2xl rounded-md"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//           <a href={project.link} className="text-slate-600 cursor-pointer">
//             View Project
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectCard;
