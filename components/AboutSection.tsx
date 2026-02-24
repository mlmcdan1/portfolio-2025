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
                            Who I Am
                        </h2>
                        <div className="text-left glass-panel glass-border px-8 py-10 leading-relaxed">
                            <p className="text-lg text-slate-200/90 mb-4">
                                <strong className="text-slate-100">Hi, I&apos;m Matthew McDaniel.</strong> I&apos;m a recent graduate with a Master&apos;s in Software Engineering, focused on building clean, dependable web applications.
                            </p>
                            <p className="text-lg text-slate-200/80">
                                I enjoy turning requirements into clear UI, solid components, and well-structured APIs. I&apos;m looking for an entry-level role where I can contribute quickly and keep growing.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    )
}
