import React from "react";

const experiences = [
  {
    title: "Software Quality Assurance Engineer I",
    company: "ByteCorp Technologies, Karachi, Pakistan",
    period: "September 2023 – Present",
    responsibilities: [
      "Executed over 7,000 comprehensive test cases and reported more than 1,500 defects using JIRA and Qase.io, contributing to four major projects across web and mobile platforms.",
      "Performed manual, regression, and API testing using Postman and Cypress, ensuring high-quality releases.",
      "Led defect triage meetings to prioritize and expedite bug resolution, significantly improving product stability.",
      "Developed reusable test plans and maintained detailed documentation to enhance testing efficiency.",
      "Collaborated with Agile teams during sprint planning, stand-ups, and retrospectives to support continuous delivery and process improvements.",
      "Introduced QA checklists that reduced bug leakage by 20%, elevating overall product quality.",
      "Worked closely with developers and business analysts to create effective test scenarios based on user stories and acceptance criteria.",
      "Provided QA sign-off confirming release readiness after successful regression cycles.",
    ],
  },
  {
    title: "Associate Software Quality Assurance Engineer II",
    responsibilities: [
      "Supported the testing lifecycle for multiple projects, executing test cases and tracking defects effectively.",
      "Assisted in API and manual testing efforts while learning automation basics.",
      "Participated actively in Agile ceremonies, contributing to sprint goals and quality improvements.",
    ],
  },
  {
    title: "Associate Software Quality Assurance Engineer I",
    responsibilities: [
      "Performed manual testing and defect reporting using JIRA under supervision.",
      "Gained foundational knowledge of QA processes and test case development.",
      "Assisted senior team members in executing regression tests and documenting results.",
    ],
  },
  {
    title: "Software Quality Assurance Intern",
    responsibilities: [
      "Assisted the QA team in executing test cases and reporting bugs.",
      "Gained hands-on exposure to testing tools such as Postman and JIRA.",
      "Supported documentation efforts and learned best practices in software quality assurance.",
    ],
  },
];

export default function ProfessionalExperience() {
  return (
    <section
    id="experience" 
    className="scroll-mt-24 max-w-7xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-md shadow-md my-12">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-700 pb-3">
        Professional Experience
      </h2>

      <div className="relative pl-10 before:absolute before:top-0 before:left-4 before:h-full before:w-1 before:bg-blue-800 dark:before:bg-blue-900 before:rounded-full">
        {experiences.map(({ title, company, period, responsibilities }, idx) => (
          <article
            key={idx}
            className="mb-12 relative group hover:bg-blue-50 dark:hover:bg-blue-900 p-6 rounded-md transition"
          >
            {/* Timeline Dot */}
            <span className="absolute left-0 top-8 h-4 w-4 bg-blue-800 dark:bg-blue-900 rounded-full border-2 border-white dark:border-gray-900"></span>

            <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-400">
                {title}
              </h3>
              <div className="mt-1 sm:mt-0 flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                {company && (
                  <span className="text-blue-700 dark:text-blue-300 font-bold italic">
                    {company}
                  </span>
                )}
                {period && (
                  <time className="text-gray-500 dark:text-gray-400 text-sm">
                    {period}
                  </time>
                )}
              </div>
            </header>

            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
