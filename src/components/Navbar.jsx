import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/About" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/Contact" },
  ];
  return (
    <div className="flex justify-between z-999 overflow-hidden fixed w-full items-center px-6 md:px-16 lg:px-36 py-5 bg-white ">
      <div className="cursor-pointer">
        <a href="/">
          <p className="font-bold text-3xl">Yethum Danith</p>
        </a>
      </div>

      <div className="flex flex-col gap-20 items-center cursor-pointer sm:flex-row">
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="text-black hover:text-slate-600 duration-300 transition-colors ease-in-out"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
