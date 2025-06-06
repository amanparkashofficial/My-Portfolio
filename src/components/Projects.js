import { useState } from "react";

const projectData = [
  {
    title: "PNI – Sales Portal",
    description: "Detected 500+ bugs, wrote 4000+ test cases, ensured end-to-end coverage.",
    tech: ["Manual Testing", "API Testing", "Test Case Design", "JIRA", "Agile"],
  },
  {
    title: "Alef Digital",
    description: "Verified multilingual support for 50+ languages and tested key localization features.",
    tech: ["Localization Testing", "Cross-browser", "Postman", "Regression"],
  },
  {
    title: "Nasaq Travel Platform",
    description: "Tested admin/traveler personas, booking flow, payment, and notifications.",
    tech: ["End-to-End Testing", "UI Testing", "Payment Gateway", "Cypress"],
  },
  {
    title: "StudentSpace (FYP)",
    description: "Built a Flutter-based student housing app with Firebase authentication and search.",
    tech: ["Flutter", "Firebase", "Dart", "Authentication", "Search UI"],
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="text-blue-800 dark:text-blue-400">Projects</span> Overview
          </h2>
          <div className="w-20 h-1 bg-blue-800 dark:bg-blue-400 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Project List */}
          <div className="space-y-4">
            {projectData.map((project, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(project)}
                className={`cursor-pointer flex items-center gap-4 px-4 py-3 rounded-lg transition 
                  ${
                    selectedProject.title === project.title
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                      : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-200 dark:bg-blue-700 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="lucide lucide-layers"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
                    <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
                    <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
                  </svg>
                </div>
                <span className="font-medium">{project.title}</span>
              </div>
            ))}
          </div>

          {/* Right: Project Details */}
          <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {selectedProject.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {selectedProject.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {selectedProject.tech.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
