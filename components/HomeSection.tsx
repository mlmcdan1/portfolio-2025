'use client'

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function HomeSection() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "I&apos;m a Full-Stack Developer.",
          "I&apos;m an incoming Software Engineer.",
          "Let&apos;s create something amazing.",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        showCursor: false,
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
        <h1 className="text-6xl font-bold mb-4 relative z-10 text-center">Hi! I&apos;m <span>Matthew McDaniel</span></h1>
        <span ref={typedRef} className="text-2xl text-blue-600 mb-4 text-center relative z-10" />
        <a 
          href="https://docs.google.com/document/d/e/2PACX-1vSXmTvRVUn0vpZfm37gsVLOjorEnM3UF2N5IPmZ2qaqqeruKbSY53nAj5twwjFP8XPiUmIbzjV30k_m/pub" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-500 transition relative z-10"
        >
          📄 Resume
        </a>

    </section>
  );
}
