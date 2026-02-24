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
                            What I Can Do Immediately
                        </span>
                        <h2 className='text-4xl font-semibold mt-3 text-slate-100'>
                            Ready to contribute on day one
                        </h2>
                        <p className='mt-4 text-slate-300/80 max-w-2xl mx-auto'>
                            Practical skills I can apply to real tickets right away.
                        </p>
                    </div>

                <div className='glass-panel glass-border p-8 md:p-10'>
                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-slate-200/90 list-disc pl-6'>
                        <li>Build and maintain React/Next.js UI with clean components and reusable patterns.</li>
                        <li>Integrate REST APIs, handle loading/error states, and wire up forms.</li>
                        <li>Create responsive layouts in Tailwind CSS with strong attention to spacing and typography.</li>
                        <li>Implement basic authentication flows and protected routes.</li>
                        <li>Write clear TypeScript types and keep components easy to extend.</li>
                        <li>Use Git and pull requests to collaborate and ship small, safe changes.</li>
                    </ul>
                </div>
                </div>
        </section>
        
    );
}
