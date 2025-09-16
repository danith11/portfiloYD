import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <TechStack/>
      <Footer/>
    </>
  );
};

export default App;
