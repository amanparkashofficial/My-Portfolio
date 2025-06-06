export const Contact = () => (
  <section
    id="contact"
    className="p-10 max-w-4xl mx-auto scroll-mt-20 text-blue-900 dark:text-blue-100 transition-colors duration-300"
    data-aos="fade-up"
  >
    <h2 className="text-4xl font-bold mb-6 border-b border-blue-800 dark:border-blue-300 pb-2">
      Contact
    </h2>
    <div className="flex flex-wrap gap-4 mt-6">
      <a
        href="mailto:amanparkashofficial@gmail.com"
        className="bg-blue-600 dark:bg-blue-700 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-500 dark:hover:bg-blue-600 transition"
      >
        📧 Email
      </a>
      <a
        href="https://github.com/amanparkashofficial"
        target="_blank"
        rel="noreferrer"
        className="bg-gray-800 dark:bg-gray-700 text-white px-5 py-3 rounded-lg shadow-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
      >
        💻 GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/amanparkashgaimnani/"
        target="_blank"
        rel="noreferrer"
        className="bg-blue-800 dark:bg-blue-900 text-white px-5 py-3 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-800 transition"
      >
        🔗 LinkedIn
      </a>
    </div>
  </section>
);
