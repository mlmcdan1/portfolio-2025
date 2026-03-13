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
        <div className="relative full-bleed memphis-pattern theme-on-paper py-10">
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
            <MarqueeBand />
            <ProjectSection />
          </div>
        </div>
        <HireMeShowcaseSection />
        <div className="relative full-bleed memphis-pop theme-on-blue py-10">
          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12">
            <MarqueeBand word="education" />
            <EducationList />
          </div>
        </div>
        <Footer />
      </div>
    </AOSWrapper>
  );
}
