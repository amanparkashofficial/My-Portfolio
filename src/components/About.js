import React from "react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* Grid Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience Card */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 mr-4">
                {/* Briefcase Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                Experience
              </h3>
            </div>
            <p className="text-blue-700 dark:text-blue-300">
              Software Quality Assurance Engineer with 1.5+ years of hands-on
              experience in manual and API testing within Agile environments.
              Reported 1500+ bugs and executed 7000+ test cases across web and
              mobile apps.
            </p>
          </div>

          {/* Education Card */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 mr-4">
                {/* Graduation Cap Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-graduation-cap"
                >
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                Education
              </h3>
            </div>
            <div className="space-y-2 text-blue-700 dark:text-blue-300">
              <p className="font-medium">BS Computer Science</p>
              <p>
                National University of Computer and Emerging Sciences, Karachi Campus
              </p>
              <p>August 2019 – June 2024</p>
            </div>
          </div>

          {/* Languages Card */}
          <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-6 shadow-md transition-transform duration-300 hover:-translate-y-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-400 mr-4">
                {/* Languages Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-languages"
                >
                  <path d="m5 8 6 6"></path>
                  <path d="m4 14 6-6 2-3"></path>
                  <path d="M2 5h12"></path>
                  <path d="M7 2h1"></path>
                  <path d="m22 22-5-10-5 10"></path>
                  <path d="M14 18h6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                Languages
              </h3>
            </div>
            <ul className="space-y-2 text-blue-700 dark:text-blue-300">
              <li>English (Fluent)</li>
              <li>Urdu (Fluent)</li>
              <li>Sindhi (Native)</li>
            </ul>
          </div>
        </div>

        {/* My Journey Section */}
        <div className="mt-16 bg-blue-50 dark:bg-blue-900 rounded-lg p-10 shadow-md">
          <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100 mb-4">
            My Journey
          </h3>
          <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
            My journey began after I completed my Bachelor of Science in Computer Science from the National University of Computer and Emerging Sciences. I was eager to start my career in the tech industry, and I chose to focus on Software Quality Assurance because I believe quality is the backbone of great software.
          </p>
          <p className="text-blue-700 dark:text-blue-300 leading-relaxed mt-4">
            Over the past 1.5 years, I have gained valuable experience in manual testing, API testing, and basic automation using tools like Cypress and Playwright. I have worked with important tools such as JIRA, Postman, and Qase.io to manage test cases and track issues efficiently.
          </p>
          <p className="text-blue-700 dark:text-blue-300 leading-relaxed mt-4">
            I’ve had the opportunity to contribute to projects like the PNI Sales Portal, Alef Digital, Nasaq Travel Platform, and StudentSpace. These experiences have helped me understand the importance of collaboration in Agile teams and the critical role of thorough testing in delivering reliable software.
          </p>
          <p className="text-blue-700 dark:text-blue-300 leading-relaxed mt-4">
            I am passionate about continuously learning and improving my skills to ensure the highest quality in every product I test. My journey so far has been rewarding, and I am excited about the future and the challenges ahead in my career as a software quality professional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
