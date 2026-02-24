export const metadata = {
  title: 'Matthew McDaniel | Software Engineer',
  description: 'Editorial-style portfolio for Matthew McDaniel, entry-level software engineer.',
};

import Hero from '@/components/Hero';
import MarqueeBand from '@/components/MarqueeBand';
import AboutPanel from '@/components/AboutPanel';
import ProjectSection from '@/components/ProjectSection';
import EducationList from '@/components/EducationList';
import Footer from '@/components/Footer';
import AOSWrapper from '@/utils/AOSWrapper';
import HireMeShowcaseSection from '@/components/HireMeShowcaseSection';

export default function Page() {
  return (
    <AOSWrapper>
      <div className="flex flex-col gap-8 pb-20">
        <Hero />
        <AboutPanel />
        <MarqueeBand />
        <ProjectSection />
        <HireMeShowcaseSection />
        <EducationList />
        <Footer />
      </div>
    </AOSWrapper>
  );
}
