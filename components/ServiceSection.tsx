'use client';

import React from 'react';

export default function ServiceSection() {
    return (
        <section
            id='services'
            className='bg-gray-50 py-16'>
                <div className='container mx-auto px-8'>
                    {/* Section Heading */}
                    <div className='mb-12 text-center'>
                        <span className='text-blue-600 uppercase tracking-widest text-sm'>
                            What I Do
                        </span>
                        <h2 className='text-4xl font-bold mt-2'>
                            Here Are Some of My Expertise
                        </h2>
                    </div>
                </div>

                {/* Services Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {/* Service 1 */}
                    <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
                        <div className='text-blue-500 text-5xl mb-4'>
                            <i className='fas fa-code'></i>
                        </div>
                        <h3 className='text-xl font-semibold'>
                            Web Development
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Creating modern, responsive websites using the latest web technologies
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
                        <div className='text-green-500 text-5xl mb-4'>
                            <i className='fas fa-envelope'></i>
                        </div>
                        <h3 className='text-xl font-semibold'>
                            Email Development
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Building effective, responsive email templates for marketing campaigns. 
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
                        <div className='text-yellow-500 text-5xl mb-4'>
                            <i className='fas fa-paint-brush'></i>
                        </div>
                        <h3 className='text-xl font-semibold'>
                            Front-end Development
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Designing engaging user interfaces with clean, maintainable code.
                        </p>
                    </div>

                    {/* Service 4 */}
                    <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
                        <div className='text-red-500 text-5xl mb-4'>
                            <i className='fas fa-server'></i>
                        </div>
                        <h3 className='text-xl font-semibold'>
                            Back-end Development
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Building robust, scalable server-side applications and APIs
                        </p>
                    </div>

                    {/* Service 5 */}
                    <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
                        <div className='text-purple-500 text-5xl mb-4'>
                            <i className='fas fa-cloud'></i>
                        </div>
                        <h3 className='text-xl font-semibold'>
                            Cloud Solutions
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Deploying and managing cloud-based applications and infrastructures.
                        </p>
                    </div>

                    {/* Service 6 */}
                    <div className='bg-white shadow-lg p-6 rounded-lg text-center'>
                        <div className='text-teal-500 text-5xl mb-4'>
                            <i className='fas fa-database'></i>
                        </div>
                        <h3 className='text-xl font-semibold'>
                            Database Management
                        </h3>
                        <p className='text-gray-600 mt-2'>
                            Designing and maintaining efficient and secure databases.
                        </p>
                    </div>
                </div>     
        </section>
        
    );
}