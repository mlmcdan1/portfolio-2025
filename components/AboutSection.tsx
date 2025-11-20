'use client';

export default function AboutSection() {
    return(
        <section
            id="about"
            className="py-16">
                <div className="max-w-5xl mx-auto px-6 md:px-10">
                    {/* Main About Section */}
                    <div 
                        className="mb-12 text-center">
                        <span className="text-sky-300 uppercase tracking-[0.4em] text-xs block">
                            About Me
                        </span>
                        <h2 
                            data-aos="fade-up"
                            className="text-4xl font-semibold mb-6 text-slate-100">
                            Who Am I?
                        </h2>
                        <div className="text-left glass-panel glass-border px-8 py-10 leading-relaxed">
                            <p className="text-lg text-slate-200/90 mb-4">
                                <strong className="text-slate-100">Hi, I&apos;m Matthew McDaniel.</strong> I am a passionate full-stack 
                                web developer focused on building modern, responsive websites and
                                applications. I focus on creating clean, user-friendly designs to help 
                                bring ideas to life in the digital world.
                            </p>
                            <p className="text-lg text-slate-200/80">
                                Driven by a love for technology and innovation, I have successfully completed 
                                multiple projects across web development, software engineering, and design. I&apos;m 
                                always learning and excited to take on new challenges.
                            </p>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

                        {/* Service 1 */}
                        <div
                            data-aos="fade-right" 
                            className="glass-panel glass-border p-6 text-center animate-fadeInLeft">
                            <div className="text-sky-300 text-5xl mb-4">
                                <i className="fas fa-lightbulb"/>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100 tracking-wide uppercase">
                                Graphic Design
                            </h3>
                        </div>

                        {/* Service 2 */}
                        <div 
                            data-aos="fade-up"
                            className="glass-panel glass-border p-6 text-center animate-fadeInUp">
                            <div className="text-emerald-300 text-5xl mb-4">
                                <i className="fas fa-globe"/>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100 tracking-wide uppercase">
                                Web Design
                            </h3>
                        </div>

                        {/* Service 3 */}
                        <div 
                            data-aos="fade-up"
                            className="glass-panel glass-border p-6 text-center animate-fadeInUp">
                            <div className="text-amber-300 text-5xl mb-4">
                                <i className="fas fa-database"/>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100 tracking-wide uppercase">
                                Software Development
                            </h3>
                        </div>

                        {/* Service 4 */}
                        <div 
                            data-aos="fade-right"
                            className="glass-panel glass-border p-6 text-center animate-fadeInUp">
                            <div className="text-rose-300 text-5xl mb-4">
                                <i className="fas fa-mobile-alt"/>
                            </div>
                            <h3 className="text-lg font-semibold text-slate-100 tracking-wide uppercase">
                                Application Development
                            </h3>
                        </div>
                    </div>

                    {/* Call-to-Action Section */}
                    <div className="glass-panel glass-border py-10 px-10 text-center animate-fadeInLeft">
                        <h2 className="text-2xl font-semibold mb-4 pb-4 text-left text-slate-100">
                            I have earned my certification in Full-Stack Web Development from Michigan State University.
                        </h2>
                        <a 
                            href="#contact"
                            className="inline-flex bg-sky-500/90 text-white px-6 py-3
                            rounded-full font-semibold hover:bg-sky-400 transition duration-200 shadow-lg shadow-sky-500/25">
                                Hire Me
                        </a>
                    </div>
                </div>
        </section>
    )
}
