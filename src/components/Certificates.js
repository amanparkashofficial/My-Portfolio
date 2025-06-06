import { BookCheck, Workflow } from "lucide-react";

export const Certificates = () => (
  <section
    id="certificates"
    className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 transition-colors duration-300"
    data-aos="fade-up"
  >
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-blue-900 dark:text-blue-100 mb-12">
        Certificates
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Certificate: Learning Playwright */}
        <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-700 dark:text-blue-300">
            <BookCheck size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Learning Playwright
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>
                Completed course on LinkedIn Learning covering automated E2E testing, locators, assertions, and suite structuring.
              </li>
              <li>
                Gained hands-on experience with UI, API, and visual testing using Playwright.
              </li>
              <li>
                Worked with cookie-based authentication and Playwright codegen tools.
              </li>
            </ul>
            <span className="inline-block mt-4 px-3 py-1 text-xs bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 rounded-full">
              Automation Testing
            </span>
          </div>
        </div>

        {/* Certificate: Agile Testing */}
        <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
          <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full text-blue-700 dark:text-blue-300">
            <Workflow size={24} />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
              Agile Testing
            </h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 text-sm space-y-1">
              <li>
                Completed course by Ash Coleman on LinkedIn Learning, exploring Agile tester roles.
              </li>
              <li>
                Contributed to backlog grooming, sprint planning, test automation, and CI/CD practices.
              </li>
              <li>
                Emphasized shared team responsibility for quality in Agile workflows.
              </li>
            </ul>
            <span className="inline-block mt-4 px-3 py-1 text-xs bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-blue-100 rounded-full">
              Agile Methodology
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);
