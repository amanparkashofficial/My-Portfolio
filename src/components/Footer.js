// Footer.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Mail, Phone, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1d3a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-teal-400 mb-4">Aman Parkash</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A passionate and detail-oriented Software Quality Assurance (SQA) Engineer with 1.5+ years of experience. Skilled in manual and API testing, Agile methodologies, and tools like JIRA, Qase.io, Cypress, Postman, and Playwright.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:amanparkash@example.com"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0e264c] hover:bg-teal-600 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="tel:+923000000000"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0e264c] hover:bg-teal-600 transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/aman-parkash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0e264c] hover:bg-teal-600 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-200 cursor-pointer capitalize"
                >
                  {section}
                </ScrollLink>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Karachi, Pakistan</p>
              <p>+92 3394191125</p>
              <p>amanparkashofficial@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#1c3a6e] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Aman Parkash. All rights reserved.
          </p>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0e264c] hover:bg-teal-600 transition-colors duration-200 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </ScrollLink>
        </div>
      </div>
    </footer>
  );
}
