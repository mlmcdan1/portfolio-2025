'use client';

import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function CounterSection() {
  const [rendered, setRendered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) setRendered(true); // Prevents multiple renders
  }, [inView]);

  if (!rendered) return null; // Ensures it only runs once

  return (
    <section
      id='section'
      className='relative bg-fixed bg-cover bg-center bg-no-repeat py-16'
      style={{ backgroundImage: "url('/images/sky-shot.jpg')" }}
      ref={ref}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      {/* Content */}
      <div className='relative container mx-auto px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white'>

          <div data-aos="fade-up" data-aos-duration="800">
            {inView && <CountUp start={0} end={309} duration={5} className='text-5xl font-bold' />}
            <p className='mt-2 text-lg'>Cups of Coffee</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            {inView && <CountUp start={0} end={356} duration={5} className='text-5xl font-bold' />}
            <p className='mt-2 text-lg'>Projects</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
            {inView && <CountUp start={0} end={30} duration={5} className='text-5xl font-bold' />}
            <p className='mt-2 text-lg'>Clients</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
            {inView && <CountUp start={0} end={10} duration={5} className='text-5xl font-bold' />}
            <p className='mt-2 text-lg'>Partners</p>
          </div>

        </div>
      </div>
    </section>
  );
}
