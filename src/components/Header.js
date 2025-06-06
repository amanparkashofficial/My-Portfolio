import React, { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12.515h-1M16.95 7.05l-.707.707M7.757 16.243l-.707.707M16.95 16.95l-.707-.707M7.757 7.757l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(saved === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
      el.addEventListener("blur", () => el.removeAttribute("tabindex"), { once: true });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 120;
          const bottomReached = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

          let current = "hero";
          for (const section of sections) {
            const element = document.getElementById(section.id);
            if (element && scrollPosition >= element.offsetTop) {
              current = section.id;
            }
          }

          if (bottomReached) {
            current = "contact";
          }

          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 shadow-md transition-colors duration-300 ${darkMode ? "bg-gray-900 text-gray-200" : "bg-gradient-to-r from-white via-blue-100 to-blue-200 text-blue-900"}`}>
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <h1
          className={`text-lg md:text-3xl font-bold cursor-pointer select-none transition-colors duration-300 ${darkMode ? "hover:text-indigo-400" : "hover:text-blue-700"}`}
          onClick={() => scrollToSection("hero")}
          tabIndex={0}
          onKeyDown={(e) => ["Enter", " "].includes(e.key) && scrollToSection("hero")}
          aria-label="Scroll to Home section"
        >
          Aman Parkash
        </h1>

        <div className="flex items-center space-x-4 flex-grow justify-end">
          <nav className={`hidden md:flex space-x-7 text-xs md:text-sm font-semibold ${darkMode ? "text-gray-300" : "text-blue-800"}`} role="navigation" aria-label="Main navigation">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                aria-current={activeSection === id ? "page" : undefined}
                className={`relative px-2 py-1 rounded-md transition-colors duration-300 focus:outline-none ${
                  activeSection === id
                    ? darkMode
                      ? "text-indigo-400 after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-1 after:bg-indigo-400 after:rounded"
                      : "text-blue-600 after:absolute after:-bottom-1 after:left-1/4 after:w-1/2 after:h-1 after:bg-blue-600 after:rounded"
                    : darkMode
                    ? "hover:text-indigo-400"
                    : "hover:text-blue-600"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              className={`p-1 rounded-full transition-colors duration-300 focus:outline-none ${
                darkMode ? "bg-indigo-700 text-yellow-300 hover:bg-indigo-600" : "bg-blue-200 text-blue-700 hover:bg-blue-300"
              }`}
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              className={`md:hidden p-1.5 rounded-md transition-colors duration-300 ${
                darkMode ? "text-gray-300 hover:bg-gray-700" : "text-blue-800 hover:bg-blue-300"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className={`md:hidden px-6 py-4 flex flex-col space-y-2 rounded-b-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-blue-800"}`} role="navigation" aria-label="Mobile navigation">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-left px-3 py-2 rounded-md transition-colors duration-300 focus:outline-none ${
                activeSection === id
                  ? darkMode
                    ? "bg-indigo-700 text-indigo-200"
                    : "bg-blue-100 text-blue-700"
                  : darkMode
                  ? "hover:bg-gray-700 hover:text-indigo-400"
                  : "hover:bg-blue-200 hover:text-blue-700"
              }`}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};
