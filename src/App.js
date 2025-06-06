// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import Hero from './components/Hero';
import About from './components/About';
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Certificates } from "./components/Certificates";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Try to load user preference from localStorage or system
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
      <div className="bg-gradient-to-b from-white via-gray-100 to-blue-100 dark:from-black dark:via-gray-900 dark:to-blue-950 text-gray-900 dark:text-white font-sans transition-colors duration-500">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
