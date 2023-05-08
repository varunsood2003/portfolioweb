import React from "react";
import Navbar from "./Components/Navbar/App";
import Home from "./Components/Home/App"
import About from "./Components/About/App"
import Projects from "./Components/Projects/App"
import Contact from "./Components/Contact/App"
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
