'use client';

import React from 'react';
import CountUp from 'react-countup';

export default function CounterSection() {
    return(
        <section
            id='section'
            className='relative bg-fixed bg-cover bg-center bg-no-repeat py-16'
            style={{ backgroundImage: "url('/images/sky-shot.jpg')"}}
        >
            {/* Overlay */}
            <div className='absolute inset-0 bg-black bg-opacity-50'></div>

            {/* Content */}
            <div className='relative container mx-auto px-8'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white'>

                    {/* Counter 1 */}
                    <div data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <CountUp
                            start={0}
                            end={309}
                            duration={5}
                            className='text-5xl font-bold'
                        />
                        <p className='mt-2 text-lg'>Cups of Coffee</p>
                    </div>

                    {/* Counter 2 */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                    >
                        <CountUp
                            start={0}
                            end={356}
                            duration={5}
                            className='text-5xl font-bold'
                        />
                        <p className='mt-2 text-lg'>Projects</p>
                    </div>

                    {/* Counter 3 */}
                    <div data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="400"
                    >
                        <CountUp
                            start={0}
                            end={30}
                            duration={5}
                            className='text-5xl font-bold'
                        />
                        <p className='mt-2 text-lg'>Clients</p>
                    </div>

                    {/* Counter 4 */}
                    <div data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="600"
                    >
                        <CountUp
                            start={0}
                            end={10}
                            duration={5}
                            className='text-5xl font-bold'
                        />
                        <p className='mt-2 text-lg'>Partners</p>
                    </div>
                </div>
            </div>
        </section>
    );
}