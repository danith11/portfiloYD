import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center px-6 md:px-16 lg:px-36 py-5">
        
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          className="font-bold text-2xl"
        >
          Yethum Danith
        </Link>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-10 items-center">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => scrollTo(0, 0)}
              className="text-black hover:text-slate-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="sm:hidden flex flex-col bg-white shadow-md px-6 pb-4 gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => {
                scrollTo(0, 0);
                setIsOpen(false);
              }}
              className="text-black text-lg py-2 border-b hover:text-slate-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Me", path: "/about" },
//     { name: "Projects", path: "/projects" },
//     { name: "Contact", path: "/contact" },
//   ];
//   return (
//     <div className="flex justify-between z-999 overflow-hidden  sm:fixed w-full items-center px-6 md:px-16 lg:px-36 py-5 bg-white ">
//       <div className="cursor-pointer">
//         <Link
//           onClick={() => {
//             scrollTo(0, 0);
//             // setIsOpen(false);
//           }}
//           to={"/"}
//         >
//           <p className="font-bold text-3xl">Yethum Danith</p>
//         </Link>
//       </div>

//       <div className="flex flex-col gap-20 items-center cursor-pointer sm:flex-row">
//         {navLinks.map((item, index) => (
//           <Link
//             key={index}
//             to={item.path}
//             onClick={() => {
//             scrollTo(0, 0);
//             setIsOpen(false);
//           }}
          
//             className="text-black hover:text-slate-600 duration-300 transition-colors ease-in-out"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
