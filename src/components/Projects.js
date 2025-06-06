export const Projects = () => (
  <section
    id="projects"
    className="p-10 max-w-4xl mx-auto text-blue-900 dark:text-blue-100 transition-colors duration-300"
    data-aos="fade-up"
  >
    <h2 className="text-4xl font-bold mb-6 border-b border-blue-800 dark:border-blue-300 pb-2">
      Projects
    </h2>
    <ul className="space-y-4">
      <li>
        <strong className="text-blue-800 dark:text-blue-300">PNI – Sales Portal:</strong> Detected 500+ bugs, wrote 4000+ test cases, ensured end-to-end coverage.
      </li>
      <li>
        <strong className="text-blue-800 dark:text-blue-300">Alef Digital:</strong> Verified multilingual support for 50+ languages and tested key localization features.
      </li>
      <li>
        <strong className="text-blue-800 dark:text-blue-300">Nasaq Travel Platform:</strong> Tested admin/traveler personas, booking flow, payment, and notifications.
      </li>
      <li>
        <strong className="text-blue-800 dark:text-blue-300">StudentSpace (FYP):</strong> Built a Flutter-based student housing app with Firebase authentication and search.
      </li>
    </ul>
  </section>
);
