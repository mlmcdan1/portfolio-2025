'use client';
import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

type Metric = {
    label: string;
    end: number;
    suffix?: string;
    delay?: number;
};

const metrics: Metric[] = [
    { label: 'Digital products launched', end: 12, suffix: '+' },
    { label: 'Experiments shipped', end: 48, suffix: '+' },
    { label: 'Avg. Lighthouse score', end: 92, suffix: '%' },
    { label: 'Client retention', end: 93, suffix: '%' },
];

export default function SkillSection() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (inView) {
            setShouldAnimate(true);
        }
    }, [inView]);

    return (
        <section
            id='skills'
            className='relative py-18'
            ref={ref}
        >
            <div className='absolute inset-0 bg-[url("/images/sky-shot.jpg")] bg-cover bg-center opacity-20' aria-hidden />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60' aria-hidden />

            <div className='relative max-w-6xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-14'>
                    <span className='text-sky-300 uppercase tracking-[0.4em] text-xs'>
                        Capabilities
                    </span>
                    <h2 className='mt-3 text-4xl font-semibold text-slate-100'>
                        What working together unlocks
                    </h2>
                    <p className='mt-4 text-slate-300/80 max-w-2xl mx-auto'>
                        A blend of product thinking, clean engineering, and iterative experimentation that keeps teams shipping with confidence.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {metrics.map((metric, index) => (
                        <div
                            key={metric.label}
                            className='glass-panel glass-border px-8 py-10 text-center flex flex-col items-center justify-center'
                            data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-delay={index * 120}
                        >
                            <span className='text-5xl font-bold text-slate-50'>
                                {shouldAnimate ? (
                                    <CountUp end={metric.end} suffix={metric.suffix ?? ''} duration={2.6} />
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
