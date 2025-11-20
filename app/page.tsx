export const metadata = {
  title: 'Matthew McDaniel | Software Developer',
  description: 'Portfolio site showcasing the work and experience of Matthew McDaniel, full-stack web developer',
}

import './globals.css';  
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
import HireMeShowcaseSection from '@/components/HireMeShowcaseSection';

export default function Page() {
  return (
    <AOSWrapper>
      <main className="flex flex-col gap-12 pb-20">
        <HomeSection />
        <AboutSection />
        <HireMeShowcaseSection/>
        <ServiceSection />
        <CounterSection />
        <SkillSection />
        <EducationSection />
        <ProjectSection />
        <Contact />
        <Footer />
      </main>
    </AOSWrapper>
  );
}
