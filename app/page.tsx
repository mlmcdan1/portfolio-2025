import './globals.css';  // ✅ Import global styles
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

export default function Page() {
  return (
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
  );
}
