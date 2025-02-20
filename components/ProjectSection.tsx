'use client';

import React from 'react';
import Image from 'next/image';

//file for project data


export default function ProjectSection() {
    return (
        <section
            id='projects'
            className='bg-white py-16 px-4 sm:px-8'>
                <div className='max-w-5xl mx-auto'>
                    {/* Section Heading */}
                    <div className='mb-12 text-center'>
                        <h2 className='text-4xl font-bold'>My Projects</h2>
                        <p className='text-gray-600 mt-2'>A selection of my recent work</p>
                    </div>

                </div>

        </section>
    )
}