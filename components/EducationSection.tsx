'use client';

import React, { useState } from 'react';

interface EducationItem {
    title: string;
    content: JSX.Element;
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
            className='bg-white py-16 px-4 sm:px-8'
        >
            <div className='max-w-3xl mx-auto'>
                {/* Heading */}
                <div className='mb-12 text-center'>
                    <span className='block text-blue-600 text-sm uppercase tracking-widest mb-2'>
                        Education
                    </span>
                    <h2 className='text-4xl font-bold text-gray-800'>
                        Education
                    </h2>
                </div>

                {/* Accordion Panels */}
                <div>
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className='borer border-gray-200 rounded shadow-sm mb-6'
                            data-aos="fade-up"
                        >
                            {/* Panel Heading */}
                            <button
                                onClick={() => togglePanel(index)}
                                className='w-full flex justify-between items-center px-4 py-3
                                text-left bg-gray-100 hover:bg-gray-200 transition'
                            >
                            <h4 className='font-semibold text-gray-700'>
                                {item.title}
                            </h4>
                            <span className='text-black text-xl'>
                                {openIndex === index ? '-' : '+'}
                            </span>
                        </button>

                        {/* Panel Content */}
                        {openIndex === index && (
                            <div className='px-4 py-3 bg-white text-gray-700'>
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