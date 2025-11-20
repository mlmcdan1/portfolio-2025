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
                    <strong>Master of Science in IT: Software Engineering</strong> <br/>
                    Expected Graduation: December 2025
                </p>
                <p>
                    At UMGC, this program focuses on advanced software design, devlopment
                    methodologies, and real-world project management techniques. Students 
                    gain expertise in areas like agile development, enterprise-scale
                    solutions, and cutting-edge IT practices, preparing them to lead in an 
                    ever-evolving tech landscape.
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
                    Completed a versatile curriculum covering various disciplines,
                    refining research and critical thinking skills. The experience
                    provided a broad academic foundation, fostering adaptability in 
                    multiple professional fields.
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
                    An immersive bootcamp focusing on MERN-stack applications, modern Web
                    development best practices, and collaborative coding projects. Gained 
                    hands-on experience building front-end interfaces and robust back-end 
                    services. 
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
