'use client';

import React from 'react';

// React Icons
import { FaReact, FaBootstrap, FaNodeJs, FaJava, FaPython } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiSharp, SiCplusplus} from 'react-icons/si'

export default function SkillSection() {
    return (
        <section
            id='section'
            className='py-16 bg-white'
        >
            <div className='container mx-auto px-8'>
                {/* Heading */}
                <div className='text-center mb-12'>
                    <h2 className='text-4xl text-gray-800 font-bold'>
                        My Skills & Tools
                    </h2>
                    <p className='text-gray-600 mt-2'>
                        A snapshot of some technologies I use
                    </p>
                </div>

                {/* Skills Grid */}
                {/* 4 columns on md screen, 2 columns on smaller screens */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>

                    {/* React */}
                    <div className='flex flex-col items-center'>
                        <FaReact className='text-6xl text-blue-500 mb-2'/>
                        <p className='font-semibold'>React</p>
                    </div>

                    {/* Next.js */}
                    <div className='flex flex-col items-center'>
                        <TbBrandNextjs className='text-6xl text-gray-800 mb-2'/>
                        <p className='font-semibold'>Next.js</p>
                    </div>

                    {/* Tailwind CSS */}
                    <div className='flex flex-col items-center'>
                        <SiTailwindcss className='text-6xl text-blue-400 mb-2'/>
                        <p className='font-semibold'>Tailwind CSS</p>
                    </div>

                    {/* Bootstrap */}
                    <div className='flex flex-col items-center'>
                        <FaBootstrap className='text-6xl text-purple-600 mb-2'/>
                        <p className='font-semibold'>Bootstrap</p>
                    </div>

                    {/* Node.js */}
                    <div className='flex flex-col items-center'>
                        <FaNodeJs className='text-6xl text-green-500 mb-2'/>
                        <p className='font-semibold'>Node.js</p>
                    </div>

                    {/* C# */}
                    <div className='flex flex-col items-center'>
                        <SiSharp className='text-6xl text-purple-700 mb-2'/>
                        <p className='font-semibold'>C#</p>
                    </div>

                    {/* Java */}
                    <div className='flex flex-col items-center'>
                        <FaJava className='text-6xl text-red-600 mb-2'/>
                        <p className='font-semibold'>Java</p>
                    </div>

                    {/* Python */}
                    <div className='flex flex-col items-center'>
                        <FaPython className='text-6xl text-yellow-500 mb-2'/>
                        <p className='font-semibold'>Python</p>
                    </div>

                    {/* C++ */}
                    <div className='flex flex-col items-center'>
                        <SiCplusplus className='text-6xl text-blue-700 mb-2'/>
                        <p className='font-semibold'>C++</p>
                    </div>
                </div>
            </div>
        </section>
    );
}