import React from "react";
import { MdLocalPostOffice } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";


const Contact = () => {
  return (
    <>
      <div className="px-5 md:px-30 sm:px-50 py-20 bg-blue-50">
        <div >
          <MdLocalPostOffice className="w-20 h-20"/>
          <p className="">Get In Touch</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
