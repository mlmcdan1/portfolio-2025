'use client';

export default function AboutSection() {
    return(
        <section
            id="about"
            className="bg-gray-50 py-16">
                <div className="container mx-auto px-8">
                    {/* Main About Section */}
                    <div 
                        className="mb-12 text-center">
                        <span className="text-blue-600 uppercase tracking-widest text-sm">
                            About Me
                        </span>
                        <h2 
                            data-aos="fade-up"
                            className="text-4xl font-bold mb-6">
                            Who Am I?
                        </h2>
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Hi, I&apos;m Matthew McDaniel.</strong> I am a passionate full-stack 
                            web developer with a passion for building modern, responsive websites and
                            applications. I focus on creating clean, user-friendly designs to help 
                            bring ideas to life in the digital world.
                        </p>
                        <p className="text-lg text-gray-700">
                            Driven by a love for technology and innovation, I have successfully completed 
                            multiple projects across web development, software engineering, and design. I&apos;m 
                            always learning and excited to take on new challenges.
                        </p>
                    </div>

                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">

                        {/* Service 1 */}
                        <div
                            data-aos="fade-right" 
                            className="bg-white shadow-lg p-6 rounded-lg
                            text-center animate-fadeInLeft">
                            <div className="text-blue-500 text-5xl mb-4">
                                <i className="fas fa-lightbulb"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Graphic Design
                            </h3>
                        </div>

                        {/* Service 2 */}
                        <div 
                            data-aos="fade-up"
                            className="bg-white shadow-lg p-6 rounded-lg
                            text-center animate-fadeInUp">
                            <div className="text-green-500 text-5xl mb-4">
                                <i className="fas fa-globe"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Web Design
                            </h3>
                        </div>

                        {/* Service 3 */}
                        <div 
                            data-aos="fade-up"
                            className="bg-white shadow-lg p-6 rounded-lg
                            text-center animate-fadeInUp">
                            <div className="text-yellow-500 text-5xl mb-4">
                                <i className="fas fa-database"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Software
                            </h3>
                        </div>

                        {/* Service 4 */}
                        <div 
                            data-aos="fade-right"
                            className="bg-white shadow-lg p-6 rounded-lg
                            text-center animate-fadeInUp">
                            <div className="text-red-500 text-5xl mb-4">
                                <i className="fas fa-mobile-alt"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                Application
                            </h3>
                        </div>
                    </div>

                    {/* Call-to-Action Section */}
                    <div className="bg-blue-600 text-white py-8 px-12 rounded-lg
                    text-center animate-fadeInLeft">
                        <h2 className="text-2xl font-bold mb-4 pb-4 text-left">
                            I have earned my certification in Full-Stack Web Development<br/> 
                            from Michigan State University.
                        </h2>
                        <a 
                            href="#contact"
                            className="bg-white text-blue-600 px-6 py-3
                            rounded-full font-medium hover:bg-gray-100 transition">
                                Hire Me
                        </a>
                    </div>
                </div>
        </section>
    )
}
