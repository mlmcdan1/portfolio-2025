import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import CounterSection from "@/components/CounterSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import ServiceSection from "@/components/ServiceSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
    return (
      <section className="bg-gray-100">
        <HomeSection />
        <AboutSection />
        <ServiceSection />
        <CounterSection />
        <SkillSection />
        <EducationSection />
        <ProjectSection />
        <Contact />
        <Footer />
      </section>
    );
  }
  