'use client'

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function HomeSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "I'm a Full-Stack Developer.",
          "I'm an incoming Software Engineer.",
          "Let's create something amazing.",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
      });

      return () => typed.destroy();
    }
  }, []);


  return (
    <section 
        id="home" 
        className=" min-h-screen flex flex-col justify-center 
        items-center bg-white text-gray-900"
        
        >
     
        {/* Static Greeting */}
        <h1 className="text-6xl font-bold mb-4 relative z-10 text-center">Hi! I'm <span>Matthew McDaniel</span></h1>
        <span ref={typedRef} className="text-2xl text-blue-600 mb-4 text-center relative z-10" />
        <a href="#about" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-500 transition relative z-10">
            Download CV
        </a>
    </section>
  );
}
