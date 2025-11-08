import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Footer />} />{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React from "react";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import TechStack from "./components/TechStack";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Home/>
//       <TechStack/>
//       <About/>
//       <Projects/>
//       <Footer/>
//     </>
//   );
// };

// export default App;
