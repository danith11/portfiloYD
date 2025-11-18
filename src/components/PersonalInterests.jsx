import React from "react";
import photography from "../assets/photography.jpg";
import hike from "../assets/hike.jpg";
import music from "../assets/music.jpg";

const PersonalInterests = () => {
  const interests = [
    {
      name: "Photography",
      image: photography,
      description:
        "Capturing moments and perspectives through the lens. I specialize in landscape and street photography, always looking for unique compositions and lighting that tell a story",
    },
    {
      name: "Hiking",
      image: hike,
      description:
        "Exploring nature and challenging myself on various trails. There's something profoundly rewarding about reaching a summit and taking in the panoramic views after a challenging hike.",
    },
    {
      name: "Music",
      image: music,
      description:
        "Finding inspiration and relaxation through various genres. I enjoy creating playlists that match my mood and enhance productivity while coding or studying",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 mt-8">
      {interests.map((item, index) => (
        <div
          key={index}
          className="items-center text-center justify-center border border-slate-300 rounded-lg hover:shadow-2xl transition-all duration-500"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-60 object-cover rounded-t-lg"
          />

          <div className="p-4">
            <p className="text-lg font-medium">{item.name}</p>
            <p className="font-light mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalInterests;

// import React from "react";
// import photography from "../src/assets/photography.jpg";
// import hike from "../src/assets/hike.jpg";
// import music from "../src/assets/music.jpg";

// const PersonalInterests = () => {
//   const interests = [
//     {
//       name: "Photography",
//       image: photography,
//       description:
//         "Capturing moments and perspectives through the lens. I specialize in landscape and street photography, always looking for unique compositions and lighting that tell a story",
//     },
//     {
//       name: "Hiking",
//       image: hike,
//       description:
//         "Exploring nature and challenging myself on various trails. There's something profoundly rewarding about reaching a summit and taking in the panoramic views after a challenging hike.",
//     },
//     {
//       name: "Music",
//       image: music,
//       description:
//         "Finding inspiration and relaxation through various genres. I enjoy creating playlists that match my mood and enhance productivity while coding or studying",
//     },
//   ];
//   return (
//     <div className="flex flex-col md:flex-row gap-5 mt-8">
//       {interests.map((item, index) => (
//         <div
//           key={index}
//           className="items-center text-center justify-center border border-slate-300 rounded-lg hover:shadow-2xl transition-all duration-500"
//         >
//           <div>
//             <img
//               src={item.image}
//               alt=""
//               srcset=""
//               className="w-full h-60 object-cover rounded-tr-lg rounded-tl-lg"
//             />
//           </div>
//           <div>
//             <p className="text-lg font-medium mt-2"> {item.name}</p>
//             <p className="font-light mt-2">{item.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PersonalInterests;
