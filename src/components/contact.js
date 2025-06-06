import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#0B1D3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-[#00B5D8]">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-[#00B5D8] mx-auto"></div>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-gray-50 dark:bg-[#112E4F] rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-[#173A61] text-blue-600 dark:text-[#00B5D8] mr-4">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <a href="mailto:amanparkashofficial@gmail.com" className="text-gray-900 dark:text-white hover:text-[#00B5D8] transition-colors duration-200">
                    amanparkashofficial@gmail.com
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-[#173A61] text-blue-600 dark:text-[#00B5D8] mr-4">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <a href="tel:+923394191125" className="text-gray-900 dark:text-white hover:text-[#00B5D8] transition-colors duration-200">
                    +92 339 4191125
                  </a>
                </div>
              </div>
              {/* LinkedIn */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-[#173A61] text-blue-600 dark:text-[#00B5D8] mr-4">
                  <FiLinkedin className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/amanparkashgaimnani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 dark:text-white hover:text-[#00B5D8] transition-colors duration-200"
                  >
                    linkedin.com/in/amanparkashgaimnani
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-[#173A61] text-blue-600 dark:text-[#00B5D8] mr-4">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
