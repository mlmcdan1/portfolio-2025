import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-center text-slate-400">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 border-t border-white/10 pt-8">
        <p className="text-xs uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Matthew McDaniel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
