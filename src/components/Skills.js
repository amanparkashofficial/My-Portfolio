import React from 'react';
import { FaVial, FaTasks, FaCode } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#0a2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-700 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-700 dark:bg-blue-400 mx-auto"></div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* QA & Testing */}
          <div className="bg-[#f1f5f9] dark:bg-[#112d4e] rounded-lg shadow-md p-6 hover:-translate-y-2 transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                <FaVial className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">QA & Testing</h3>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>Manual, Functional & Regression Testing</p>
              <p>Test Case Design & Execution</p>
              <p>XML & Localization Testing</p>
              <p>Bug Tracking: Jira, Trello, ClickUp</p>
              <p>Mobile & API Testing</p>
              <p>SDLC & STLC</p>
            </div>
          </div>

          {/* Tools & Management */}
          <div className="bg-[#f1f5f9] dark:bg-[#112d4e] rounded-lg shadow-md p-6 hover:-translate-y-2 transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                <FaTasks className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tools & Teamwork</h3>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>Agile & Scrum Methodologies</p>
              <p>Sprint Planning & Retrospectives</p>
              <p>Confluence & Notion</p>
              <p>Team Coordination</p>
              <p>Reporting & Documentation</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-[#f1f5f9] dark:bg-[#112d4e] rounded-lg shadow-md p-6 hover:-translate-y-2 transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                <FaCode className="text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical</h3>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>Selenium (Basic), Cypress, Playwright</p>
              <p>Postman for API Testing</p>
              <p>HTML, CSS, React (Basic)</p>
              <p>WordPress CMS</p>
              <p>Basic Automation Skills</p>
            </div>
          </div>
        </div>

        {/* QA Philosophy Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white rounded-lg p-8 shadow-md">
          <h3 className="text-3xl font-semibold mb-4">My Approach to Quality Assurance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-medium mb-3">Testing Philosophy</h4>
              <p className="text-white/90 leading-relaxed">
                I ensure comprehensive, structured testing that balances functionality, user experience, and accessibility. My focus is to catch issues before production and maintain a reliable product experience.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-medium mb-3">Team Collaboration</h4>
              <p className="text-white/90 leading-relaxed">
                I work closely with cross-functional teams to integrate QA early in the development lifecycle. Communication, coordination, and clear documentation are pillars of my process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
