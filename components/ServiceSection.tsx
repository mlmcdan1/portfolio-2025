'use client';

import React from 'react';

export default function ServiceSection() {
    return (
        <section
            id='services'
            className='py-16'>
                <div className='max-w-6xl mx-auto px-6 md:px-10'>
                    {/* Section Heading */}
                    <div className='mb-12 text-center'>
                        <span className='text-sky-300 uppercase tracking-[0.4em] text-xs'>
                            What I Do
                        </span>
                        <h2 className='text-4xl font-semibold mt-3 text-slate-100'>
                            Areas of Expertise
                        </h2>
                        <p className='mt-4 text-slate-300/80 max-w-2xl mx-auto'>
                            Services shaped by client projects I’ve delivered—from polished marketing sites to custom dashboards and automation.
                        </p>
                    </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* Service 1 */}
                    <div className='glass-panel glass-border p-8 text-left'>
                        <div className='text-sky-300 text-4xl mb-6'>
                            <i className='fas fa-code'></i>
                        </div>
                        <h3 className='text-lg font-semibold text-slate-100 uppercase tracking-[0.3em]'>
                            Web Development
                        </h3>
                        <p className='text-slate-300/80 mt-4 leading-relaxed'>
                            Modern, performant experiences built with component-driven architectures that scale with your roadmap.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className='glass-panel glass-border p-8 text-left'>
                        <div className='text-emerald-300 text-4xl mb-6'>
                            <i className='fas fa-envelope'></i>
                        </div>
                        <h3 className='text-lg font-semibold text-slate-100 uppercase tracking-[0.3em]'>
                            Email Development
                        </h3>
                        <p className='text-slate-300/80 mt-4 leading-relaxed'>
                            Pixel-perfect, responsive email systems tested across clients to drive engagement and conversions. 
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className='glass-panel glass-border p-8 text-left'>
                        <div className='text-amber-300 text-4xl mb-6'>
                            <i className='fas fa-paint-brush'></i>
                        </div>
                        <h3 className='text-lg font-semibold text-slate-100 uppercase tracking-[0.3em]'>
                            Front-end Development
                        </h3>
                        <p className='text-slate-300/80 mt-4 leading-relaxed'>
                            Engaging interfaces composed with accessibility, animation, and micro-interactions that feel native.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className='glass-panel glass-border p-8 text-left'>
                        <div className='text-rose-300 text-4xl mb-6'>
                            <i className='fas fa-server'></i>
                        </div>
                        <h3 className='text-lg font-semibold text-slate-100 uppercase tracking-[0.3em]'>
                            Back-end Development
                        </h3>
                        <p className='text-slate-300/80 mt-4 leading-relaxed'>
                            Robust APIs and services with clean architecture, thoughtful logging, and production-ready deployments.
                        </p>
                    </div>

                    {/* Service 5 */}
                    <div className='glass-panel glass-border p-8 text-left'>
                        <div className='text-fuchsia-300 text-4xl mb-6'>
                            <i className='fas fa-cloud'></i>
                        </div>
                        <h3 className='text-lg font-semibold text-slate-100 uppercase tracking-[0.3em]'>
                            Cloud Solutions
                        </h3>
                        <p className='text-slate-300/80 mt-4 leading-relaxed'>
                            Infrastructure automation, CI/CD pipelines, and observability configured for rapid iteration.
                        </p>
                    </div>

                    {/* Service 6 */}
                    <div className='glass-panel glass-border p-8 text-left'>
                        <div className='text-teal-300 text-4xl mb-6'>
                            <i className='fas fa-database'></i>
                        </div>
                        <h3 className='text-lg font-semibold text-slate-100 uppercase tracking-[0.3em]'>
                            Database Management
                        </h3>
                        <p className='text-slate-300/80 mt-4 leading-relaxed'>
                            Schema design, migrations, and data tooling that keep information flowing and trustworthy.
                        </p>
                    </div>
                </div>     
                </div>
        </section>
        
    );
}
