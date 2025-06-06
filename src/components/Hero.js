import React from "react";
import profileImg from "../assets/profile.jpg";

export const Hero = () => (
  <section
    id="hero"
    className="min-h-screen flex flex-col md:flex-row items-center justify-center text-left p-6 scroll-mt-20 transition-colors duration-300
      bg-white text-blue-900
      dark:bg-gradient-to-br dark:from-blue-950 dark:via-gray-900 dark:to-black dark:text-gray-100"
    aria-label="Introduction and contact information"
  >
    {/* Left: Profile Image */}
    <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-12">
      <img
        src={profileImg}
        alt="Aman Parkash"
        className="w-70 h-70 rounded-full border-4 border-blue-300 shadow-lg object-cover"
        loading="lazy"
        decoding="async"
        width={450}
        height={450}
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full md:w-1/2 max-w-md md:max-w-lg md:pl-8">
      <p className="text-lg md:text-6xl font-extrabold text-blue-500 dark:text-blue-300 mb-2" tabIndex={0}>
        Hello, I'm
      </p>

      <h1
        className="text-4xl md:text-6xl font-extrabold text-blue-800 dark:text-blue-400 drop-shadow-md animate-pulse"
        tabIndex={0}
      >
        Aman Parkash
      </h1>

      <p className="mt-4 text-2xl text-blue-700 dark:text-blue-200" tabIndex={0}>
        Software Quality Assurance (SQA) Engineer
      </p>

      <p className="mt-4 text-base md:text-base text-gray-700 dark:text-gray-300 leading-relaxed" tabIndex={0}>
        A passionate and detail-oriented Software Quality Assurance Engineer with hands-on experience in Agile environments. I aim to grow my career by contributing to high-impact projects, enhancing product quality, and driving team collaboration. Seeking a challenging opportunity where I can apply my QA expertise and coordination skills to deliver exceptional software solutions.
      </p>

      <div className="mt-4 text-blue-700 dark:text-blue-300 font-medium" tabIndex={0}>
        <p>
          Email:{" "}
          <a href="mailto:amanparkashofficial@gmail.com" className="underline hover:text-blue-900 dark:hover:text-white">
            amanparkashofficial@gmail.com
          </a>
        </p>
        <p>Phone: +92 3394191125</p>
      </div>

      <nav className="mt-8 flex gap-6 text-blue-700 dark:text-blue-300" aria-label="Contact and social links">
        <a
          href="mailto:amanparkashofficial@gmail.com"
          className="hover:text-blue-900 dark:hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          aria-label="Send email to Aman Parkash"
        >
          Email
        </a>
        <a
          href="https://github.com/amanparkashofficial"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-900 dark:hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          aria-label="Visit Aman Parkash GitHub profile"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/amanparkashgaimnani/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-900 dark:hover:text-white transition focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          aria-label="Visit Aman Parkash LinkedIn profile"
        >
          LinkedIn
        </a>
      </nav>

      <div className="mt-10 flex flex-wrap gap-6">
        <a
          href="/Aman_Parkash_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500"
          aria-label="Download Aman Parkash resume PDF"
        >
          Download Resume
        </a>

        <a
          href="#projects"
          className="inline-block px-6 py-3 text-lg font-semibold bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500"
          aria-label="Explore Portfolio"
        >
          Explore Portfolio
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
