'use client';
import React from 'react';

const skillGroups = [
    {
        title: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive UI'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Authentication'],
    },
    {
        title: 'Tooling',
        skills: ['Git/GitHub', 'Vercel', 'Postman', 'Figma', 'VS Code'],
    },
    {
        title: 'Foundations',
        skills: ['Accessibility basics', 'Component testing', 'Agile teamwork', 'Documentation'],
    },
];

export default function SkillSection() {
    return (
        <section
            id='skills'
            className='relative py-18'
        >
            <div className='relative max-w-6xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-14'>
                    <span className='text-sky-300 uppercase tracking-[0.4em] text-xs'>
                        Skills
                    </span>
                    <h2 className='mt-3 text-4xl font-semibold text-slate-100'>
                        Tools and fundamentals I use
                    </h2>
                    <p className='mt-4 text-slate-300/80 max-w-2xl mx-auto'>
                        A practical stack for building and maintaining modern web apps.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {skillGroups.map((group, index) => (
                        <div
                            key={group.title}
                            className='glass-panel glass-border px-8 py-10 text-left flex flex-col items-start justify-start'
                            data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-delay={index * 120}
                        >
                            <h3 className='text-lg font-semibold text-slate-100 uppercase tracking-[0.3em]'>
                                {group.title}
                            </h3>
                            <div className='mt-4 flex flex-wrap gap-2'>
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className='rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
