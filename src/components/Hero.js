import React from "react";
import profileImg from "../assets/profile.jpg";
import resumePDF from "../assets/Aman-Parkash-SQA.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-6 pb-24 
      bg-white text-blue-900 dark:bg-gradient-to-br dark:from-blue-950 dark:via-gray-900 dark:to-black dark:text-gray-100"
    aria-label="Introduction and contact information"
  >
    {/* Left: Profile Image */}
    <div className="flex-shrink-0 mb-8 md:mb-0">
      <img
        src={profileImg}
        alt="Aman Parkash"
        className="w-[450px] h-[450px] rounded-full border-4 border-blue-300 shadow-lg object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>

    {/* Right: Text Content */}
    <div className="max-w-4xl">
      <p className="text-6xl text-blue-500 dark:text-blue-300 mb-2">Hello, I'm</p>

      <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 dark:text-blue-400 drop-shadow-md animate-pulse">
        Aman Parkash
      </h1>

      <p className="mt-2 text-2xl text-blue-700 dark:text-blue-200">
        Software Quality Assurance (SQA) Engineer
      </p>

      <p className="mt-4 text-base md:text-[1.1rem] text-gray-700 dark:text-gray-300 leading-relaxed">
        A passionate and detail-oriented SQA Engineer with hands-on experience in Agile environments. I aim to grow my career by contributing to high-impact projects, enhancing product quality, and driving team collaboration. Seeking a challenging opportunity where I can apply my QA expertise and coordination skills to deliver exceptional software solutions.
      </p>

      {/* Email & Phone with white outline icons */}
      <div className="mt-6 flex flex-col gap-4 text-blue-700 dark:text-blue-300 font-medium max-w-sm">
        <a
          href="mailto:amanparkashofficial@gmail.com"
          className="flex items-center gap-3 group"
        >
          <span className="p-2 rounded-full border-2 border-current bg-transparent group-hover:bg-white transition">
            <FiMail className="text-blue-700 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-700" size={20} />
          </span>
          <span className="underline group-hover:text-blue-900 dark:group-hover:text-white">
            amanparkashofficial@gmail.com
          </span>
        </a>

        <a
          href="tel:+923394191125"
          className="flex items-center gap-3 group"
        >
          <span className="p-2 rounded-full border-2 border-current bg-transparent group-hover:bg-white transition">
            <FiPhone className="text-blue-700 dark:text-white group-hover:text-blue-900 dark:group-hover:text-blue-700" size={20} />
          </span>
          <span className="underline group-hover:text-blue-900 dark:group-hover:text-white">
            +92 3394191125
          </span>
        </a>
      </div>

      {/* Social Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="mailto:amanparkashofficial@gmail.com"
          className="flex items-center gap-2 px-10 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full shadow transition"
        >
          <FiMail size={18} /> Email
        </a>
        <a
          href="https://github.com/amanparkashofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-10 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-full shadow transition"
        >
          <FaGithub size={18} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/amanparkashgaimnani/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-10 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-full shadow transition"
        >
          <FaLinkedin size={18} /> LinkedIn
        </a>
      </div>

      {/* Resume & Portfolio Buttons */}
      <div className="mt-10 flex flex-wrap gap-6">
        <a
          href={resumePDF}
          download="Aman-Parkash-SQA.pdf"
          className="px-10 py-3 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
        >
          Download Resume
        </a>


        <a
          href="#about"
          className="px-10 py-3 text-lg font-semibold bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:outline-none"
        >
          Explore Portfolio
        </a>
      </div>
    </div>

    {/* Scroll Arrow at Bottom Center with Circle */}
    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="flex items-center justify-center w-14 h-14 rounded-full border-2 border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900 shadow-lg animate-bounce transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </a>
    </div>
  </section>
);

export default Hero;
