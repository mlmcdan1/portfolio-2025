import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-18 px-4 sm:px-8 text-center">
      <div className="max-w-3xl mx-auto glass-panel glass-border px-10 py-14">
        <span className="text-xs uppercase tracking-[0.4em] text-sky-300">Get In Touch</span>
        <h2 className="text-4xl font-semibold mt-4 mb-6 text-slate-100">Let&apos;s Connect</h2>
        <p className="text-lg text-slate-300/80 mb-6">
          If you&apos;re hiring for an entry-level role or want to talk about my projects, I&apos;d love to connect.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:matthew.mcdanieliv@gmail.com"
            className="py-3 px-6 rounded-full font-semibold border border-sky-400/60 text-sky-200 hover:bg-sky-400/80 hover:text-slate-950 transition-all duration-200 shadow-lg shadow-sky-500/20"
          >
            📧 Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/matthewlmcdanieliv/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-full font-semibold border border-white/20 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/mlmcdan1"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-full font-semibold border border-white/20 text-slate-200 hover:bg-white/10 hover:text-white transition-all duration-200"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
