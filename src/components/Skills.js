export const Skills = () => (
  <section
    id="skills"
    className="p-10 max-w-4xl mx-auto text-lg leading-relaxed scroll-mt-20 text-blue-900 dark:text-blue-100 transition-colors duration-300"
    data-aos="fade-up"
  >
    <h2 className="text-4xl font-bold mb-6 border-b border-blue-800 dark:border-blue-300 pb-2">
      Skills
    </h2>

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <li data-aos="fade-up" data-aos-delay="100">
        Functional, Regression, Smoke, Mobile & API Testing
      </li>
      <li data-aos="fade-up" data-aos-delay="200">
        JIRA, Qase.io, Cypress, Playwright (basic), Postman
      </li>
      <li data-aos="fade-up" data-aos-delay="300">
        TypeScript, C++, Dart, Firebase, Android Studio
      </li>
      <li data-aos="fade-up" data-aos-delay="400">
        Agile (Scrum), SDLC, STLC, CI/CD
      </li>
    </ul>
  </section>
);
