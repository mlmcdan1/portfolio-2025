'use client';

import React, { useState } from 'react';

interface EducationItem {
    title: string;
    content: React.ReactNode;
}

const educationData: EducationItem[] = [
    {
        title: 'University of Maryland Global Campus (UMGC)',
        content: (
            <>
                <p>
                    <strong>Master of Science in Software Engineering</strong> <br/>
                    Graduated: December 2025
                </p>
                <p>
                    Focused on software design, development methods, and project teamwork with a strong emphasis on building real applications.
                </p>
            </>
        ),
    },
    {
        title: 'University of Mississippi',
        content: (
            <>
                <p>
                    <strong>Bachelor of General Studies</strong> <br/>
                    Graduated: 2023
                </p>
                <p>
                    Completed a broad curriculum that strengthened research, communication, and critical thinking skills.
                </p>
            </>
        ),
    },
    {
        title: 'Michigan State University',
        content: (
            <>
                <p>
                    <strong>Full Stack Web Development Certification</strong> <br/>
                    Graduated: November 2022
                </p>
                <p>
                    An immersive program focused on MERN-stack fundamentals and collaborative coding projects.
                </p>
            </>
        ),
    },
];

export default function EducationSection() {
    const [openIndex, setOpenIndex] = useState<number>(-1);

    const togglePanel = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    }

    return (
        <section
            id="education"
            className='py-16 px-4 sm:px-8'
        >
            <div className='max-w-3xl mx-auto'>
                {/* Heading */}
                <div className='mb-12 text-center'>
                    <span className='block text-sky-300 text-xs uppercase tracking-[0.4em] mb-3'>
                        Education
                    </span>
                    <h2 className='text-4xl font-semibold text-slate-100'>
                        Education
                    </h2>
                </div>

                {/* Accordion Panels */}
                <div>
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className='glass-panel glass-border mb-6'
                            data-aos="fade-up"
                        >
                            {/* Panel Heading */}
                            <button
                                onClick={() => togglePanel(index)}
                                className='w-full flex justify-between items-center px-6 py-4
                                text-left bg-transparent hover:bg-white/5 transition rounded-2xl'
                            >
                            <h4 className='font-semibold text-slate-100 tracking-tight'>
                                {item.title}
                            </h4>
                            <span className='text-sky-300 text-2xl'>
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </button>

                        {/* Panel Content */}
                        {openIndex === index && (
                            <div className='px-6 pb-6 text-slate-200/85 leading-relaxed'>
                                {item.content}
                            </div>
                        )} 
                        </div>   
                    ))}
                </div>

            </div>
                
        </section>
    );
}
