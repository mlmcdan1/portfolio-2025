'use client';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type Metric = {
  label: string;
  end: number;
  suffix?: string;
};

const deliveryMetrics: Metric[] = [
  { label: 'Projects delivered', end: 24, suffix: '+' },
  { label: 'Emails optimized', end: 120, suffix: '+' },
  { label: 'Average turnaround (days)', end: 10 },
  { label: 'Active partnerships', end: 6 },
];

export default function CounterSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
    <section
      id='momentum'
      className='relative py-18'
      ref={ref}
    >
      <div className='absolute inset-0 bg-[url("/images/sky-shot.jpg")] bg-cover bg-center opacity-10' aria-hidden />
      <div className='absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-900/70' aria-hidden />

      <div className='relative max-w-6xl mx-auto px-6 md:px-12'>
        <div className='text-center mb-14'>
          <span className='text-sky-300 uppercase tracking-[0.4em] text-xs'>
            Momentum
          </span>
          <h2 className='mt-3 text-4xl font-semibold text-slate-100'>
            Shipping meaningful work at a fast clip
          </h2>
          <p className='mt-4 text-slate-300/80 max-w-2xl mx-auto'>
            Lean workflows, automation, and collaborative tooling keep projects moving from kickoff to deployment.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {deliveryMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className='glass-panel glass-border px-8 py-10 text-center flex flex-col items-center justify-center'
              data-aos='fade-up'
              data-aos-duration='800'
              data-aos-delay={index * 140}
            >
              <span className='text-5xl font-bold text-slate-50'>
                {animate ? (
                  <CountUp end={metric.end} suffix={metric.suffix ?? ''} duration={2.4} />
                ) : (
                  `0${metric.suffix ?? ''}`
                )}
              </span>
              <p className='mt-4 text-sm uppercase tracking-[0.3em] text-slate-300'>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
