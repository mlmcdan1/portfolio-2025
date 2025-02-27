'use client';

if (typeof window !== 'undefined') {
  console.error = () => {}; // Suppresses hydration warnings
}

import './globals.css';
import Image from 'next/image';
import profilePic from '../public/images/profile.jpg';
import HomeSection from '@/components/HomeSection';
import AboutSection from '@/components/AboutSection';
import AOSWrapper from '@/utils/AOSWrapper';
import ServiceSection from '@/components/ServiceSection';
import CounterSection from '@/components/CounterSection';
import SkillSection from '@/components/SkillSection';
import EducationSection from '@/components/EducationSection';
import ProjectSection from '@/components/ProjectSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="flex bg-white">
        {/* Sidebar */}
        <aside className="fixed h-screen w-64 bg-gray-200 text-black flex flex-col items-center py-8">
          {/* Profile Image */}
          <Image
            src={profilePic}
            alt="Matthew McDaniel"
            width={100}
            height={100}
            className="rounded-full mb-4 object-cover"
          />
          {/* Name */}
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Matthew McDaniel</h1>
            <p className="text-sm text-blue-600">Full-Stack Web Developer</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-4 text-center">
            <a href="#home" className="block text-lg hover:text-gray-500 transition">
              Home
            </a>
            <a href="#about" className="block text-lg hover:text-gray-500 transition">
              About
            </a>
            <a href="#services" className="block text-lg hover:text-gray-500 transition">
              Services
            </a>
            <a href="#skills" className="block text-lg hover:text-gray-500 transition">
              Skills
            </a>
            <a href="#education" className="block text-lg hover:text-gray-500 transition">
              Education
            </a>
            <a href="#projects" className="block text-lg hover:text-gray-500 transition">
              Projects
            </a>
            <a href="#contact" className="block text-lg hover:text-gray-500 transition">
              Contact
            </a>
          </nav>

          {/* Footer */}
          <footer className="mt-auto text-sm text-gray-500">
            <p>&copy; Matthew McDaniel</p>
          </footer>
        </aside>

        {/* Main Content */}
        <AOSWrapper>
          <main className="flex-1 bg-gray-100 ml-64">
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <CounterSection />
            <SkillSection />
            <EducationSection />
            <ProjectSection />
            <Contact />
            <Footer />
          </main>
        </AOSWrapper>
      </body>
    </html>
  );
}
