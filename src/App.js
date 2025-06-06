import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/contact"; 



function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("darkMode");
      if (stored !== null) return stored === "true";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div
        className="bg-gradient-to-b from-white via-gray-100 to-blue-100 dark:from-black dark:via-gray-900 dark:to-blue-950 
        text-gray-900 dark:text-white font-sans transition-colors duration-500"
        style={{ scrollBehavior: "smooth" }}
      >
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
