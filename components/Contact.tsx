import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4 sm:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Let's Connect</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have a project in mind or just want to say hello? Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:matthew.mcdanieliv@gmail.com"
            className="py-3 px-6 rounded-full font-bold border border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white transition-all"
          >
            📧 Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/matthewlmcdanieliv/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-full font-bold border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white transition-all"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/mlmcdan1"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-full font-bold border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
