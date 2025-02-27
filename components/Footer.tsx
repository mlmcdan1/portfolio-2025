import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 text-center text-gray-700">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <p className="text-sm">© {new Date().getFullYear()} Matthew McDanel. All rights reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/matthewlmcdanieliv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-sky-600 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mlmcdan1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-all"
          >
            GitHub
          </a>
          <a
            href="mailto:matthew.mcdanieliv@gmail.com"
            className="text-gray-700 hover:text-red-600 transition-all"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
