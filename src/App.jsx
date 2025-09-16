import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TechStack from "./components/TechStack";
import About from "./components/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <TechStack/>
      <About/>
      <Footer/>
    </>
  );
};

export default App;
