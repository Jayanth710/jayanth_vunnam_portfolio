import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Sidebar from "./components/Sidebar/Sidebar";
import Work from "./components/Work/Work";
import AOS from 'aos'
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App(){
  // const [theme, setTheme] = useState("dark");
  useEffect(() => {
    AOS.init({
        duration: 1000, 
        easing: "ease-in-out", 
      });
    }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Education />
      <Work />
      <Skills />
      <Projects />
      <Contact />
      <Sidebar />
      {/* <Sidebar setTheme={setTheme} /> */}
      {/* <Footer /> */}
    </div>
  )
}